import React, { useState } from 'react';
import Logintemplet from './Logintemplet';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [notification, setnotification] = useState(false)
    const navigate = useNavigate()
    const findingEmail = (email, displayName) => {
        console.log(email)
        let url = `http://ec2-3-135-131-209.us-east-2.compute.amazonaws.com:5000/login/${email}`
        // let url = `http://ec2-3-135-131-209.us-east-2.compute.amazonaws.com:5000/signup/p01`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.count === 1) {
                    setnotification(true)
                    console.log('this person already  exist', email, displayName)
                }
                else if (data.count === 0) {
                    setnotification(false)
                    console.log('this person not exist', email, displayName)
                    let url2 = `http://ec2-3-135-131-209.us-east-2.compute.amazonaws.com:5000/signuppost`
                    fetch(url2,
                        {
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            method: "POST",
                            body: JSON.stringify(
                                { email: email, name: displayName }
                            )
                        })
                        .then(res => res.json())
                        .then(data => console.log(data))
                }
                navigate('/')
            })




    }


    return (
        <div>
            <Logintemplet btntxt={'sign up'} findingEmail={findingEmail} notification={notification} notificationtxt={'You are already register'} ></Logintemplet>
        </div>
    );
};

export default SignUp;