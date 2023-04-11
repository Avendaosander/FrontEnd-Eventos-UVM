import { useParams } from "react-router"
import img from "../../assets/uvm.png"
import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Profile(){
    const navigate=useNavigate()
    let params=useParams()
    console.log(params.id)
    const id=params.id
    console.log(id)
    const info=async()=>{
        const info= await axios('http://localhost:3000/app/profile/' + id)
        console.log(info)
    }
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            console.log(token)
            if(!token){
                navigate("/login");
                return;
            }
        }
        autenticarUsuario()
    },[])    
    info()
    const edit=()=>{
        navigate('/form/'+id)
    }
    return(
        <div>
            <div className="flex justify-center ...">
                <div className="m-8 ...">
                    <img src={img} alt=""  class="w-40"/>
                </div>
                <div className="m-8 ...">
                    <h1 className="m-2 font-semibold ...">Nombre:</h1>
                    <h1 className="m-2 font-semibold ...">Email:</h1>
                    <h1 className="m-2 font-semibold ...">Cedula:</h1>
                    <h1 className="m-2 font-semibold ...">Telefono:</h1>
                </div>
                <div className="m-8 ...">
                    <h1 className="m-2 font-semibold ...">Alberto</h1>
                    <h1 className="m-2 font-semibold ...">albertoelbroder@gmail.com</h1>
                    <h1 className="m-2 font-semibold ...">28765980</h1>
                    <h1 className="m-2 font-semibold ...">0426778324</h1>
                </div>
            </div>
            <div className="boton" class="flex justify-center ...">
                <button class="bg-green-700 w-20 h-10 rounded-full text-white font-semibold ..." onClick={edit}>Editar</button>
            </div>
        </div>
    )
}












// import img from "../../assets/uvm.png"
// import styles from "./styles.module.css";

// export default function Profile(){
//     return(
//         <div className={styles.profi}>
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