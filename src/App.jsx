//import FormularioNuevoPost from './pages/FormularioNuevoPost';
//import APIsConReact from './pages/APIsConReact'
import { useState } from "react";
import Header from "./pages/components/Header";
import Login from "./pages/Login";
import ContenidoPrivado from "./pages/ContenidoPrivado";
import { UserProvider } from "./pages/UserContext";
import { Box, Button, Container } from "@mui/material";

function App() {
  const [pagina, setPagina] = useState('inicio')

  /*return (
    <div>
      <h1>Mi Blog</h1>
      <FormularioNuevoPost />
    </div>
  )*/

  return(
    <UserProvider>
      <Header />
      <Container>
        <Box mt={2}>
          <Button onClick={()=> setPagina('inicio')}>Inicio</Button>
          <Button onClick={()=> setPagina('privado')}>Contenido Privado</Button>
        </Box>
        <Box mt={4}>
          {pagina === 'inicio' && <Login />}
          {pagina === 'privado' && <ContenidoPrivado />}
        </Box>
      </Container>
    </UserProvider>
  )
}

export default App
