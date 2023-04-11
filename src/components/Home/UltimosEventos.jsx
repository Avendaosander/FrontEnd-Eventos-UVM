import location from '../../assets/location.png';

import NombreMes from '../NombreMes/NombreMes';
import GetDia from '../GetDia/GetDia';
import HoraFormat from '../HoraFormat/HoraFormat';

export default function NextEvents(UltimosEventos){
    const recientes = Object.values(UltimosEventos);
    
    return(
        <>
            <div className="w-full h-full p-6 items-center justify-center">
                <div className="w-auto grid lg:grid-cols-3 lg:gap-3 place-items-center pb-8">
                    {recientes[0].map((evento, index)=>(
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
                                        <div className='w-3/5 flex P-4'>
                                            <button className='w-full rounded-lg shadow-lg bg-green-400 p-1 text-sm font-medium'>Ver Detalles</button>
                                        </div>
                                    </div>
                                </div>
                            

                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}