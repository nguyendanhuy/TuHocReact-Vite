import { Table, Tag, Space } from 'antd';
import React, { useEffect } from 'react';
import { fetchAllUsersApi } from '../../Services/api.service';
import { useState } from 'react';
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
        },
        {
            title: 'fullName',
            dataIndex: 'fullName',
        },
        {
            title: 'email',
            dataIndex: 'email',
        },
    ];
    return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
}
export default UserTable;