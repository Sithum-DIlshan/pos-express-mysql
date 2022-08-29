import {Box, Stack} from "@mui/material";

export default function DashboardHome(props){
    return (
        <Stack height={'100vh-70px'} spacing={5} justifyContent={'center'} alignItems={'center'} mt={7} bgcolor={'#d9d9d9'}>
            <Stack direction={'row'} spacing={20} justifyContent={'center'} alignItems={'center'}>
                <Stack width={'300px'} height={'200px'} bgcolor={'#9a9293'}></Stack>
                <Stack width={'300px'} height={'200px'} bgcolor={'#9a9293'}></Stack>
            </Stack>
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Stack width={'300px'} height={'200px'} bgcolor={'#9a9293'}></Stack>
            </Stack>
        </Stack>
    )
}