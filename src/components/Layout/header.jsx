import { Link, NavLink } from 'react-router-dom';
import { AppstoreOutlined, BookOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const Header = () => {
    const [current, setCurrent] = useState('home');
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
    ];
    return (
        // react không dùng tag a để chuyển hướng mà dùng tag link.
        //Navlink khac voi link o chỗ tự động thêm class active dựa vào page đã bấm.
        //lưu ý rằng NavLink chỉ tự động thêm class vào thôi chứ ko tự động css cho class đó.
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header