import logo from './logo.png'
import iconFacebook from './facebook.png'
import iconInstagram from './instagram.png'
import iconTiktok from './tiktok.png'
import iconTwitter from './twitter.png'


const Footer = () => {

	return (
        <div className='w-full flex flex-col items-center justify-center bg-white'>
            <div className="w-full h-72 py-52 flex space-x-32">
                <div className="w-3/5 flex flex-col items-center justify-center">
                    <div className="items-center justify-center text-center rounded-lg p-4 bg-cover" style={{ backgroundImage: `url(${logo})` }}></div>

                    <div className=' text-lg font-bold'>
                        <p>App de Eventos</p>
                        de la materia Front End
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-center justify-center">
                    <div className='w-full flex flex-col text-left text-lg'>
                        <p className='pb-6 font-bold'>Creado por el Team</p>

                        <p> Eutimio Briceño </p>
                        <p> Alexander Avendaño </p>
                        <p> Gabriela Fernandez </p>
                        <p> Carmen Castellanos </p>
                        <p> Diego Martinez </p>
                        <p> Angel Arraiz </p>
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-center justify-center">
                    <div className='text-lg font-bold'>
                        <p className='pb-6'>Siguenos en</p>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#"><img src={iconFacebook} alt="facebook" className='w-8' /></a>
                        <a href="#"><img src={iconInstagram} alt="instagram" className='w-8' /></a>
                        <a href="#"><img src={iconTiktok} alt="tiktok" className='w-8' /></a>
                        <a href="#"><img src={iconTwitter} alt="twitter" className='w-8' /></a>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto flex flex-col items-center justify-center pb-8'>
                Copyright 2023 AppEventos | Todos los derechos Reservados
            </div>
        </div>
	);
};

export default Footer;
