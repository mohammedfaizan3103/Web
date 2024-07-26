"use server"
import fs from 'fs/promises'

export const handleSubmit = async (e) => {
    "use server"
    console.log(e.get("username"), e.get("password"));
    fs.writeFile("testfile.txt", `Username: ${e.get("username")}\n Password: ${e.get("password")}`)
  }