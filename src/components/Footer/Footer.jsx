import logo from './logo.png'
import iconFacebook from './facebook.png'
import iconInstagram from './instagram.png'
import iconTiktok from './tiktok.png'
import iconTwitter from './twitter.png'


const Footer = () => {

	return (
        <div className='w-full flex-col items-center justify-center'>
        <div className="w-full text-center flex-col py-8 space-y-8 lg:py-20 lg:space-x-16 lg:flex lg:w-full lg:flex-row lg:space-y-0">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="items-center justify-center text-center rounded-lg mb-4 bg-cover h-14 w-14" style={{ backgroundImage: `url(${logo})` }}></div>

                <div className=' text-lg font-bold'>
                    <p>App de Eventos</p>
                    de la materia Front End
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
                <div className='w-full flex flex-col text-left text-lg'>
                    <p className='pb-6 font-bold text-center'>Creado por el Team</p>

                    <div className='w-full flex px-8 text-sm  lg:text-base'>
                        <div className='w-1/2'>
                            <p> Eutimio Briceño </p>
                            <p> Alexander Avendaño </p>
                            <p> Gabriela Fernandez </p>
                        </div>
                        <div className='w-1/2 flex flex-col items-end justify-end'>
                            <p> Carmen Castellanos </p>
                            <p> Diego Martinez </p>
                            <p> Angel Arraiz </p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
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

        <div className='w-full flex flex-col items-center justify-center pb-8 text-center'>
            Copyright 2023 AppEventos | Todos los derechos Reservados
        </div>
        </div>
	);
};

export default Footer;
