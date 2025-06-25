import { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import socket from '../socket/socket';

export default function ChatPage() {
  const { token, color } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    socket.auth = { token };
    socket.connect();

    socket.on('chatHistory', (msgs) => setMessages(msgs));
    socket.on('newMessage', (msg) => setMessages((prev) => [...prev, msg]));

    return () => {
      socket.off('chatHistory');
      socket.off('newMessage');
      socket.disconnect();
    };
  }, [token]);

  const send = () => {
    if (text.trim()) {
      socket.emit('message', { text, color });
      setText('');
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>Chat Global</Typography>
      <Box sx={{ maxHeight: 400, overflowY: 'auto', border: '1px solid #ccc', p: 2, mb: 2 }}>
        {messages.map((msg, i) => (
          <Box key={i} display="flex" alignItems="center" gap={1} mb={1}>
            {msg.avatar_url && (
              <img src={msg.avatar_url} alt="avatar" width={32} height={32} style={{ borderRadius: '50%' }} />
            )}
            <Typography sx={{ color: msg.color }}>
              <strong>{msg.user}</strong>: {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box display="flex" gap={2}>
        <TextField fullWidth value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} />
        <Button variant="contained" onClick={send}>Enviar</Button>
      </Box>
    </Box>
  );
}
