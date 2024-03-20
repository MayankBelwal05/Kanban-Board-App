import { Routes,Route } from 'react-router-dom'
import ViewTasks from '../pages/ViewTasks'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Update from '../components/Update'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path={"/"} element={<ViewTasks />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/signup"} element={<SignUp />}/>
        <Route path={"/update"} element={<Update />}/>
    </Routes>
  )
}

export default AllRoutes