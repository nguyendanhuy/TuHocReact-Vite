import { useEffect, useState } from "react";
import UserForm from "../components/user/Userform"
import UserTable from "../components/user/Usertb"
import { fetchAllUsersApi } from "../Services/api.service";

const UserPage = () => {
    const [dataUser, setDataUser] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);
    //khi khai bao useEffect thì nên khai báo phía dưới của State
    //UseEffect chỉ chạy 1 lần khi truyền vào array rỗng
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const userList = await fetchAllUsersApi(currentPage, pageSize);
        if (userList.data) {
            setDataUser(userList.data.result);
            setCurrentPage(userList.data.meta.current);
            setPageSize(userList.data.meta.pageSize);
            setTotal(userList.data.meta.total);
        }
    }
    //lift-up-state
    return (
        <div style={{ padding: "20px" }}>
            User table
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    currentPage={currentPage}
                    pageSize={pageSize}
                    total={total}
                    setCurrentPage={setCurrentPage}
                    setPageSize={setPageSize}
                    setTotal={setTotal}
                    dataUser={dataUser}
                    loadUser={loadUser} />
            </div>
        </div>
    )
}
export default UserPage