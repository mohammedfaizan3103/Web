"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let d = {
      name: "name",
      age: 99
    }
    let data = await fetch("/api/add", {method: "POST", 
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(d)
    })
    console.log(await data.json());
  }
  return (
    <>
      <main className="m-2 flex justify-center">
        {/* <div>I am home</div> */}
        <Image 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7ALXXWseXbbCwMuQhkTuNWFQByEBoxYCXQ&s" 
          height={900} 
          width={900} 
          alt="something"
        >
        </Image>
        <button onClick={handleClick} >Click Me</button>
      </main>
    </>
  );
}
