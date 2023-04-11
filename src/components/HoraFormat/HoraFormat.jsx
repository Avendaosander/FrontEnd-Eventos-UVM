export default function HoraFormat(props) {
    const arreglo = props.hora.split(':');
    let Hora = '';
    if(arreglo[0]>12){
        Hora=arreglo[0]-12+"PM";
    }else{
        Hora=arreglo[0]+"AM";
    }
    return (
        <span>{Hora}</span>
    );
}
