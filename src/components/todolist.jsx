import { useState } from "react"
import TodoItem from "./todoitem"

function TodoList(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr



    return(
        <div className="bg-[#E8B38C] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium">Today's Activity</h1>
        {activityArr.length==0?<p>You haven't added any activity yet</p>:""}
        
        <p className="max-md:text-base">{activityArr.map(function(item,index){
            return <TodoItem id={item.id} item={item} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></TodoItem>
        })
}</p>
       
    </div>
    )

}
export default TodoList