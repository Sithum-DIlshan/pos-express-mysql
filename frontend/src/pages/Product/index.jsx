import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import {ValidatorForm} from "react-material-ui-form-validator";
import {useState} from "react";
import FileConverter from "../../services/FileConverter";
import ProductService from "../../services/ProductService";

export default function ProductManage() {
    const [data, setData] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        image: '',
    });

    const setTitle = (e) => {
        setData(prevState => ({...prevState, title: e.target.value}));
    }
    const setPrice = (e) => {
        setData(prevState => ({...prevState, price: e.target.value}));
    }
    const setCategory = (e) => {
        setData(prevState => ({...prevState, category: e.target.value}));
    }
    const setDescription = (e) => {
        setData(prevState => ({...prevState, description: e.target.value}));
    }
    const setImage = (e) => {
        e.preventDefault()
        FileConverter.readFileBase64(e.target.files[0])
            .then(r => {
                console.log(r);
                var strImage = r.replace(/^data:image\/[a-z]+;base64,/, "");
                setData(prevState => ({...prevState, image: strImage}));
            });
    }

    const saveProduct =async () => {
        await ProductService.postProduct(JSON.stringify(data));
    }


    return (
        <>
            <Stack mt={10}>
                <ValidatorForm onSubmit={saveProduct}>
                    <Stack ml={26}>
                        <Typography fontSize={'24px'}>Product Manage</Typography>
                    </Stack>
                    <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                        <Stack direction={'row'} spacing={19}>
                            <TextField size={'small'} label={'Title'} sx={{width: '400px'}}
                                       onChange={setTitle}></TextField>
                            <TextField size={'small'} sx={{width: '400px'}} label={'Price'} type={'number'}
                                       onChange={setPrice}></TextField>
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <Box sx={{minWidth: 120, width: '400px'}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="Category"
                                        onChange={setCategory}
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Biscuit</MenuItem>
                                        <MenuItem value={20}>Chocolate</MenuItem>
                                        <MenuItem value={30}>Fruit</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                maxRows={4}
                                sx={{width: '400px'}}
                                onChange={setDescription}
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={19}>
                            <TextField id="outlined-search"
                                       label="Choose Image"
                                       type="password"
                                       size={'small'}
                                       sx={{width: '370px', mr: '580px'}}
                                       InputProps={{
                                           endAdornment:
                                           /*<Button variant={'contained'} /!*sx={{
                                               height:'100%'
                                           }}*!/>Subscribe</Button>*/
                                               <IconButton color="primary"
                                                           component="label">
                                                   <input hidden accept="image/*" type="file" onChange={setImage}/>
                                                   <PhotoCamera/>
                                               </IconButton>
                                       }}

                            />

                        </Stack>
                    </Stack>
                    <Stack width={'90vw'} justifyContent={'flex-end'} direction={'row'} style={{backgroundColor: ''}}>
                        <Box>
                            <Button
                                style={{backgroundColor: '#c4af9e', color: 'black', marginRight: '20px'}}>Clear</Button>
                        </Box>
                        <Box>
                            <Button
                                style={{backgroundColor: '#8a69ec', color: 'black', marginLeft: '20px'}}
                                type={'submit'}>Save</Button>
                        </Box>
                    </Stack>
                </ValidatorForm>
            </Stack>
        </>
    )
}