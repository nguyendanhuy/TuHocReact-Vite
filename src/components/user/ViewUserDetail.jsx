import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
const ViewUserDetail = (props) => {
    const { dataDetail, setdataDetail, isDetailOpen, setisDetailOpen } = props;
    return (
        <>
            <Drawer
                title="User detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => { setisDetailOpen(false); setdataDetail(null); }}
                open={isDetailOpen}
            >
                {dataDetail ?
                    <>
                        <p>Id: {dataDetail._id}</p>
                        <p> Full name: {dataDetail.fullName}</p>
                        <p>Email: {dataDetail.email}</p>
                        <p>Phone: {dataDetail.phone}</p>
                    </>
                    : <p>No data</p>
                }
            </Drawer>
        </>
    )
}
export default ViewUserDetail