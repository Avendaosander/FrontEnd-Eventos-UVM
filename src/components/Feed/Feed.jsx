import React from 'react'

export default function Feed () {
  return (
    <>
        <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
        <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
            max-w-7xl">
            <div className="flex flex-col items-center sm:px-5 md:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
                <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
                    md:space-y-5">
                <div className="bg-green-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                    uppercase inline-block">
                    <p className="inline">
                    <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                        00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                        1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                        0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    </p>
                    <p className="inline text-xs font-medium">Plataforma de gestión de eventos</p>
                </div>
                <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Bienvenidos a Eventos.</a>

                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="block">
                <img
                    src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uZmVyZW5jaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full ml-0"/>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 mr-0">
                <img
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn- ml-0"/>
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                    rounded-full uppercase inline-block ">Disponibilidad</p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl">Infinidad de Eventos</a>
                <p className="text-sm text-black">Gestiona de uno a miles de eventos al año con nuestra solución de planificación de eventos fácil e intuitiva.</p>
                <div className="pt-2 pr-0 pb-0 pl-0">

                </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 mr-0">
                <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn- ml-0"/>
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
                    rounded-full uppercase inline-block">Facilidad</p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl">Facíl de Usar</a>
                <p className="text-sm text-black">Eventos es Fácil de usar, incluso más fácil de manejar. Su sitio web hace que sea rápido y fácil de entender lo que usted está obteniendo.</p>
                <div className="pt-2 pr-0 pb-0 pl-0">

                </div>
            </div>
            <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4 mr-0">
                <img
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnRvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn- ml-0"/>
                <p className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
                    rounded-full uppercase inline-block">Eficacia</p>
                <a className="text-lg font-bold sm:text-xl md:text-2xl">Evento tu mejor aliado</a>
                <p className="text-sm text-black">Ayudando a organizaciones y marcas de todo el mundo a planificar y gestionar cualquier tipo de evento presencial, híbrido o virtual</p>
                <div className="pt-2 pr-0 pb-0 pl-0">

                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
