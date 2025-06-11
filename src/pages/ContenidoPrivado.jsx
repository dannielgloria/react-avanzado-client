import { Typography } from "@mui/material";
import { useUser } from "./UserContext";

export default function ContenidoPrivado(){
    const { user } = useUser();

    if (!user){
        return <Typography>Debes de iniciar sesion para ver este contenido</Typography>
    }

    return <Typography>Bienvenido a los articulos secretos</Typography>
}