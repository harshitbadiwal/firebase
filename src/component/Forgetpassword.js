
import { FormGroup, FormControl, Input, InputLabel, Typography, variant, Button, styled } from "@mui/material";
import { useState } from "react";
import { useUserAuth } from "../context/Authcontext";
import {useNavigate} from "react-router-dom"

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


const Forget = () => {
const [email,setemail] = useState("")
const [Password,setpassword] = useState("")
const {forgetpassWord} = useUserAuth()
const navigate = useNavigate()

const forgetPassword=async()=>{
    await forgetpassWord( email,Password)
    navigate('/')
}

    return <>
        <Container >
            <Typography variant="h4" >Forget Password</Typography>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input name="email"
                onChange={(e)=>setemail(e.target.value)}

                />

            </FormControl>

            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input name="password"
                    type="password"
                    onChange={(e)=>setpassword(e.target.value)}
                />

            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => forgetPassword() }>Forgetpassword</Button>
            </FormControl>

        </Container>
    </>
}

export default Forget