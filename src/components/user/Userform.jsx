import React, { useState } from 'react';
import { Input, notification } from 'antd';
import { Button, Flex } from 'antd';
import axios from 'axios';
import { createUserApi } from '../../Services/api.service';
const UserForm = () => {
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleClick = async () => {
        const res = await createUserApi(fullName, email, passWord, phoneNumber);
        if (res.data) {
            notification.success({
                message: 'User created successfully',
                description: "Tạo user thành công",
            });
        }
        console.log(res.data);
    }
    return (
        <div style={{ width: '80%', margin: '20px auto', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', display: "flex", gap: "10px", flexWrap: "wrap", flexDirection: "column" }}>
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
            <div>
                <Button onClick={handleClick} type="primary">Create user</Button>
            </div>
        </div>
    )
}
export default UserForm;