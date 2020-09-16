import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default function LoginSignUp(props) {
    const { onSubmitProp } = props;
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [birthdateError, setBirthdateError] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            username,
            password,
            email,
            birthdate
        })
        .then((res)=> {
            console.log(res)
            if (res.data.error) {
                console.log(res.data.error.errors)
                if (res.data.error.errors.username) {
                    setUsernameError(res.data.error.errors.username.message)
                }
                if (res.data.error.errors.password) {
                    setPasswordError(res.data.error.errors.password.message)
                }
                if (res.data.error.errors.email) {
                    setEmailError(res.data.error.errors.email.message)
                }
                if (res.data.error.errors.birthdate) {
                    setBirthdateError(res.data.error.errors.birthdate.message)
                }
            }
        })
    };

    return (
        <div className='LoginSignUpContainer'>
            <div className='LoginSignUpLowerContainer'>
                <div className='LoginLeftContainer'>
                    <h1 className='ContentHeader'>login</h1><br/><br/>
                    <form>
                        <label>username</label><br/><br/>
                        <input type='text' name='login-username'></input>
                        <br/><br/><br/><br/><br/><br/>
                        <label>password</label><br/><br/>
                        <input type='text' name='login-password'></input>
                    </form>
                </div>
                <span className='LoginSignUpSeparator'></span>
                <div className='SignUpRightContainer'>
                    <h1 className='ContentHeader'>sign up</h1><br/><br/>
                    <form onSubmit={ onSubmitHandler }>
                        <p className='UsernameError'>{ usernameError }</p>
                        <p className='PasswordError'>{ passwordError }</p>
                        <p className='EmailError'>{ emailError }</p>
                        <p className='BirthdateError'>{ birthdateError }</p>
                        <label>username</label><br/><br/>
                        <input type='text' name='signup-username' onChange = { e => setUsername(e.target.value) }></input>
                        <br/><br/><br/>
                        <label>password</label><br/><br/>
                        <input type='password' name='signup-password' onChange = { e => setPassword(e.target.value) }></input>
                        <br/><br/><br/>
                        <label>email</label><br/><br/>
                        <input type='text' name='signup-email' onChange = { e => setEmail(e.target.value) }></input>
                        <br/><br/><br/>
                        <label>birthdate</label><br/><br/>
                        <input type='text' name='signup-birthdate' placeholder='mm/dd/yyyy' onChange = { e => setBirthdate(e.target.value) }></input>
                        <br/><br/><br/><br/>
                        <button className='SubmitButton' onClick={ onSubmitHandler }><Link className='SubmitLink' to='/home'>submit</Link></button>
                    </form>
                </div>
            </div>
        </div>
    )
}