import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 80
}));

const UserBody = () => {
  return (
    <Box
        component="span"
        m={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{paddingTop:'300px'}}
        >
        <Button variant="contained"  sx={{ height: 40 }} href="/BuyForm">
            Buy Insurance
        </Button>
        <Button variant="contained"  sx={{ height: 40 }} href>
            Claim Insurance
        </Button>
    </Box>
  )
}

export default UserBody;