import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import UserService from "../../services/UserService";

export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const login = async (e)=> {
        // let newVar = await UserService.fetchUser();
        // console.log(newVar)
        navigate('/dashboard')
    }

    return(
        <Stack bgcolor={'#d9d9d9'} width={'100vw'} height={'100vh'} maxWidth={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Stack height={'80%'} width={'43%'} bgcolor={'#c7b4b4'} direction={'column'}>
                <Stack justifyContent={'center'} alignItems={'center'} mt={6}>
                    <Typography fontSize={'28px'} color={'white'}>Login</Typography>
                </Stack>
                <Stack justifyContent={'center'} alignItems={'center'} spacing={3} mt={6}>
                    <TextField size={'small'} sx={{width:'60%', bgcolor:'#d9d9d9'}} label={'user name'} type={'text'} onChange={(event)=>{setUsername(event.target.value)}}></TextField>
                    <TextField size={'small'} sx={{width:'60%', bgcolor:'#d9d9d9'}} label={'password'} type={'password'} onChange={(event)=>{setPassword(event.target.value)}}></TextField>
                </Stack>
                <Stack justifyContent={'center'} alignItems={'center'} mt={7}>
                    <Box>
                        {/*<Link to="/dashboard" style={{ textDecoration: 'none' }}> */}<Button sx={{textTransform:'none', backgroundColor:'#8a69ec', color:'white'}} variant={'contained'} onClick={login}>Login</Button>{/*</Link>*/}
                </Box>
                </Stack>
                <Stack mt={7} ml={12}>
                    <Typography>Create new user account? <a href="" onClick={()=>navigate('/register')}>click here</a></Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}