import { useEffect, useState } from 'react';
import { Input, notification } from 'antd';
import { Button, } from 'antd';
import Modal from 'antd/es/modal/Modal';
import { updateUserApi } from '../../Services/api.service';
const UpdateUserModal = (props) => {
    const { isModalUpdateOpen, setisModalUpdateOpen, dataUpdate, setdataUpdate, loadUser } = props;
    const [fullName, setfullName] = useState("");
    const [id, setId] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    useEffect(() => {
        if (dataUpdate) {
            setfullName(dataUpdate.fullName);
            setId(dataUpdate._id);
            setPhoneNumber(dataUpdate.phone);
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserApi(id, fullName, phoneNumber);
        if (res.data) {
            notification.success({
                message: 'User update successfully',
                description: "Chập nhận user thành công",
            });
            resetAndClose();
            loadUser();
        } else {
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message),
            });
        }
    }
    console.log(">>>Check dataUpdate useEffect123", dataUpdate);


    const resetAndClose = () => {
        setisModalUpdateOpen(false);
        setfullName("");
        setId("");
        setPhoneNumber("");
        setdataUpdate(null);
    }
    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-between", }}>
                <Button onClick={() => { setisModalUpdateOpen(true) }} type="primary">Create user</Button>
            </div>
            <Modal
                title="Update a user"
                open={isModalUpdateOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => {
                    resetAndClose();
                }}
                maskClosable={false}
                okText={"Save"}
            >
                <div style={{ width: '100%', display: "flex", gap: "10px", flexWrap: "wrap", flexDirection: "column" }}>
                    <div>
                        <span>id</span>
                        <Input
                            disabled
                            value={id}
                            onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div>
                        <span>FullName</span>
                        <Input
                            value={fullName}
                            onChange={(e) => setfullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}
export default UpdateUserModal