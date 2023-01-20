
import { async } from "@firebase/util";
import { FormGroup, FormControl, Input, InputLabel, Typography, variant, Button, styled } from "@mui/material";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom"
import { useUserAuth } from "../context/Authcontext";
import { useNavigate } from "react-router-dom"
const initalVal = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const Container = styled(FormGroup)`
width: 60%;
margin: 5% auto 0 auto;
border:2px solid blue;
border-radius: 50px;
padding:2vw;
&> div{
    margin:15px;
    width:80%;
    margin:auto;
    margin-bottom:25px
}`


const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const { logIn, googleSignIn } = useUserAuth()
    const navigate = useNavigate()

    const loginuser = async () => {
        await logIn(email, password)
        navigate('/home')
    }
    const loginGoogle = async () => {
        await googleSignIn()
        navigate('/home')
    }
    return <>
        <Container >
            <Typography variant="h4" >login</Typography>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input name="email"
                    onChange={(e) => setemail(e.target.value)}
                />

            </FormControl>



            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input name="password"
                    type="password"
                    onChange={(e) => setpassword(e.target.value)}
                />

            </FormControl>



            <FormControl>
                <Button variant="contained" onClick={() => loginuser()}  >login</Button>
            </FormControl>
            <GoogleButton onClick={() => loginGoogle()} />

        </Container>
        <p>if you don't have account?  <Link to={'/Signup'}>SignUp</Link></p>
        <Link to={'/forgetpassword'}>Forget Password</Link>
    </>
}

export default Login