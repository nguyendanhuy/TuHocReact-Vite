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
const UserTable = () => {
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
    const [dataUser, setDataUser] = useState([
        { name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
        { name: 'James', age: 23, address: 'New York No. 2 Lake Park' },
    ]);
    //khi khai bao useEffect thì nên khai báo phía dưới của State
    //UseEffect chỉ chạy 1 lần khi truyền vào array rỗng
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        console.log(">>>>Run load user");
        const userList = await fetchAllUsersApi();
        console.log(">>>>End load user", userList.data);
        setDataUser(userList.data);
    }
    return <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />;
}
export default UserTable;