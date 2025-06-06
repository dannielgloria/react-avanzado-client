import React, { useEffect, useState } from "react";

/*
export default function Demo() {
    useEffect(()=>{
        console.log("El componente APIsConReact se monto");
    }, []);

    return <div>
        <h1>Hola mundo</h1>
    </div>
}
*/

export default function ListaPublicaciones(){
    const [ publicaciones, setPublicaciones ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then(data => setPublicaciones(data))
    }, [])

    return (
        <div>
            <h2>Publicaciones</h2>
            <ul>
                {publicaciones.map(publicacion =>(
                    <li key={publicacion.id}>{publicacion.title}</li>
                )

                )}
            </ul>
        </div>
    );
}