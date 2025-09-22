
import Header from './components/Layout/header'
import Footer from './components/Layout/footer'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default App
