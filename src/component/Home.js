import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useUserAuth } from '../context/Authcontext';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const Home = () => {
    const { user, logOut } = useUserAuth()
    const logoutuser = async () => {
        await logOut()
    }
    console.log("//////////name", user)
    return (
        <Card sx={{ width: "40%", margin: "auto", marginTop: "10%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <CardContent>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Hello Welcome {user && user.name}
                </Typography>

            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={() => logoutuser()}> logout </Button>
            </CardActions>
        </Card>
    );
}
export default Home