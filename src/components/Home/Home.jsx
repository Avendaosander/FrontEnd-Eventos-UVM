import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NextEvents from "./NextEvents";
import UltimosEventos from "./UltimosEventos";
import Slider from "./Slider";
import axios from "axios"

export default function Home(){
    const navigate=useNavigate()
    const [dataProximos, setDataProximos] = useState([]);
    const [dataUltimos, setDataUltimos] = useState([]);
    const [dataToday, setDataToday] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(()=>{
        const autenticarUsuario = () => {
            if(!token){
                navigate("/login");
                return;
            }
        }
        autenticarUsuario()
    },[])
    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                navigate("/login")
                return
            }
        }
        autenticarUsuario()
    },[])     


    const dataEventos = async()=>{
        try {
            const response  = await axios(`http://localhost:3000/app/dashboard`,{
                headers: {Authorization: "Bearer " + JSON.parse(token)}
            })
            setDataProximos(response.data.proximos);
            setDataUltimos(response.data.recientes);
            setDataToday(response.data.eventsToday);
    
        } catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        dataEventos();
    }, []);
   
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center">
                <div className="w-full h-2/3">
                    <Slider />
                </div>
                

                <div className="w-full flex space-x-32 py-16 px-32 bg-white">
                    <div className="w-2/5 h-72 bg-slate-300 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold">
                        Facultad De Ingenieria
                    </div>

                    <div className="w-2/5  h-72 bg-slate-300 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold">
                        <span className="p-8">Facultad De Ciencias Económinas, Administrativas y Genrenciales</span>
                    </div>


                    <div className="w-2/5  h-72 bg-slate-300 rounded-lg shadow-lg flex items-center justify-center text-lg font-bold">
                        <span className="p-8">Facultad De Ciencias Jurídicas Politicas y Sociales</span>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center justify-center py-8">
                    <span className="text-3xl font-bold pt-4">Proximos Eventos</span>
                    <NextEvents dataEvents={dataProximos}/>
                </div>

                <div className="w-full flex flex-col items-center justify-center py-8">
                    <span className="text-3xl font-bold pt-4">Ultimos Eventos</span>
                    <UltimosEventos dataUltimos={dataUltimos}/>
                </div>


                <div className="w-full flex flex-col items-center justify-center pt-4">
                    <span className="text-3xl font-bold py-8">Eventos Mas Relevantes</span>
                    <div className='w-full h-80 flex bg-green-200'>
                        {
                            dataToday.length !==0
                            ?   
                            <>
                                <div className='w-1/2 p-8 items-center justify-center text-center'>
                                    <div className='w-full h-full flex items-center justify-center text-center rounded-lg p-4 bg-cover' style={{ backgroundImage: `url(${dataToday[0].imagen.secure_url})` }}>
                                    </div>
                                    
                                </div>
                                <div className='w-1/2 p-8 flex flex-col items-center justify-center text-center text-base'>
                                    <span className='pb-6 font-bold text-xl'>{dataToday[0].titulo}</span>
                                    <p>{dataToday[0].descripcion[0]}</p>
                                </div>
                            </> 
                            :
                            <div className='w-full p-8 flex items-center justify-center text-center font-bold text-lg'>
                                    No hay Eventos para hoy
                            </div>
                        }
                    </div>
                </div>

                {/*<Footer/>*/}
            </div>
            
        </>
    )
}