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
import Dashboard from "../Dashboard";

export default function ProductManage() {
    return (
        <>
        <Stack mt={10}>
            <Stack ml={26}>
                <Typography fontSize={'24px'}>Product Manage</Typography>
            </Stack>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={4} mt={8}>
                <Stack direction={'row'} spacing={19}>
                    <TextField size={'small'} label={'Title'} sx={{width: '400px'}}></TextField>
                    <TextField size={'small'} sx={{width: '400px'}} label={'Price'}></TextField>
                </Stack>
                <Stack direction={'row'} spacing={19}>
                    <Box sx={{minWidth: 120, width: '400px'}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Category"
                                // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        maxRows={4}
                        sx={{width: '400px'}}
                    />
                </Stack>
                <Stack direction={'row'} spacing={19} >
                    <TextField id="outlined-search"
                               label="Choose Image"
                               type="password"
                               size={'small'}
                               sx={{width: '370px', mr:'580px'}}
                               InputProps={{
                                   endAdornment:
                                   /*<Button variant={'contained'} /!*sx={{
                                       height:'100%'
                                   }}*!/>Subscribe</Button>*/
                                       <IconButton color="primary"
                                                   component="label">
                                           <input hidden accept="image/*" type="file"/>
                                           <PhotoCamera/>
                                       </IconButton>
                               }}

                    />

                </Stack>
            </Stack>
            <Stack width={'90vw'} justifyContent={'flex-end'} direction={'row'} style={{backgroundColor:''}}>
                <Box>
                    <Button style={{backgroundColor:'#c4af9e', color:'black', marginRight:'20px'}}>Clear</Button>
                </Box>
                <Box>
                    <Button style={{backgroundColor:'#8a69ec', color:'black', marginLeft:'20px'}}>Save</Button>
                </Box>
            </Stack>

        </Stack>
        </>
    )
}