
export default function NombreMes(props) {
    const fecha = new Date(props.fecha);
    const opciones = { month: 'long' };
    const nombreMes = fecha.toLocaleString('es-ES', opciones);
    const mesMayuscula = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

    return <span>{mesMayuscula}</span>
}