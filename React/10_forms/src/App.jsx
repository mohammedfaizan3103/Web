import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {
    const [count, setCount] = useState(0)
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
      } = useForm()
      const getDelay = (val) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, val * 1000);
        })
      }
      const onSubmit = async (data) => {
        // await getDelay(3)
        console.log(data);
        let response = await fetch('http://127.0.0.1:3000/form', 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        console.log(await response.json());
      }
    return (
        <>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                {(isSubmitting) && <div>Loading...</div>}
                <input {...register(
                    "username", 
                    {required: {value: true, message: "Please enter username"}, 
                    minLength: {value: 3, message: "Username must be atleast 3 characters long"}
                })} 
                type="text" placeholder='username'/>
                {(errors.username) && <div className='red'>{errors.username.message}</div>}
                <br />
                <input {...register("password")} type="password" placeholder='password'/>
                <br />
                <input disabled={isSubmitting} type="submit" />
            </form>
        </>
    )
}

export default App
