import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

export default function RegisterForm(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
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
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    return (
       <>
        <Stack width={'100vw'} height={'100vh'} maxWidth={'100%'}>
            <Stack ml={9} mt={4}>
                <Typography fontSize={'29px'}>User Registration</Typography>
            </Stack>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} label={'First Name'} sx={{width: '400px'}}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Last Name'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Email'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'User Name'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Password'} type={'password'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'City'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Street'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Steet No'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Zip Code'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Lat Value'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} sx={{width: '400px'}}  label={'Long Value'}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Mobile No'}></TextField>
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'flex-end'} width={'80%'} mt={6} spacing={3}>
                <Box>
                    <Button variant={'contained'} color={'error'}>Clear</Button>
                </Box>
                <Box>
                    <Button variant={'contained'} color={'success'}>Save</Button>
                </Box>
            </Stack>
        </Stack>
    <Stack height={'100vh'}>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    </Stack>
    </>
    );
}