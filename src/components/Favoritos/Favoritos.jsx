
import { useState, useEffect } from "react"
import axios from "axios"
import { decodeToken } from "react-jwt";
import CardEvento from '../CardEvento/CardEvento';

const Favoritos = () => {
	const [dataEventosFav, setDataEventosFav] = useState({eventos:[], isfav:[]});

	const token = localStorage.getItem("token");
    const decodedID=decodeToken(JSON.parse(localStorage.getItem('token')))
    const id=decodedID.id


    const EventosFav = async()=>{
        try {
            const res  = await axios(`http://localhost:3000/app/favorites/${id}`)
			//console.log(res.data.eventos);
			const dataEvents = Object.values(res.data.eventos);
			const arrayFavorites = [];
            for (var i = 0; i < dataEvents.length; i++) {
                arrayFavorites.push(dataEvents[i]._id);
            }
            //console.log(arrayFavorites);
            console.log(dataEvents);
            setDataEventosFav({eventos:dataEvents, isfav:arrayFavorites});
    
        } catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        EventosFav();
    }, []);

	console.log(dataEventosFav.eventos.length);
	
	return (
		<div className="w-full flex flex-col items-center justify-center pt-8">
			<span className="text-3xl font-bold pt-4">Mis Eventos Favoritos</span>
			{ dataEventosFav.eventos.length
				? 
					<div className="w-full h-full p-6 items-center justify-center">
						<div className="w-auto grid lg:grid-cols-3 lg:gap-3 place-items-center pb-8 space-y-12">
							{dataEventosFav.eventos.map((evento, index)=>(
								<CardEvento dataEvento={evento} isFav={dataEventosFav.isfav} key={index}/>
							))}
						</div>
					</div>

				:
					<span className="text-xl pt-32">No tiene Eventos Favoritos Agregados</span>
			}
			
		</div>
	);
};

export default Favoritos;
