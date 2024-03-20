
import { Box } from '@chakra-ui/react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './components/Navbar'

function App() {
  
  return (
    
      <Box >
        <Navbar />
        <Box marginTop={"50px"}>
            <AllRoutes />
        </Box>
        
      </Box>
    
  )
}

export default App
