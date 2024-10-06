import React from 'react';
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';



function App() {
  return (
    <>
      <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}> {/* 4 yozuvning size uchun*/}
          <Typography variant="h4" component={"h4"}>
            Create React App on TypeScript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={"99+"}>
            <Button variant='contained'>Contained</Button>
          </RippleBadge>
        </Box>
          
      </Stack>
    </Container>
    </>

  )
}

export default App;
