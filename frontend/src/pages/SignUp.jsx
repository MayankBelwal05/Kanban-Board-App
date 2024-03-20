import { Box, Button, Input, Select, VStack } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react"
import { url } from "../Sources";


const SignUp = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("")
  const [pass,setPass] =useState("");
  const [role,setRole] = useState("regular user")

  const handleAddUser = async() => {
    try {
      const res = await axios.post(`${url}/user/register`,{username,email,pass,role})
      alert(res.data.msg)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    
      <Box width={"40%"} margin={"auto"} marginBottom={"50px"}>
      <VStack>
        <Input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
        
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>regular-user</option>
          <option>admin</option>
          
        </Select>
        <Button onClick={() => handleAddUser()}>Register</Button>
      </VStack>
    </Box>
  )
}

export default SignUp