import React, { useState } from 'react';
import { Button, Drawer, notification } from 'antd';
import { handleUpLoadFile, updateUserApiWithAvatar } from '../../Services/api.service';
const ViewUserDetail = (props) => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const { dataDetail, setdataDetail, isDetailOpen, setisDetailOpen } = props;
    const handleUpdateUserAvatar = async () => {
        const res = await handleUpLoadFile(selectedFile, "avatar");
        if (res.data) {
            const newAvatar = res.data.fileUploaded;
            const resUpdateAvatar = await updateUserApiWithAvatar(
                dataDetail._id,
                dataDetail.fullName,
                dataDetail.phone,
                newAvatar);
            if (resUpdateAvatar.data) {
                notification.success({
                    message: 'Cập nhật avatar thành công',
                    description: "Yahooo",
                });
                setisDetailOpen(false);
                setPreview(null);
                setSelectedFile(null);
            } else {
                notification.error({
                    message: 'Error',
                    description: JSON.stringify(resUpdateAvatar.message),
                });
            }
        } else {
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message),
            });
            return;
        }
    }
    const handleUploadAvatar = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setPreview(null)
            setSelectedFile(null)
            return;
        }
        const file = e.target.files[0]
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file))
    }

    return (
        <>
            <Drawer
                width={"30vw"}
                title="User detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => { setisDetailOpen(false); setdataDetail(null); }}
                open={isDetailOpen}
            >
                {dataDetail ?
                    <>
                        <p>Avatar</p>
                        <div style={{ marginTop: "10px", height: "100px", width: "150px" }}>
                            <img style={{ width: '100%', height: '100%', objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="Avatar" />
                        </div>
                        {
                            preview &&
                            <>
                                <div style={{ marginTop: "10px", height: "100px", width: "150px" }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: "contain" }} src={preview} alt="Avatar" />
                                </div>
                                <Button
                                    onClick={handleUpdateUserAvatar}
                                    type='primary'>Save</Button>
                            </>
                        }
                        <div>
                            {/*htmlFor nghĩa là mỗi lần nhấn vào label sẽ có nghĩa là bấm vào input (tự động mapping)*/}
                            <label style={{
                                display: "block",
                                width: "fit-content",
                                marginTop: "10px",
                                padding: "5px 10px",
                                backgroundColor: "#2e93f1ff",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                                htmlFor='btnUpLoad'>
                                Upload Avatar
                            </label>
                            <input type="file" hidden id='btnUpLoad' onChange={(event) => handleUploadAvatar(event)} />
                        </div>
                        <p>Id: {dataDetail._id}</p>
                        <br />
                        <p> Full name: {dataDetail.fullName}</p>
                        <br />
                        <p>Email: {dataDetail.email}</p>
                        <br />
                        <p>Phone: {dataDetail.phone}</p>
                    </>
                    : <p>No data</p>
                }
            </Drawer>
        </>
    )
}
export default ViewUserDetail