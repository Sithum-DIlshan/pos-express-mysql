import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {DataGrid} from '@mui/x-data-grid';
import {ValidatorForm} from "react-material-ui-form-validator";
import {useEffect, useState} from "react";
import UserService from "../../services/UserService";

export default function RegisterForm(props) {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username: '',
        password: '',
        city: '',
        street: '',
        street_no: '',
        zip_code: '',
        lat_value: '',
        long_value: '',
        mobile_no: '',
    });
    const [rows, setRows] = useState([]);

    const changeFirstName = (text) => {
        setData(prevState => ({...prevState, first_name: (text.target.value)}));
    }
    const changeLastName = (text) => {
        setData(prevState => ({...prevState, last_name: (text.target.value)}));
    }
    const changeEmail = (text) => {
        setData(prevState => ({...prevState, email: (text.target.value)}));
    }
    const changeUserName = (text) => {
        setData(prevState => ({...prevState, username: (text.target.value)}));
    }
    const changePassword = (text) => {
        setData(prevState => ({...prevState, password: (text.target.value)}));
    }
    const changeCity = (text) => {
        setData(prevState => ({...prevState, city: (text.target.value)}));
    }
    const changeStreet = (text) => {
        setData(prevState => ({...prevState, street: (text.target.value)}));
    }
    const changeStreetNo = (text) => {
        setData(prevState => ({...prevState, street_no: (text.target.value)}));
    }
    const changeZipCode = (text) => {
        setData(prevState => ({...prevState, zip_code: (text.target.value)}));
    }
    const changeLatValue = (text) => {
        setData(prevState => ({...prevState, lat_value: (text.target.value)}));
    }
    const changeLongValue = (text) => {
        setData(prevState => ({...prevState, long_value: (text.target.value)}));
    }
    const changeMobileNo = (text) => {
        setData(prevState => ({...prevState, mobile_no: (text.target.value)}));
    }

    const submitUser = async (e) => {
        console.log(data)
        let json = JSON.stringify(data);
        console.log(json)
        await UserService.postUser(json)
        // let res = await UserService.fetchUser();
        // console.log(res.data)
        // setRows(res.data)
        await loadUsers();
    }

    const columns = [
        {field: 'first_name', headerName: 'First Name', width: 100},
        {field: 'last_name', headerName: 'Last Name', width: 100},
        {field: 'email', headerName: 'E-mail', width: 130},
        {field: 'username', headerName: 'Username', width: 130},
        {field: 'city', headerName: 'City', width: 80},
        {field: 'street', headerName: 'Street', width: 130},
        {field: 'street_no', headerName: 'Street No', width: 100},
        {field: 'zip_code', headerName: 'Zip Code', width: 70},
        {field: 'lat_value', headerName: 'Let Value', width: 130},
        {field: 'long_value', headerName: 'Long Value', width: 130},
        {field: 'mobile_no', headerName: 'Mobile No', width: 130},
        /*    {
                field: 'age',
                headerName: 'Age',
                type: 'number',
                width: 90,
            },
            {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
            },*/
    ];

    const loadUsers = async ()=> {
        let res = await UserService.fetchUser();
        setRows(res.data)
    }

    useEffect(() => {
        loadUsers();
    }, []);


    return (
        <>
            <ValidatorForm onSubmit={submitUser}>
                <Stack width={'100vw'} height={'100vh'} maxWidth={'100%'}>
                    <Stack ml={9} mt={4}>
                        <Typography fontSize={'29px'}>User Registration</Typography>
                    </Stack>
                    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} label={'First Name'} sx={{width: '400px'}} required={true}
                                       onChange={changeFirstName}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Last Name'} required={true}
                                       onChange={changeLastName}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Email'} required={true}
                                       onChange={changeEmail}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'User Name'} required={true}
                                       onChange={changeUserName}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Password'} type={'password'}
                                       required={true} onChange={changePassword}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'City'} required={true}
                                       onChange={changeCity}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Street'} required={true}
                                       onChange={changeStreet}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Street No'} required={true}
                                       onChange={changeStreetNo}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Zip Code'} required={true}
                                       onChange={changeZipCode}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Lat Value'} required={true}
                                       onChange={changeLatValue}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Long Value'} required={true}
                                       onChange={changeLongValue}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Mobile No'} required={true}
                                       onChange={changeMobileNo}></TextField>
                        </Stack>

                    </Stack>
                    <Stack direction={'row'} justifyContent={'flex-end'} width={'80%'} mt={6} spacing={3}>
                        <Box>
                            <Button variant={'contained'} color={'error'}>Clear</Button>
                        </Box>
                        <Box>
                            <Button variant={'contained'} color={'success'} type={'submit'}>Save</Button>
                        </Box>
                    </Stack>
                </Stack>
            </ValidatorForm>
            <Stack height={'100vh'}>
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        getRowId={(row) => row.username}
                    />
                </div>
            </Stack>
        </>
    );
}