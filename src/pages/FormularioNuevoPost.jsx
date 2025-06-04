import React from "react";
import { useForm } from "react-hook-form";

export default function SimpleForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nombre" {...register("nombre")}/>
            <input placeholder="Apellido Paterno" {...register("apat")} />
            <input placeholder="Título" {...register("titulo", { required: true,minLength:5})} />
            
            {errors.titulo && <p>El título debe tener almenos 5  caracteres</p>} 
            
            {errors.titulo?.type === 'required' && <p>El título es obligatorio</p>} 
            {errors.titulo?.type === 'minLength' && <p>El título debe tener almenos 5  caracteres</p>} 

            <button>Enviar</button>
        </form>
    );
}