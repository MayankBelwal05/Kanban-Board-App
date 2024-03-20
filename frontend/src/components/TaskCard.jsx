import { Box, Button, HStack, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { url } from '../Sources'
import { Link, Navigate } from 'react-router-dom'
import Update from './Update'

const TaskCard = (ele) => {
    const token = localStorage.getItem("token");

    const handleDone = async (id) => {
        try {

            const res = await axios.patch(`${url}/task/${id}`, { status: "done" }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }



            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const handleProgress = async (id) => {
        try {

            const res = await axios.patch(`${url}/task/${id}`, { status: "in-progress" }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }



            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    // const handleEdit = (ele) => {
    //     <Navigate to={"/update"} {...ele}/>
    // }
    return (
        <Box backgroundColor={"yellow"} width={"80%"} padding={"30px"} borderRadius={"10px"}>
            <Text fontSize={"1.2rem"}>Title: {ele.title}</Text>
            <Text fontSize={"1.2rem"}>Body: {ele.body}</Text>
            <Text fontSize={"1.2rem"} >Status: {ele.status}</Text>
            <HStack display={"flex"} justifyContent={"space-evenly"}>
                <Button isDisabled={true} bg={"red"} sx={{ border: "2px solid red", borderRadius: "4px" }}>Todo Task</Button>
                <Button isDisabled={ele.status == ("in-progress" || "done")} bg={"orange"} onClick={() => handleProgress(ele._id)} sx={{ border: "2px solid red", borderRadius: "4px" }}>In-Progress</Button>
                <Button isDisabled={ele.status == "done"} bg={"green"} onClick={() => handleDone(ele._id)} sx={{ border: "2px solid red", borderRadius: "4px" }}>Done</Button>
            </HStack>
            {/* <Link to="/update" {...ele}><Button>Edit</Button></Link> */}
            <Button onClick={() => handleEdit(ele)}>Edit</Button>
        </Box>
    )
}

export default TaskCard