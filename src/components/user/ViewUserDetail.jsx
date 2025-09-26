import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserDetail = (props) => {
    const { dataDetail, setdataDetail, isDetailOpen, setisDetailOpen } = props;
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
                        <div>
                            <p>Avatar</p>
                            <img style={{ width: '200px', height: '200px' }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} alt="Avatar" />
                        </div>
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
                            <input type="file" hidden id='btnUpLoad' />
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