function TodoItem(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr

    function handledelete(deletedid){
        const temparr=activityArr.filter(function(item){
            if(item.id==deletedid){
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(temparr)
    }
    return(
        <div className="flex justify-between">
            <p className="max-md:text-sm">{props.index+1}.{props.item.activity}</p>
            <button className="text-red-500" onClick={function(){handledelete(props.id)}}>Delete</button>
        </div>       
    )
}
export default TodoItem