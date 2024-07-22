import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Popup from './components/Popup'

function App() {
	const [count, setCount] = useState(0)
	const [todos, setTodos] = useState([])
	const [todo, setTodo] = useState("")
	const [pop, setPop] = useState(false)
	const [saveId, setSaveId] = useState(null)
	const [fromDelete, setFromDelete] = useState(false)
	useEffect(() => {
		const str = localStorage.getItem("todos");
		if(str) {
			setTodos(JSON.parse(str))
		}

	}, [])

	useEffect(() => {
		if (todos.length == 0 && !fromDelete) {
			setFromDelete(false)
			return
		}
		else {
			console.log(JSON.stringify(todos))
			localStorage.setItem("todos", JSON.stringify(todos))
		}
	}, [todos])


	const handleChange = (event) => {
		setTodo(event.target.value)
	}
	const handleAdd = () => {
		if (todo == "") {
			console.log("Cant add todos")
			return;
		}
		let temp = [...todos]
		temp.push({
			id: count,
			task: todo,
			completed: false
		})
		setCount(count + 1)
		setTodos(temp)
		// setTodos([...todos, {todo, isCompleted: false}])
		setTodo("")
	}
	const handleEdit = (event, id) => {
		setSaveId(id)
		setPop(true)
	}
	const handleDelete = (event, id) => {
		let newTodo = [...todos]
		newTodo = newTodo.filter((item) => {
			return item.id !== id
		})
		setTodos(newTodo)
		setFromDelete(true)
	}
	const complete = (event) => {
		let id = event.target.name;
		let newTodo = [...todos];
		newTodo.map((item) => {
			if (item.id == id) {
				item.completed = !item.completed
			}
		})
		setTodos(newTodo)
	}
	return (
		<>
			{pop && <Popup set={setTodos} todos={todos} id={saveId} sethide={setPop} />}
			<Navbar />
			<div className="body flex justify-center relative">
				<main className='bg-[#0d064d] flex flex-col items-center min-h-[80vh] my-4 rounded-xl w-[500px] mx-2'>
					<div className="top flex flex-col items-center justify-center p-5 gap-6 w-full">
						<h1 className='text-4xl text-blue-500 font-bold'>Your Tasks</h1>
						<div className="add flex gap-3 w-full justify-center px-3">
							<input className='text-white bg-gray-700  w-full rounded-md px-2' type="text" placeholder='Add a task' value={todo} onChange={handleChange} />
							<div onClick={handleAdd} className="submit bg-violet-400 hover:bg-violet-600 text-black font-semibold hover:font-bold cursor-pointer px-5 py-2 rounded-lg">Add</div>
						</div>
					</div>
					<div className="sep h-[2px] w-[90%] bg-slate-500 m-3"></div>
					<div className="todos w-[90%]">
						{(todos.length == 0) && <h2 className='text-2xl text-blue-500 font-semibold text-center'>No Tasks</h2>}
						<ul className='px-4'>
							{todos.map((item) => {
								return (
									<li key={item.id} className='flex justify-between my-4 items-center'>
										<div className="task text-white">
											<div className="flex flex-wrap gap-2 items-center">
												<input defaultChecked={item.completed} type="checkbox" className='' name={item.id} value={item.completed} onChange={complete} />
												<span className={(item.completed) ? 'line-through' : ""}>
													{item.task} 
												</span>
											</div>
										</div>
										<div className="buttons flex gap-2">
											<div onClick={(e) => handleEdit(e, item.id)} className="submit bg-violet-400 hover:bg-violet-600 text-black font-semibold hover:font-bold cursor-pointer px-5 py-2 rounded-lg h-10">Edit</div>
											<div onClick={(e) => handleDelete(e, item.id)} className="submit bg-violet-400 hover:bg-violet-600 text-black font-semibold hover:font-bold cursor-pointer px-5 py-2 rounded-lg h-10">Delete</div>
										</div>
									</li>
								)
							})}

						</ul>
					</div>
				</main>
			</div>
		</>
	)
}

export default App
