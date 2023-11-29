import React, { useState } from 'react';
import Logintemplet from './Logintemplet';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    //finding email for login
    const navigation = useNavigate();
    const [notification, setnotification] = useState(false)
    const [loginvalidation, setloginValidation] = useState(false);
    console.log("Hello this is login page")
    const findingEmail = (email,displayName) => {
        console.log(email)
        let url = `http://localhost:5000/login/${email}`
        // let url = `http://localhost:5000/login/p01`


        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.count === 0) {
                    console.log('person is not register')
                    setnotification(true)
                    setloginValidation(false)

                }
                else {
                    console.log('person is register')
                    setnotification(false)
                    setloginValidation(true)
                    navigation('/')

                }
            })
    }

    console.log(loginvalidation)

    return (
        <div>
        
            <Logintemplet btntxt={'Log in'} findingEmail={findingEmail} notification={notification}></Logintemplet>
        </div>
    );
};

export default Login;