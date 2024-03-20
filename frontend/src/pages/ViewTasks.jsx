import { Box, HStack, Text, VStack } from "@chakra-ui/react"
import axios from "axios";
import { useEffect, useState } from "react"
import { url } from "../Sources";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";


const ViewTasks = () => {
    const token = localStorage.getItem('token')
    const [todotasks,setTodoTasks] = useState([]);
    const [progressTask,setProgressTask] = useState([])
    const [doneTask,setDoneTask] = useState([])
    
    // get tasks having status todo
    const handleViewTodoTasks = async() => {
        try {
            const res = await axios.get(`${url}/task?status=to-do&page=1`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(res.data.tasks){
                setTodoTasks(res.data.tasks);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // get tasks having status todo
    const handleViewProgressTasks = async() => {
        try {
            const res = await axios.get(`${url}/task?status=in-progress&page=1`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(res.data.tasks){
                setProgressTask(res.data.tasks);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // get tasks having status todo
    const handleViewDoneTasks = async() => {
        try {
            const res = await axios.get(`${url}/task?status=done&page=1`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(res.data.tasks){
                setDoneTask(res.data.tasks);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleViewTodoTasks();
        handleViewProgressTasks()
        handleViewDoneTasks()
    }, [])
    
  return (
    <Box margin={"auto"}>
        <AddTask />
        <Box>
            <Text fontSize={"1.8rem"} fontWeight={"600"} textAlign={"center"} marginBottom={"50px"}>All Tasks</Text>
            <Box>
                <HStack display={"flex"} justifyContent={"space-evenly"} >
                        <Text fontSize={"1.5rem"} fontWeight={600} textDecoration={"underline"}>Todo</Text>
                        <Text fontSize={"1.5rem"} fontWeight={600} textDecoration={"underline"}>In-Progress</Text>
                        <Text fontSize={"1.5rem"} fontWeight={600} textDecoration={"underline"}>Done</Text>
                </HStack>
                <HStack display={"flex"} justifyContent={"space-evenly"}>
                    <Box >
                        
                        <VStack>
                            {todotasks.map((ele,i) => (
                                <TaskCard key={i} {...ele}/>
                            ))}
                        </VStack>
                    </Box>
                    <Box top={"0"}>
                        
                        <VStack>
                            {progressTask.map((ele,i) => (
                                <TaskCard key={i} {...ele}/>
                            ))}
                        </VStack>
                    </Box>
                    <Box top={"0"}>
                        
                        <VStack  top={"0"}>
                            {doneTask.map((ele,i) => (
                                <TaskCard key={i} {...ele}/>
                            ))}
                        </VStack>
                    </Box>
                </HStack>
            </Box>
        </Box>
    </Box>
  )
}

export default ViewTasks