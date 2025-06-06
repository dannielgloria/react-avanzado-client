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
*/

//? Manejo de errores y espera de datos (loading)

export default function ListaPublicaciones(){
    const [ publicaciones, setPublicaciones ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
        .then(response => {
            if (!response.ok) throw new Error('Error en la petición');
            return response.json();
        })
        .then(data => setPublicaciones(data))
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) return <p>Cargando publicaciones...</p>
    if (error) return <p>Error: {error}</p> 

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
