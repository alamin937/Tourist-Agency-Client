import React from 'react';
import { useLocation,useHistory } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';
// import UseHooks from '../../UseHooks/UseHooks';

const Login = () => {
    const {googleSignIn} = UseAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLoginIn = () =>{
        googleSignIn()
        .then(result =>{
            history.push(redirect_uri)
        })
    }

    return (
        <div style={{marginTop:'20px'}}>
            <h1 style={{marginBottom:'10px'}}>Log In Here</h1>
            <button onClick={handleGoogleLoginIn} style={{ padding:'4px 30px', 
            fontSize:'20px', border:'1px solid grey', borderRadius:'10px', backgroundColor:'blue', color:'white'

            }}>Continue as Google</button>
        </div>
    );
};

export default Login;