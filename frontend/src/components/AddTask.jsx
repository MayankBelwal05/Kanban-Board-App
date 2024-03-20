import { Box, Button, Input, Select, VStack } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react"
import { url } from "../Sources";


const AddTask = () => {
  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");
  const [status,setStatus] = useState("to-do");
  const token = localStorage.getItem('token');
  const handleAddTask = async() => {
    try {
      const res = await axios.post(`${url}/task`,{title,body,status},{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(res)
      alert(res.data.msg)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Box width={"40%"} margin={"auto"} marginBottom={"50px"}>
      <VStack>
        <Input placeholder="task" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Input placeholder="about task" value={body} onChange={(e) => setBody(e.target.value)}/>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>to-do</option>
          <option>in-progress</option>
          <option>done</option>
        </Select>
        <Button onClick={() => handleAddTask()}>Add Task</Button>
      </VStack>
    </Box>
  )
}

export default AddTask