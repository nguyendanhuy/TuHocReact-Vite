import { Link, NavLink } from 'react-router-dom';
import { AppstoreOutlined, BookOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.context';

const Header = () => {
    const { user } = useContext(AuthContext);
    const [current, setCurrent] = useState('home');
    console.log(user);
    const onClick = e => {
        setCurrent(e.key);
    }
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/user">Users</Link>,
            key: 'user',
            icon: <UserOutlined />,
        },
        {
            label: <Link to="/product">Products</Link>,
            key: 'product',
            icon: <BookOutlined />,
        },
        {
            label: 'Cài đặt',
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to="/login">Login</Link>,
                    key: 'login',
                    icon: <MailOutlined />,
                },
                {
                    label: <Link to="/register">Register</Link>,
                    key: 'register',
                    icon: <AppstoreOutlined />,
                }
            ]
        }
    ];
    return (
        // react không dùng tag a để chuyển hướng mà dùng tag link.
        //Navlink khac voi link o chỗ tự động thêm class active dựa vào page đã bấm.
        //lưu ý rằng NavLink chỉ tự động thêm class vào thôi chứ ko tự động css cho class đó.
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header