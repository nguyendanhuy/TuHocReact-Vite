
import Header from './components/Layout/header'
import Footer from './components/Layout/footer'
import { Outlet } from 'react-router-dom'
import { getAccountApi } from './Services/api.service';
import { use, useContext, useEffect } from 'react';
import { AuthContext } from './context/auth.context';
import { Spin } from 'antd';
function App() {
  const { user, setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    const res = await getAccountApi();
    if (res.data) {
      setUser(res.data.user);
      console.log(res.data);
    }
    setIsAppLoading(false);
  }
  return (
    <>
      {isAppLoading ? <Spin fullscreen={true} /> :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>}
    </>
  )
}
export default App
