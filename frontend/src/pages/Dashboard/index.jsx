import {Box, Button, Stack, Typography} from "@mui/material";
import DashboardHome from "../DashboardHome";
import { Routes, Route, Link } from "react-router-dom";
import ProductManage from "../Product";
import CartManage from "../Cart";

export default function Dashboard(props) {
    return (
        <>
            <Stack height={'100vh'} bgcolor={'#d9d9d9'}>
            <Stack alignItems={'center'} justifyContent={'center'}>
                <Stack width={'98vw'} height={'70px'} bgcolor={'#9991e2'} mt={2} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack>
                        <Box>
                            <Link to="/dashboard" style={{ textDecoration: 'none' }}><Button style={{backgroundColor:'#d9d9d9', marginLeft:'10px', height:'40px', cursor:'pointer', color:'black'}} >Dashboard</Button></Link>
                        </Box>
                    </Stack>
                    <Stack>
                        <Box>
                            <Link to="product" style={{ textDecoration: 'none' }}><Button style={{marginRight:'10px', backgroundColor:'#d9d9d9', height:'40px', cursor:'pointer', color:'black'}}>Product</Button></Link>
                            <Link to="cart" style={{ textDecoration: 'none' }}><Button style={{marginLeft:'10px', backgroundColor:'#d9d9d9', width:'80px', height:'40px', cursor:'pointer', color:'black'}}>Cart</Button></Link>
                        </Box>
                    </Stack>
                    <Stack mr={4}>
                        <Box>
                            <Typography fontSize={30}>danu</Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        <Stack bgcolor={'#d9d9d9'}>
            <Routes>
                <Route path="/" element={<DashboardHome/>} />
                <Route path="/product" element={<ProductManage/>} />
                <Route path="/cart" element={<CartManage/>} />
            </Routes>
        </Stack>
            </Stack>
        </>
    )
}