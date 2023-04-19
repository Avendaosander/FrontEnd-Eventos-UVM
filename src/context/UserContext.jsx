import {createContext} from "react";

const UserContext=createContext({
    rol:""
})

// const [token,setToken] = useState(null)
// const [rol,setRol]=useState({
//   rol:""
// })
// if (localStorage.getItem("token"===null)) {
//   setToken(null) 
// }else{
//   setToken(localStorage.getItem("token"))
// }
// useEffect(()=>{
//   if (token!==null) {
//     const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
//     const id=decodedID.id
//     const userRol= async()=>{
//       try {
//         const { data } = await axios('http://localhost:3000/app/profile/' + id)
//         console.log(data.user.rol)
//         setRol({
//           rol:data.user.rol
//         });
//       } catch (error) {
//         console.log(error)
//       }
//     }
//   }
// },[])

export default UserContext