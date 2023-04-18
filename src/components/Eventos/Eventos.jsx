import { useEffect, useState } from 'react';
import axios from "axios"
import Footer from '../Footer/Footer';
import { decodeToken } from "react-jwt";
import PaginationNav1Presentation from '../Pagination/Pagination';


import CardEvento from '../CardEvento/CardEvento';
export default function Eventos () {
    const [dataEventos, setDataEventos] = useState([]);
    const [dataEventosFav, setDataEventosFav] = useState({eventos:[], isfav:[]});


    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id


    const Eventos = async()=>{
        try {
            const response  = await axios(`http://localhost:3000/app/events`)
            const dataEvents = Object.values(response.data.eventos);
            //console.log(dataEvents);
            setDataEventos(dataEvents);
            
    
        } catch (e){
            console.log(e);
        }
    }

    const EventosFav = async()=>{
        try {
            const res  = await axios(`http://localhost:3000/app/favorites/${id}`)
			//console.log(res.data.eventos);
			const dataEvents = Object.values(res.data.eventos);
            const arrayFavorites = [];
            for (var i = 0; i < dataEvents.length; i++) {
                arrayFavorites.push(dataEvents[i]._id);
            }
            /*console.log(arrayFavorites);
            console.log(dataEvents);*/
            setDataEventosFav({eventos:dataEvents, isfav:arrayFavorites});
    
        } catch (e){
            console.log(e);
        }
    }  


    useEffect(() => {
        Eventos();
        EventosFav();
    }, []);

    
    return (
        <div className="w-full flex flex-col items-center justify-center pt-8">
            <span className="text-3xl font-bold pt-4">Eventos</span>

            <div className="w-full h-full p-6 items-center justify-center">
                <div className="w-auto grid lg:grid-cols-3 lg:gap-3 place-items-center pb-8 space-y-12">
                    {dataEventos.map((evento, index)=>(
                        <>
                            <CardEvento dataEvento={evento} isFav={dataEventosFav.isfav} key={index} />

                        </>
                    ))}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">
                <div className='w-auto'>
                    <PaginationNav1Presentation />
                </div>
            </div>
        </div>
    )
}