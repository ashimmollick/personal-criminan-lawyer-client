import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import icon from '../../../src/assets/Icon/google.svg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Signup = () => {
    const location = useLocation();
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'
    const from1 = location.state?.from?.pathname || '/'
    const { createUser, providerLogin } = useContext(AuthContext);
    useTitle('singup')
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err));
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(resulte => {
                const user = resulte.user;
                console.log(user)
                navigate(from1, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="hero-content  flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-3/4  shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <h2 className="text-4xl text-center text-yellow-500">Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className=" m-auto">
                            <input className="btn btn-primary px-16" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center pb-5'>Already have an account? <Link className='text-yellow-500 font-bold' to="/login">Login</Link> </p>
                    <div className="divider">OR</div>
                    <p>  </p>
                    <div onClick={handleGoogleSignIn} className='hover:text-yellow-500 flex justify-center align-middle py-8'>
                        <span className="text-2xl font-semibold pr-2" >Sign up with </span>
                        <img className='h-6 mt-2 ' src={icon} alt="" />
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Signup;