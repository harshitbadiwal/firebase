
import { FormGroup, FormControl, Input, InputLabel, Typography, variant, Button, styled } from "@mui/material";
import { useState } from "react";

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


const SignUp = () => {
    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const { signUp } = useUserAuth()
    console.log(signUp)
    console.log("////////", useUserAuth())
    const signupuser = async () => {
        // console.log('====================================');
        // console.log("signupuser  called");
        // console.log('====================================');
        console.log(signUp);
        await signUp(email,name,password)
        navigate('/')
    }

    return <>
        <Container >
            <Typography variant="h4" >Signup</Typography>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input name="email"
                    onChange={(e) => setemail(e.target.value)}

                />

            </FormControl>

            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input name="name"
                    onChange={(e) => setname(e.target.value)}

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
                <Button variant="contained" onClick={() => { signupuser() }}>sign up</Button>
            </FormControl>


        </Container>


    </>
}

export default SignUp