import React, { useContext, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, message, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserApi } from '../Services/api.service';
import { AuthContext } from '../context/auth.context';

const LoginPage = () => {
    const naviagte = useNavigate();
    const [pending, setPending] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const onFinish = async values => {
        setPending(true);
        const res = await loginUserApi(values.email, values.password);
        if (res.data) {
            message.success('Login successfully');
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            naviagte("/");
        } else {
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message),
            });
        }
        setPending(false);
    };
    const [form1] = Form.useForm();
    return (
        <Form
            name="login"
            form={form1}
            initialValues={{ remember: true }}
            style={{
                maxWidth: 360,
                margin: "auto",
                padding: '20px',
                marginTop: '50px',
                border: '1px solid #ccc',
                borderRadius: '10px',
            }}
            onFinish={(values) => onFinish(values)}
        >
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Login</div>
            <br />
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link to={"/"}>Go to home page</Link>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button
                    loading={pending}
                    block type="primary" htmlType="submit">
                    Log in
                </Button>
                or <Link to={"/register"}>Register now!</Link>
            </Form.Item>
        </Form>
    );
};
export default LoginPage;