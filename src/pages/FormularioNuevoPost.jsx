import React from "react";
import { useForm } from "react-hook-form";

export default function SimpleForm() {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Nombre" {...register("nombre")}/>
            <input placeholder="Apellido Paterno" {...register("apat")} />
            <button>Enviar</button>
        </form>
    );
}