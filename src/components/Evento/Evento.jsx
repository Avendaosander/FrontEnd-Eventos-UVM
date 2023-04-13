import React from 'react';
import './Evento.css';
import eventoImage from '../../assets/evento.jpeg'; 

export default function Evento () {
  return (
    <>
      <h2>Nombre del Evento</h2>
      <section className='content'>
            <img src={ eventoImage } alt="imagen del evento" />
            <ul>
                <li>Organizador del Evento:</li>
                <li>Participantes:</li>
                <li>Fecha:</li>
                <li>Hora:</li>
                <li>Duración:</li>
                <li>Lugar del Evento:</li>
                <button>Añadir a Favoritos<i class="fa-solid fa-star"></i></button>
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
    </>
  )
}


