import { Box, Button, HStack} from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { url } from '../Sources';

const Navbar = () => {
    const token = localStorage.getItem('token');
    const handleLogout = async() => {
        try {
            const res = await axios.get(`${url}/user/logout`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            console.log(res)
            alert("Logged out")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Box>
        <HStack display={"flex"} justifyContent={"center"} padding={"20px"} backgroundColor={"green"}>
            <Link to={"/"}>All Tasks</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>SignUp</Link>
            <Button onClick={() => handleLogout()}>Logout</Button>
        </HStack>

    </Box>
  )
}

export default Navbar