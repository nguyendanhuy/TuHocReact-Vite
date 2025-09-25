import { useEffect, useState } from "react";
import UserForm from "../components/user/Userform"
import UserTable from "../components/user/Usertb"
import { fetchAllUsersApi } from "../Services/api.service";

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    //khi khai bao useEffect thì nên khai báo phía dưới của State
    //UseEffect chỉ chạy 1 lần khi truyền vào array rỗng
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const userList = await fetchAllUsersApi();
        console.log(">>>>End load user", userList.data);
        setDataUser(userList.data);
    }
    //lift-up-state
    return (
        <div style={{ padding: "20px" }}>
            User table
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable dataUser={dataUser} />
            </div>
        </div>
    )
}
export default UserPage