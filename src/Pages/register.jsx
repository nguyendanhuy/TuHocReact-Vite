import { Input, Button, Form } from "antd"

const RegisterPage = () => {
    const [form1, form2] = Form.useForm();
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            form={form1}
            layout="vertical"
            style={{ width: "80%" }}
            //initialValues dùng để set giá trị mặc định cho form dựa vào key name của form item
            initialValues={{ remember: true }}
            onFinish={(values) => onFinish(values)}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div style={{
                margin: "50px",
                display: "flex",
                flexDirection: "column",
            }}>
                <Form.Item
                    label="Username"
                    name="username"
                // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phonenumber"
                // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </div >
        </Form>
    )

}
export default RegisterPage