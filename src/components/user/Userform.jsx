import { useState } from 'react';
import { Input, notification } from 'antd';
import { Button, } from 'antd';
import { createUserApi } from '../../Services/api.service';
import Modal from 'antd/es/modal/Modal';
const UserForm = (props) => {
    const { loadUser } = props;
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSubmitBtn = async () => {
        const res = await createUserApi(fullName, email, passWord, phoneNumber);
        if (res.data) {
            notification.success({
                message: 'User created successfully',
                description: "Tạo user thành công",
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
    const resetAndClose = () => {
        setIsModalOpen(false);
        setfullName("");
        setEmail("");
        setPassWord("");
        setPhoneNumber("");
    }

    return (
        <div >
            <div style={{ display: "flex", justifyContent: "space-between", }}>
                <h3>Table Users</h3>
                <Button onClick={() => { setIsModalOpen(true) }} type="primary">Create user</Button>
            </div>
            <Modal
                title="User create form"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => { handleSubmitBtn() }}
                onCancel={() => resetAndClose()}
                maskClosable={false}
                okText={"Create"}
            >
                <div style={{ width: '100%', display: "flex", gap: "10px", flexWrap: "wrap", flexDirection: "column" }}>
                    <div>
                        <span>FullName</span>
                        <Input
                            value={fullName}
                            onChange={(e) => setfullName(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            value={passWord}
                            onChange={(e) => setPassWord(e.target.value)} />
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
export default UserForm;