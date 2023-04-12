
import { useState, useEffect } from 'react';

import slider1 from './slider1.jpg';
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';

export default function Slider(){
    const [imagenCorriendo, setCambiaImagen] = useState(0);
    const [selecImagen, setImagenSelec] = useState(0);
    const imagenes = [slider3, slider2, slider1];

    useEffect(() => {
        const intervalo = setInterval(() => {
          setCambiaImagen((prevImage) => (prevImage + 1) % imagenes.length);
        }, 5000);
    
        return () => clearInterval(intervalo);
      }, []);

      const cambiaImagen = (index) => {
        setImagenSelec(index);
        setCambiaImagen(index);
      };

    return(
        <div className="w-full h-full relative overflow-hidden">
            <div className="w-full h-screen relative overflow-hidden">
                {imagenes.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={`w-full absolute transition-opacity duration-500 object-fill z-0 ${
                        index === imagenCorriendo ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex items-center">
                {imagenes.map((_, index) => (
                <button
                    key={index}
                    className={`w-4 h-4 rounded-full mx-2 focus:outline-none ${
                    index === selecImagen ? 'bg-gray-700' : 'bg-gray-400'
                    }`}
                    onClick={() => cambiaImagen(index)}
                />
                ))}
            </div>
        </div>
    )
}