import { Input, Button, Form, notification, Row, Col, Divider } from "antd"
import { registerUserApi } from "../Services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form1, form2] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async values => {
        const res = await registerUserApi(values.username, values.email, values.password, values.phonenumber);
        if (res.data) {
            notification.success({
                message: 'Register successfully',
                description: "đăng ký thành công",
            });
            navigate("/login");
        } else {
            notification.error({
                message: 'Error',
                description: JSON.stringify(res.message),
            });
        }
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            form={form1}
            layout="vertical"
            //initialValues dùng để set giá trị mặc định cho form dựa vào key name của form item
            initialValues={{ remember: true }}
            onFinish={(values) => onFinish(values)}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Row>
                <Col md={24}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'The input is not valid E-mail!' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Please input your password!',
                        },
                        { min: 3, message: 'Mật khẩu phải có ít nhất 3 ký tự' }
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        label="Phone number"
                        name="phonenumber"
                        rules={[
                            { min: 0, message: 'Số phải >= 0' },
                            { max: 10, message: 'Số phải <= 10' },
                            { pattern: /^0[0-9]{9}$/, message: 'Số điện thoại phải có 10 chữ số, bắt đầu bằng 0!' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label={null}>

                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                        <Button onClick={() => {
                            // dùng để lấy giá trị của tất cả các input trong form
                            form1.setFieldsValue({
                                username: 'test',
                                email: "test"
                            })
                            form1.getFieldValue("username");
                        }}> Test </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Divider />
            <div>Have an account? <Link to={"/login"}>Login</Link></div>
        </Form >
    )
}
export default RegisterPage