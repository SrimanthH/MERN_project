import { Box } from '@chakra-ui/react';
import HomePage from './page/HomePage';
import CreatePage from './page/CreatePage';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <Box minH={"100vh"}>
      { <Navbar/>}
      <Routes>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/create" element={<CreatePage/>}/>


      </Routes>
      
    </Box>
  )
}

export default App
