import { Box } from '@mui/material';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import SideBar from './SideBar';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };






function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const handleLogin = () => {
        navigate('/Login');
    }
    const handleChange = ({target:{name,value}}) => {
        let updatedData = {...userData}
        updatedData[name] = value;
        setUserData(updatedData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userData.name.length<5) {
            alert("Please enter the name more than 5 characters")
        }
        if (userData.password!==userData.confirmpassword){
            alert("Password dont matched")
        } else {
            alert("Registered sucessfully");
            // navigate('/SideBar');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ width: '100%', maxWidth: 500, background: "white", padding: 10, borderRadius: 10 }}>
                <Typography variant="h1" color="primary" gutterBottom>
                    Register
                </Typography>
                <TextField id="standard-basic" label="Name" defaultValue="" name="name" type='Name' variant="standard" fullWidth sx={{ margin: 1 }} onChange={handleChange}/>
                <TextField id="standard-basic" label="Email" defaultValue=" " name="Email" type="email" variant="standard" fullWidth sx={{ margin: 1 }} onChange={handleChange} />
                <TextField id="standard-basic" label="Password" defaultValue="" name="password"type="password" variant="standard" fullWidth sx={{ margin: 1 }} onChange={handleChange} />
                <TextField id="standard-basic" label="Confirm Password" defaultValue="" name="confirmpassword" type="password" variant="standard" fullWidth sx={{ margin: 1 }} onChange={handleChange} />
                <Box sx={{ textAlign: "left", margin: 1 }}>
                    <Checkbox {...label} defaultChecked />
                    <Typography variant="caption" color="black" gutterBottom>
                        Accept terms and conditions
                    </Typography>
                </Box>
                <Button variant="contained" type= "submit" sx={{ margin: 1 }} fullWidth>Register</Button>
                <Button variant="outlined"  sx={{ margin: 1 }} onClick={handleLogin} fullWidth>Login</Button>

            </Box>
        </form>
    )
}

export default Register;
