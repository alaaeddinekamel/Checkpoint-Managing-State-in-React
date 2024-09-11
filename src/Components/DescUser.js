import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const DescUser=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((error)=>console.log(error))
    },[])
    return(
        <div>
            {
                loading ? 
                <h1>Hak testana</h1> 
                :
                <div>
                    <h1>{user.name}</h1>
                    <h2>{user.address.street}</h2>
                </div> 
            }
        </div>
    )
}

export default DescUser