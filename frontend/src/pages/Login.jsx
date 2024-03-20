import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios";
import { url } from "../Sources";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const handleLogin = async() => {
        
        try {
            console.log({email,pass})
            const res = await axios.post(`${url}/user/login`,{email,pass});
            if(res.data.token){
                localStorage.setItem('token',res.data.token)
                alert("Login Successful")
            }
            
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <Box width={"40%"} margin={"auto"}>
        <Text fontSize={"1.8rem"} fontWeight={"600"}>Login</Text>
        <FormControl >
            <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
            <Input placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)}/> 
            <Button onClick={() => handleLogin()}>Login</Button>
        </FormControl>
    </Box>
  )
}

export default Login