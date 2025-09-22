import { Link, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        // react không dùng tag a để chuyển hướng mà dùng tag link.
        //Navlink khac voi link o chỗ tự động thêm class active dựa vào page đã bấm.
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/User">User</NavLink></li>
            <li><NavLink to="/Product">Product</NavLink></li>
        </ul>
    )
}
export default Header