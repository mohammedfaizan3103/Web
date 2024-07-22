import React from 'react'
import { useState } from 'react'

const Popup = (props) => {
    let text = ""
    props.todos.map((item) => {
        if(item.id == props.id) {
            text = item.task
        }
    })

    const [task, setTask] = useState(text)

    const handleChange = (event) => {
        setTask(event.target.value)
    }
    const handleCancel = () => {
        props.sethide(false)
    }
    const handleSave = () => {
        let newTodo = [...props.todos];
        newTodo.map((item) => {
            if(item.id == props.id) {
                item.task = task
                props.set(newTodo)
                props.sethide(false)
            }
        })
    }
    return (
        <div className="popb z-10 flex justify-center items-center h-[100vh] w-[100vw] fixed top-0">
            <div className="pop bg-white p-3 w-[450px] py-7 flex flex-col justify-center mx-2">
                <h1 className='text-center text-3xl font-bold mb-4'>Edit Task</h1>
                <input onChange={handleChange} className='border border-black mb-4 px-2 py-1 w-full' type="text" value={task} />
                <div className="edit_btns flex gap-3 justify-center">
                    <div onClick={handleCancel} className="submit bg-violet-400 hover:bg-violet-600 text-black font-semibold hover:font-bold cursor-pointer px-5 py-2 rounded-lg">Cancel</div>
                    <div onClick={handleSave} className="submit bg-violet-400 hover:bg-violet-600 text-black font-semibold hover:font-bold cursor-pointer px-5 py-2 rounded-lg">Save</div>
                </div>
            </div>
        </div>
    )
}

export default Popup
