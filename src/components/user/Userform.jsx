import React, { useState } from 'react';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
const UserForm = () => {
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const handleClick = () => {
        console.log(fullName, email, passWord, phoneNumber);
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