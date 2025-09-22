import './header.css';

const Header = () => {
    return (
        <ul>
            <li><a className="active" href="/">Home</a></li>
            <li><a href="/User">User</a></li>
            <li><a href="/Product">Product</a></li>
        </ul>
    )
}
export default Header