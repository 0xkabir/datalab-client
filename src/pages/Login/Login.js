import React from 'react';
import login from './login.jpg'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {userLogin, loginWithProvider} = useContext(AuthContext)
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then(result => {
            form.reset()
            const user = result.user
            console.log('login successful with', user)
        })
        .catch(error => console.error(error))
    }

    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider()
        loginWithProvider(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <h2 className='text-2xl font-medium text-center mt-10'>Login to Your Account</h2>
            <div className='grid md:grid-cols-2 items-center'>
            <img src={login} alt="" className='lg:w-4/5 mx-auto'/>
            <div>
                <form onSubmit={handleLogin} className='mx-auto w-4/5 md:w-auto'>
                    <label htmlFor="email" className='block'>Email</label>
                    <input type="email" name="email" className='bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5'/>
                    <label htmlFor="password" className='block'>Password</label>
                    <input type="password" name="password" className='bg-gray-200 px-2 py-1.5 rounded my-1.5 w-full md:w-4/5 lg:w-2/5'/>
                    <button type='submit' className='px-5 py-1.5 rounded bg-slate-700 hover:bg-slate-900 text-white font-medium block mt-3'>Login!</button>
                </form>
                <p className='mt-2 w-4/5 mx-auto md:w-auto'>New to DataLab? <Link to='/register' className='text-slate-700'>Register Now!</Link></p>
                <p className='text-center w-full md:w-4/5 lg:w-2/5 my-3'>Or, Continue with</p>
                <div className='w-full md:w-4/5 lg:w-2/5 flex justify-evenly'>
                <button onClick={handleGoogleLogin} className='flex items-center px-4 py-1.5 rounded text-slate-700 border-2 border-slate-700 hover:bg-slate-800 hover:text-white hover:font-medium'><FaGoogle className='mr-2'/> Google</button>
                <button className='flex items-center px-4 py-1.5 rounded text-slate-700 border-2 border-slate-700 hover:bg-slate-800 hover:text-white hover:font-medium'><FaGithub className='mr-2'/> GitHub</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;