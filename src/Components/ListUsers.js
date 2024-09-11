import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"

const ListUsers =()=>{
    const[users,setUsers]=useState("")
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>setUsers(res.data))
            .then((res)=>setLoading(false))
            .catch((error)=>console.log(error))
    },[])
    
    return(
    <div className="centerBlock">
        <div className="listUsers">
            {
              loading ? <h1>Mazel</h1> : users.map((user)=><CardUser user={user} />)
            }
        </div>
    </div>

    )
}

export default ListUsers