import { Button, Typography} from '@mui/material';
import { useUser } from "./UserContext";

export default function Login() {
    const { user, login} = useUser(); 
    
    if (user) return <Typography> Ya has iniciado sesión como {user.name}</Typography>

    return <Button onClick={login}>Iniciar sesión</Button>
    
}