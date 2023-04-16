import { useEffect, useState } from 'react';
import axios from "axios"
import Footer from '../Footer/Footer';
import {Link} from "react-router-dom"
import NombreMes from '../NombreMes/NombreMes';
import GetDia from '../GetDia/GetDia';
import HoraFormat from '../HoraFormat/HoraFormat';

import location from '../../assets/location.png';
import PaginationNav1Presentation from '../Pagination/Pagination';

export default function Eventos () {
    const [dataEventos, setDataEventos] = useState([]);

    const Eventos = async()=>{
        try {
            const response  = await axios(`http://localhost:3000/app/events`)
            const dataEvents = Object.values(response.data.eventos);
            console.log(dataEvents)
            setDataEventos(dataEvents);
    
        } catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        Eventos();
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center pt-8">
            <span className="text-3xl font-bold pt-4">Eventos</span>

            <div className="w-full h-full p-6 items-center justify-center">
                <div className="w-auto grid lg:grid-cols-3 lg:gap-3 place-items-center pb-8 space-y-12">
                    {dataEventos.map((evento, index)=>(
                        <div className="Card bg-zinc-100 cursor-pointer" key={index}>
                            <div className="bg-cover bg-center w-full h-48 rounded-t-lg" style={{ backgroundImage: `url(${evento.imagen.secure_url})` }}  >
                            </div>

                            <div className="w-full h-48 bg-secondary flex flex-col items-center justify-center">
                                <div className='p-4'>
                                    <span className="flex text-lg font-semibold text-center">{evento.titulo}</span>
                                </div>

                                <div className='w-full h-full flex items-center justify-center rounded-b-lg'>
                                    <div className='flex flex-col w-1/2 items-center'>
                                        <NombreMes fecha={evento.fecha} key={index} />
                                        <span>Dia: <GetDia fecha={evento.fecha} key={index} /></span>
                                        <span className=' text-sm'>Hora: <HoraFormat hora={evento.hora} key={index} /> </span>
                                    </div>
                                    <div className='flex flex-col items-center justify-center space-y-4'>
                                        <div className='w-3/5 flex items-center justify-center text-center'>
                                            <div className='justify-end'><img src={location} alt="Location" className='w-8' /></div>
                                            <span className=' text-sm'>{evento.lugar}</span>
                                        </div>
                                        <Link to={`/evento/${evento._id}`}className='w-3/5 flex P-4'>
                                            <button className='w-full rounded-lg shadow-lg bg-green-400 p-1 text-sm font-medium'>Ver Detalles</button>
                                        </Link>
                                    </div>
                                </div>
                            

                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <div className='w-16'>
                    <PaginationNav1Presentation />
                </div>
            </div>
        </div>
    )
}