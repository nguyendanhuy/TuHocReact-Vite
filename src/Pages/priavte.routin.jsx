import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);
    if (user && user._id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    return (
        <Navigate to="/login" replace />)
}
export default PrivateRoute;