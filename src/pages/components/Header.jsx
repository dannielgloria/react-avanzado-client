import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useUser } from "../UserContext";

export default function Header() {
    const { user, logout} = useUser();

    return(
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1}}>
                    <Typography variant="h6">
                        { user ? `Hola, ${user.name}`:'No has iniciado sesión'}
                    </Typography>
                </Box>
                { user && (
                    <Button color="inhert" onClick={logout}>
                        Cerrar Sesión
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}