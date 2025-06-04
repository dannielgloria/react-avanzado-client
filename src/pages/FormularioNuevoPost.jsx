import React, { useState } from "react";
import './errors.css';
import {  useForm } from "react-hook-form";

export default function SimpleForm() {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const [email, setEmail]= useState('');
    
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input value={email}  onChange={(e) => setEmail(e.target.value)}/>

            <input placeholder="Nombre" className={errors.nombre ? 'input-error' : ''}
            {...register("nombre", {required: true, maxLength: 15})}/>
            {errors.nombre && (
                <span className="error-message">
                    {errors.nombre?.type === 'required'
                    ? 'Nombre obligatorio'
                    : 'Debe tener menos de 15 caracteres'}
                </span>
            )}
            <input placeholder="Apellido Paterno" {...register("apat")} />
            <input placeholder="Título" {...register("titulo", { required: true,minLength:5})} />
            
            {errors.titulo && <p>El título debe tener almenos 5  caracteres</p>} 
            
            {errors.titulo?.type === 'required' && <p>El título es obligatorio</p>} 
            {errors.titulo?.type === 'minLength' && <p>El título debe tener almenos 5  caracteres</p>} 


            <button>Enviar</button>
        </form>
    );
}