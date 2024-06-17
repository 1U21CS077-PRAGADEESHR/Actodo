import Header from "./components/header";
import Card from "./components/card";
import TodoContainer from "./components/todoContainer";
import TodoList from "./components/todolist";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Landing from "./pages/landing";
import { useState } from "react";
function App(){
  const [users,setUsers]=useState([{
    username:"john",
    password:"123"

}]
)
  return(
    <>
    <BrowserRouter>
   
    <Routes>
    <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
    <Route path='/signup' element={<SignUp users={users} setUsers={setUsers}></SignUp>}></Route>
    <Route path='/landing' element={<Landing></Landing>}>
    </Route>
  
    </Routes>
    </BrowserRouter>
  
  
    
   
    </>
  )
}
export default App;
