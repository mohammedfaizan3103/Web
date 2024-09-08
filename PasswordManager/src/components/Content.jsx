import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Content = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])
  const visible = useRef()
  const password = useRef()

  const getmongo = async () => {
    let str = await fetch('http://127.0.0.1:3000/')
    let data = await str.json()
    setPasswordArray(data)
  }
  useEffect(() => {
    let str = localStorage.getItem("passwords")
    if (str) {
      setPasswordArray(JSON.parse(str))
    }
    // getmongo()
  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const savePassword = () => {
    if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
      setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      // let response = fetch("http://127.0.0.1:3000/", {
      //   method: "POST",
      //   headers: {
      //       'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({...form, id: uuidv4()}) // Replace with actual data
      // });
      setForm({ site: "", username: "", password: "" })
      toast('Password Saved', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      let mess = ""
      if(form.site.length < 3) {
        mess = "Site Name"
      } 
      else if(form.username.length < 3) {
        mess = "Username"
      }
      else {
        mess = "Password"
      }
      toast.error(`${mess} must be more than 3 characters`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const showPassword = () => {
    if (visible.current.src.includes("visibility.svg")) {
      visible.current.src = "/visibilityOff.svg"
      password.current.type = "text"
    }
    else {
      visible.current.src = "/visibility.svg"
      password.current.type = "password"
    }
  }
  const copyText = (text) => {
    toast('Copied to clipboard', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text)
  }
  const deletePass = (id) => {
    let conf = confirm("Are you sure??")
    if(conf) {
      let arr = passwordArray.filter((item) => {
        return item.id !== id
      })
      setPasswordArray(arr)
      localStorage.setItem("passwords", JSON.stringify(arr))
      toast('Password Deleted', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const editPass = (id) => {
    let matched = passwordArray.filter((item) => item.id === id)[0]
    setForm(matched)
    let arr = passwordArray.filter((item) => {
      return item.id !== id
    })
    setPasswordArray(arr)
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <main>
        <div className="manager flex justify-center text-white">
          <div className='border w-[700px] border-white rounded-xl sm:px-4 py-2 mt-10 mx-4 mb-2'>
            <div className="inputs sm:p-3 p-1 space-y-5 text-black">
              <div className='flex items-center gap-2 flex-col text-white'>
                <div className="log xs:text-3xl text-xl font-semibold">
                  <span className='text-purple-800'>&lt;</span>
                  Pass
                  <span className='text-purple-800'>OP/&gt;</span>
                </div>
                <p className='xs:text-2xl text-md text-center'>Your Own Password Manager</p>
              </div>
              <hr />
              <input onChange={handleChange} className='w-full rounded-lg h-8 px-3' type="text" placeholder='Website' name='site' value={form.site} />
              <div className="flex sm:flex-row flex-col w-full justify-center gap-2">
                <input onChange={handleChange} className='w-full rounded-lg h-8 px-3' type="text" placeholder='username' name='username' value={form.username} />
                <div className='w-full relative'>
                  <input ref={password} onChange={handleChange} className='w-full rounded-lg h-8 px-3' type="password" placeholder='password' name='password' value={form.password} />
                  <span className='absolute top-0 right-0 py-[5px] px-[4px]'>
                    <img ref={visible} onClick={showPassword} className='text-white cursor-pointer' src="/visibility.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <button onClick={savePassword} className='bg-purple-800 hover:bg-purple-900 hover:font-semibold py-2 px-4 rounded-full flex items-center justify-center w-fit gap-2'>
                  <lord-icon
                    className='h-28'
                    src="https://cdn.lordicon.com/zrkkrrpl.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-swirl"
                    colors="primary:#FFFFFF,secondary:#FFD700"
                    style={{ width: '40px', height: '40px' }}>
                  </lord-icon>
                  <span className='text-white'>Add Password</span>
                </button>
              </div>
              <hr />
              <div className="saved">
                <p className='xs:text-2xl text-md text-white text-center'>Your Saved Passwords</p>
                {(passwordArray.length === 0) ?
                  <div className='text-white text-center'>No Passwords To Show </div> :
                  <table className="table-fixed w-full mt-4 overflow-hidden rounded-md text-xs sm:text-base">
                    <thead className='text-white bg-purple-600'>
                      <tr>
                        <th className='py-2'>Website</th>
                        <th className='py-2'>Username</th>
                        <th className='py-2'>Password</th>
                        <th className='py-2'>Actions</th>
                      </tr>
                    </thead>
                    <tbody className='bg-purple-300'>
                      {passwordArray.map((item) => {
                        return (
                          <tr key={item.id} className='border border-black'>
                            <td className='py-1 text-center break-words'><a href={item.site} target='_blank'>{item.site}</a></td>
                            <td className='py-1 text-center flex items-center justify-center break-words'>
                              <div className='flex sm:flex-row flex-col items-center justify-center gap-1'>
                                <p>{item.username}</p>
                                <img onClick={() => { copyText(item.username) }} className='h-5 hover:h-[1.35rem] cursor-pointer' src="copy.svg" alt="" />
                              </div>
                            </td>
                            <td className='py-1 text-center break-words'>
                              <div className='flex sm:flex-row flex-col items-center justify-center gap-1'>
                                <p>{item.password}</p>
                                <img onClick={() => { copyText(item.password) }} className='h-5 hover:h-[1.35rem] cursor-pointer' src="copy.svg" alt="" />
                              </div>
                            </td>
                            <td className='flex justify-center gap-3'>
                              <div onClick={() => editPass(item.id)} className="edit pt-1 flex flex-col justify-center items-center cursor-pointer">
                                <lord-icon
                                  src="https://cdn.lordicon.com/wuvorxbv.json"
                                  trigger="hover"
                                  stroke="bold"
                                  state="hover-line"
                                  colors="primary:#000000,secondary:#6b21a8"
                                  style={{ width: '25px', height: '25px' }}>
                                </lord-icon>
                                <p className='text-xs'>Edit</p>
                              </div>
                              <div onClick={() => deletePass(item.id)} className="delete pt-1 flex flex-col justify-center items-center cursor-pointer">
                                <lord-icon
                                  src="https://cdn.lordicon.com/drxwpfop.json"
                                  trigger="hover"
                                  stroke="bold"
                                  colors="primary:#000000,secondary:#6b21a8"
                                  style={{ width: '25px', height: '25px' }}>
                                </lord-icon>
                                <p className='text-xs'>Delete</p>
                              </div>
                              <div className="delete"></div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Content
