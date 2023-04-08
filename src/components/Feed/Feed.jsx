import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Feed(){
    const navigate=useNavigate()
    useEffect(() => {
          const token = localStorage.getItem("token");
          console.log(token)
          if (!token) {
            navigate("/login");
            return;
          }
    })
    return(
        <div className="feed">
            <h1>FEEED</h1>
        </div>
    )
}