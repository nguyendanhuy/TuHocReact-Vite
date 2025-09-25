import { Table, Tag, Space } from 'antd';
import React, { useEffect } from 'react';
import { fetchAllUsersApi } from '../../Services/api.service';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import UpdateUserModal from './UpdateUserModal';
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['gooner'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sydney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];
const UserTable = (props) => {

    const { dataUser } = props
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#'>{record._id}</a>
                )
            },
        },
        {
            title: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle" style={{ display: "flex" }}>
                    <Link><EditOutlined style={{ cursor: "pointer", color: "blue" }} /></Link>
                    <Link><DeleteOutlined style={{ cursor: "pointer", color: "red" }} /></Link>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    )
}
export default UserTable;