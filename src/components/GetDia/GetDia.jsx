
export default function GetDia(props) {
    const arreglo = props.fecha.split('-');    
    return <span>{arreglo[2]}</span>;
}