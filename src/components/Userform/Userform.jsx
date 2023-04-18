/**
 * Prueba que el formulario se envía con una entrada válida
 * Que el formulario se muestra sin errores
 *  @returns 
 */
export default function Userform(){
    return(
        <div className="pro">
<div className="created" class="flex justify-center ...">
            <form className="form">
                <h1>Crea tu Actividad</h1>
                <div>
                    <br />
                    <label>Nombre:</label>
                    <br />
                    <input 
                    type="text" 
                    className="field"
                    name="name" />
                </div>
                <div>
                    <br />
                    <label>Difficult:</label>
                    <br />
                    <input 
                    type="text" 
                    className="field"
                    name="difficult"/>
                    <br />
                    <br />
                    <label>Duration:</label>
                    <br />
                    <input 
                    type="text" 
                    className="field"
                    name="duration"/>
                </div>
                <br />
                <br />
                <div className="select">
                    <label> Paises:</label>
                    <br />
                    <br />
                        {/* <select onChange={(e)=>handleSelect(e)}>
                            {count.map((nam)=>(
                                <option value={nam.name}>{nam.name}</option>
                            ))}
                        </select> */}
                </div>
                <br />
                <div className="crear">
                    <button type="submit" className="center">Crear</button>
                </div>
            </form>
        </div>
        </div>
    )
}