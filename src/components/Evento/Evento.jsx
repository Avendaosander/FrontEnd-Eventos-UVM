import React from 'react';
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from 'axios';


export default function Evento () {
  const params=useParams()
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
  return (
      <>
      {data.evento?
      <div className="pri">
      <h2 className='justify-center text-center text-2xl m-8 ...'>{data.evento.titulo}</h2>
      <section className='grid grid-cols-2 gap-4 ...'>
            <img src={ data.evento.imagen.secure_url } alt="imagen del evento" className='w-96 h-80 ml-20 ...'/>
            <ul className='ml-10'>
                <li>Organizador del Evento: {data.evento.organizador} </li>
                <p>Participantes:</p>
                {data.evento.participantes.map((par)=>(
                <li>{par}</li>
                        ))}
                <li>Fecha:{data.evento.fecha}</li>
                <li>Hora: {data.evento.hora}</li>
                <li>Duración: {data.evento.duracion}</li>
                <li>Lugar del Evento: {data.evento.lugar}</li>
                <button>Añadir a Favoritos<i className="fa-solid fa-star"></i></button>
            </ul>
      </section>
      <section className='contentDos'>
            <div>
                <h3>Descripción:</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, debitis.</p>
            </div>
            <div>
                <h3>Palabras Claves:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, pariatur!</p>
            </div>
        </section>  
      </div>:
      <div className="ca">
        <h1>Cargando</h1>
      </div>
      }
    </>
  )
}


