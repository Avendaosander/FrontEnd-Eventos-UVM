import React from 'react';
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";


export default function Evento () {
  const params=useParams()
  const navigate=useNavigate()
  console.log(params.id)
  const [data,setData]=useState({})
  const even= async ()=>{
    try {
      const info=await axios(`http://localhost:3000/events/event/${params.id}`)
      console.log(info.data)
      setData(info.data)
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }
  useEffect(()=>{
    even()
  },[])
  const handleDelete=async()=>{
    try {
      const {data:res}=await axios.post(`http://localhost:3000/events/delete-event/${params.id}`)
      console.log(res)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
      <>
      {data.evento?
      <div className="bg-white p-4 border-4 border-green-800/75 m-6">
      <h2 className='justify-center text-center text-2xl m-8 ...'>{data.evento.titulo}</h2>
      <section className='grid grid-cols-2 gap-4 text-white ...'>
            <div className="bg-green-800 p-8 ...">
              <img src={ data.evento.imagen.secure_url } alt="imagen del evento" className='w-full h-full object-contain'/>
            </div>
            <ul className='ml-10 p-8 text-lg font-semibold'>
                <li className='m-2'><p className='text-blue-600'>Organizador del Evento: {data.evento.organizador} </p></li>
                <li className='m-2'>Fecha: {data.evento.fecha}</li>
                <li className='m-2'>Hora: {data.evento.hora}</li>
                <li className='m-2'>Facultad: {data.evento.facultad}</li>
                <li className='m-2'>Lugar del Evento: {data.evento.lugar}</li>
                <div className="flex">
                  <p className='m-2'>Participantes: </p>
                    {data.evento.participantes.map((par, i)=>(
                    <li className='flex m-2' key={i}>🔹{par} </li>
                    ))}
                </div>
                <button className='m-2 px-3 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500'>Añadir a Favoritos<i className="fa-solid fa-star"></i></button>
                <button className='m-2 px-3 bg-red-500 h-10 rounded-full text-white font-semibold text-white-500' onClick={handleDelete}>Eliminar Evento<i className="fa-solid fa-star"></i></button>
            </ul>
      </section>
      <section className='grid grid-cols-2 gap-4 m-8 ...'>
            <div className='justify-center text-center m-2 text-lg font-semibold ...'>
                <h3>Descripción:</h3>
                {data.evento.descripcion.map((des, i)=>(
                  <p key={i}>{des} </p>
                ))}
            </div>
            <div className='justify-center text-center m-2 text-lg font-semibold ...'>
                <h3>Palabras Claves:</h3>
                <div className="flex justify-center text-center">
                  {data.evento.keywords.map((key, i)=>(
                    <p key={i}>🔹{key} </p>
                  ))}
                </div>
            </div>
        </section>  
        <Link to={`/edit/${params.id}`}>
          <button className='m-2 px-3 bg-green-700 h-10 rounded-full text-white font-semibold text-white-500'>Editar<i className="fa-solid fa-star"></i></button>
        </Link>
      </div>:
      <div className="ca">
        <h1>Cargando</h1>
      </div>
      }
    </>
  )
}


