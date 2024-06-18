import { useState } from 'react'

function TodoItem(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [isEditing, setIsEditing] = useState(false)
    const [editValue, setEditValue] = useState(props.item.activity)

    function handleDelete(deletedId) {
        const tempArr = activityArr.filter(item => item.id !== deletedId)
        setActivityArr(tempArr)
    }

    function handleEdit() {
        setIsEditing(true)
    }

    function handleSave() {
        const tempArr = activityArr.map(item => {
            if (item.id === props.id) {
                return { ...item, activity: editValue }
            }
            return item
        })
        setActivityArr(tempArr)
        setIsEditing(false)
    }

    function handleChange(e) {
        setEditValue(e.target.value)
    }

    return (
        <div className="flex justify-between flex-wrap items-center">
            {isEditing ? (
                <div className="flex items-center">
                    <input 
                        type="text" 
                        value={editValue} 
                        onChange={handleChange} 
                        className="max-md:text-sm border rounded px-2 py-1"
                    />
                    <button className="text-green-500 ml-2" onClick={handleSave}>Save</button>
                </div>
            ) : (
                <p style={{ wordBreak: "break-word" }} className="max-md:text-sm">{props.index + 1}. {props.item.activity}</p>
            )}
            <div className="flex items-center">
                <button className="text-blue-500 mr-2" onClick={handleEdit}>Edit</button>
                <button className="text-red-500" onClick={() => handleDelete(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
