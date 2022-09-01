import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {useEffect, useState} from "react";
import UserService from "../../services/UserService";
import ProductService from "../../services/ProductService";
import moment from "moment";
import CartService from "../../services/CartService";


export default function CartManage() {
    const [value, setValue] = useState(new Date());
    const [userIds, setUserIds] = useState([]);
    const [productTitles, setProductTitles] = useState([]);

    const [data, setData] = useState({
        username: '',
        date: '',
        productTitle: '',
        qty: '',
    });

    const setDate = (newValue) => {
        setData(prevState => ({...prevState, date: moment(newValue).format("YYYY-MM-DD")}));
    }
    const setQty = (event) => {
        setData(prevState => ({...prevState, qty: event.target.value}))
    }
    const setUserName = (event, value) => {
        setData(prevState => ({...prevState, username: value.label}))
    }
    const setProductTitle = (event, value) => {
        setData(prevState => ({...prevState, productTitle: value.label}))
    }



    const getUserIDs = async () => {
        let res = await UserService.fetchUser();
        console.log(res)
        for (let i = 0; i < res.data.length; i++){
            userIds[i] = res.data[i].username;
        }
        console.log(userIds)
    }
    const getProductTitles = async () => {
        let res = await ProductService.fetchProduct();
        for (let i = 0; i < res.data.length; i++){
            productTitles[i] = res.data[i].title;
        }
    }

    useEffect(() => {
        getUserIDs()
        getProductTitles()
    }, [])

    const saveCart =async ()=>{
        await CartService.postCart(JSON.stringify(data))
    }

    return (
        <Stack mt={10}>
            <Stack ml={26}>
                <Typography fontSize={'24px'}>Cart Manage</Typography>
            </Stack>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                <Stack direction={'row'} spacing={19}>
                    <Box sx={{minWidth: 120, width: '500px'}}>
                        <Autocomplete
                            id="country-select-demo"
                            sx={{width: 220}}
                            options={userIds}
                            autoHighlight
                            onChange={setUserName}
                            size={'small'}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={'Username'}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <DatePicker
                                disableFuture
                                label="Responsive"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                minDate={value}
                                value={value}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}

                            />
                        </Stack>
                    </LocalizationProvider>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <Box sx={{minWidth: 120, width: '370px'}}>
                        <Autocomplete
                            id="country-select-demo"
                            sx={{width: 220}}
                            options={productTitles}
                            autoHighlight
                            onChange={setProductTitle}
                            size={'small'}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={'Product-Titles'}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Quantity"
                        multiline
                        maxRows={4}
                        sx={{width: '400px'}}
                        onChange={setQty}
                    />
                </Stack>
            </Stack>
            <Stack width={'90vw'} justifyContent={'flex-end'} direction={'row'} mt={4}>
                <Box>
                    <Button style={{backgroundColor: '#c4af9e', color: 'black', marginRight: '20px'}}>Clear</Button>
                </Box>
                <Box>
                    <Button style={{backgroundColor: '#8a69ec', color: 'black', marginLeft: '20px'}} onClick={saveCart}>Save</Button>
                </Box>
            </Stack>

        </Stack>
    )
}