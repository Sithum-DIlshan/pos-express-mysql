import {Box, Stack, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import UserService from "../../services/UserService";
import ProductService from "../../services/ProductService";
import CartService from "../../services/CartService";

export default function DashboardHome(props){
    const [productCount, setProductCount] = useState(null);
    const [cartCount, setCartCount] = useState(null);
    const [userCount, setUserCount] = useState(null);

    const loadCounts = async () => {
        let user = await UserService.fetchUser();
        let product = await ProductService.fetchProduct();
        let cart = await CartService.fetchCart();

        setProductCount(product.data.length)
        setUserCount(user.data.length)
        setCartCount(cart.data.length)
    }

    useEffect(()=>{
        loadCounts();
    },[])

    return (
        <Stack height={'100vh-70px'} spacing={5} justifyContent={'center'} alignItems={'center'} mt={7} bgcolor={'#d9d9d9'}>
            <Stack direction={'row'} spacing={20} justifyContent={'center'} alignItems={'center'}>
                <Stack width={'300px'} height={'200px'} bgcolor={'#9a9293'} alignItems={'center'} justifyContent={'center'}>
                    <Typography fontSize={30} fontWeight={600}>
                        Products
                    </Typography>
                    <Typography fontSize={20} fontWeight={300}>
                        {productCount}
                    </Typography>
                </Stack>
                <Stack width={'300px'} height={'200px'} bgcolor={'#9a9293'} alignItems={'center'} justifyContent={'center'}>
                    <Typography fontSize={30} fontWeight={600}>
                        Cart
                    </Typography>
                    <Typography fontSize={20} fontWeight={300}>
                        {cartCount}
                    </Typography>
                </Stack>
            </Stack>
            <Stack justifyContent={'center'} alignItems={'center'}>
                <Stack width={'300px'} height={'200px'} bgcolor={'#9a9293'} alignItems={'center'} justifyContent={'center'}>
                    <Typography fontSize={30} fontWeight={600}>
                        Users
                    </Typography>
                    <Typography fontSize={20} fontWeight={300}>
                        {userCount}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}