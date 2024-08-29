import { Box } from '@mui/material';
import React,{useState} from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import './Login.css';
import Button from '@mui/material/Button';
import Header from './Header';






function Login() {
    
    const navigate= useNavigate();
    const [userData, setUserData] = useState({
        
        email:"",
        password:"",
        
    })
    const handleChange = ({target:{name,value}}) => {
        let updatedData = {...userData}
        updatedData[name] = value;
        setUserData(updatedData);
    }
    const handleRegister = () => {
        navigate('/Register')
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
       
       if (userData.email === "x@gmail.com" && userData.password === "x@123") {
        alert("User Logged in successfully");
        navigate('/Sidebar');
        console.log(userData.email,userData.password);

       } else {
        console.log(userData.email);
        console.log(userData.password1);
        alert("Email id and Password donot match")
        
       }

    }
    return (
        <div className='container'>
            <Header/>
            
            <form onSubmit={handleSubmit}>
                <div className='loginBox'>
                    <Typography variant="h1" color="primary" gutterBottom>
                        Login
                    </Typography>

                    <TextField id="standard-basic" label="Email" defaultValue="" name='email' type="email" variant="standard" fullWidth sx={{ margin: 1 }} onChange={handleChange} />
                    <TextField id="standard-basic" label="Password" defaultValue="" name='password' type="password" variant="standard" fullWidth sx={{ margin: 1 }} onChange={handleChange} />


                    <Button className= 'LoginCss'variant="contained" type="submit" sx={{ margin: 1  }} >Login</Button>
                    <Button variant="outlined" sx={{ margin: 1 }} onClick={handleRegister} fullWidth>Register</Button>
                    
                </div>
            </form>
        </div>
    )
}

export default Login;
