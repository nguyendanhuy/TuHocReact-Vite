import UserForm from "../components/user/Userform"
import UserTable from "../components/user/Usertb"

const UserPage = () => {
    return (
        <div>
            User table
            <div>
                <UserForm />
                <UserTable />
            </div>
        </div>
    )
}
export default UserPage