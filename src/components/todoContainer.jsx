import AddTodoForm from "./addtodoform"
import TodoList from "./todolist"
import { useState } from "react"
function TodoContainer(){
    const [activityArr,setActivityArr]=useState([
        {
            id:1,activity:"Wake up at 6.30 AM"
        },
        {
            id:2,activity:"Work out every Day"
        }
    ])
    return(
        <div>
        <div className="flex gap-5 flex-wrap max-w-[90%] ">
            <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr}></AddTodoForm>
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}></TodoList>
    </div>
    </div>
    )
}
export default TodoContainer