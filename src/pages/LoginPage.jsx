import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { login } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ColorPicker from '../components/ColorPicker';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedColor, setSelectedColor] = useState('#3f51b5');
  const { login: loginContext } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      loginContext(res.data.token, selectedColor);
      navigate('/chat');
    } catch (err) {
      alert('Login inválido');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>Iniciar sesión</Typography>
      <TextField fullWidth label="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ my: 2 }} />
      <Typography variant="subtitle1">Selecciona tu color:</Typography>
      <ColorPicker selected={selectedColor} onSelect={setSelectedColor} />
      <Button fullWidth variant="contained" onClick={handleLogin}>Entrar</Button>
    </Box>
  );
}
