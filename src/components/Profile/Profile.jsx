
import img from "../../assets/uvm.png"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";


export default function Profile(){
    const navigate=useNavigate()
    const [user,setUser]=useState({})
    const token = localStorage.getItem("token");
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/login");
                return;
            }
            try {
                const { data } = await axios('http://localhost:3000/app/profile/' + id)
                console.log(data)
                setUser(data);
              } catch (error) {
                console.log(error.response.data.msg);
              }
        }
        autenticarUsuario()
    },[])     
    const edit=()=>{
        navigate('/form')
    }
    return(
        <div className="bg-white p-4 border-4 min-h-14 border-green-800/75 m-6">
            <div className="flex justify-center ...">
                <div className="m-8 ...">
                    <img src={img} alt=""  className="w-40"/>
                </div>
                <div className="m-8 ...">
                    <h1 className="m-2 font-semibold ...">Nombre:</h1>
                    <h1 className="m-2 font-semibold ...">Nombre de Usuario:</h1>
                    <h1 className="m-2 font-semibold ...">Email:</h1>
                    <h1 className="m-2 font-semibold ...">Edad:</h1>
                    <h1 className="m-2 font-semibold ...">Rol:</h1>
                    <h1 className="m-2 font-semibold ...">Telefono:</h1>
                </div>
                {
                    user.user?
                <div className="m-8 ...">
                    <h1 className="m-2 font-semibold ...">{user.user.nombre}</h1>
                    <h1 className="m-2 font-semibold ...">{user.user.username}</h1>
                    <h1 className="m-2 font-semibold ...">{user.user.email}</h1>
                    <h1 className="m-2 font-semibold ...">{user.user.edad}</h1>
                    <h1 className="m-2 font-semibold ...">{user.user.rol}</h1>
                    <h1 className="m-2 font-semibold ...">{user.user.telefono}</h1>
                </div>:
                <div className="es">
                    <h1>Espera un momento....</h1>
                </div>
                }
            </div>
            <div name="boton" className="flex justify-center ...">
                <button className="bg-green-700 w-20 h-10 rounded-full text-white font-semibold ..." onClick={edit}>Editar</button>
            </div>
        </div>
    )
}












// import img from "../../assets/uvm.png"
// import styles from "./styles.module.css";

// export default function Profile(){
//     return(
//         <div Name={styles.profi}>
//             <div className={styles.imge}>
//                 <img src={img} alt="" />
//             </div>
//             <div className={styles.info}>
//                 <h1>Tu Nombre:</h1>
//                 <h1>Tu Nombre:</h1>
//                 <h1>Tu Nombre:</h1>
//                 <h1>Tu Nombre:</h1>
//             </div>
//             <div className={styles.info}>
//                 <h1>Alberto</h1>
//                 <h1>Alberto</h1>
//                 <h1>Alberto</h1>
//                 <h1>Alberto</h1>
//             </div>
//         </div>
//     )
// }