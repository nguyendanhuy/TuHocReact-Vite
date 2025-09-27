import { Table, Space, Popconfirm, notification, message } from 'antd';
import { deletedUserApi } from '../../Services/api.service';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './UpdateUserModal';
import ViewUserDetail from './ViewUserDetail';
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
    const [isModalUpdateOpen, setisModalUpdateOpen] = useState(false);
    const { dataUser, loadUser, currentPage, pageSize, total, setCurrentPage, setPageSize } = props
    const [dataUpdate, setdataUpdate] = useState(null);
    const [dataDetail, setdataDetail] = useState(null);
    const [isDetailOpen, setisDetailOpen] = useState(false);
    const handleDeleteUser = async (_id) => {
        const res = await deletedUserApi(_id);
        if (res.data) {
            notification.success({
                message: 'Đã xóa user thành công',
                description: "Yahooo",
            });
            loadUser();
        } else {
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message),
            });
        }
    }
    const Onchange = (pagination, filters, sorter, extra) => {
        if (pagination.current !== +currentPage) {
            // dùng dấu + để chuyển string sang number (tự động)
            setCurrentPage(+pagination.current);
        }
    }
    const cancel = e => {
        message.error('Click on No');
    };
    const columns = [
        {
            title: 'Stt',
            render: (_, record, index) => {
                return (
                    <>
                        {(index + 1) + (currentPage - 1) * pageSize}
                    </>
                );
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a onClick={() => {
                        setisDetailOpen(true);
                        setdataDetail(record);
                    }
                    }> {record._id}</a>
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
                    <EditOutlined onClick={() => {
                        setisModalUpdateOpen(true);
                        setdataUpdate(record);
                    }} style={{ cursor: "pointer", color: "blue" }} />
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleDeleteUser(record._id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={(record) => record._id}
                pagination={
                    {
                        current: currentPage,
                        pageSize: pageSize,
                        showSizeChanger: false,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={Onchange}
            />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setisModalUpdateOpen={setisModalUpdateOpen}
                dataUpdate={dataUpdate}
                setdataUpdate={setdataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                isDetailOpen={isDetailOpen}
                setisDetailOpen={setisDetailOpen}
                dataDetail={dataDetail}
                setdataDetail={setdataDetail}
            />
        </>
    )
}
export default UserTable;