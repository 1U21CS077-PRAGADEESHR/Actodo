import { useState } from "react"

function AddTodoForm(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr

    const [newActivity,setNewActivity]=useState("")
    function changeinput(e){
        setNewActivity(e.target.value)
    }
    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewActivity("")
    }


    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium max-md:text-xl">Manage Activity  :)</h1>
      

<div>          <input value={newActivity} onChange={changeinput} type="text" className="border border-black rounded-md bg-transparent p-2 flex-grow" placeholder="Next Activity?"></input>
        <button onClick={addActivity} className="bg-black text-white p-2 rounded-md mx-1">Add</button>
    </div>
    </div>
    )

}
export default AddTodoForm