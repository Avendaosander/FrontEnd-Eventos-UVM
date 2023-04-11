import NextEvents from "./NextEvents";
import Slider from "./Slider";


export default function Home(){
   

    return(
        <div className="w-full h-screen flex flex-col items-center">
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

            <div className="w-full flex flex-col items-center justify-center">
                <span className="text-3xl font-bold p-4 mb-4">Proximos Eventos</span>

                <NextEvents />

            </div>

        </div>
    )
}