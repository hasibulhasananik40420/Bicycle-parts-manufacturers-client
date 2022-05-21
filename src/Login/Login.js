import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googlelogo from '../Assest/Images/google-logo.png'
import Spinner from '../Shared/Spinner';
import back from '../Assest/Images/Business crisis-bro.svg'
//style={{background:`url(${back})`}}
const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/"

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit=(data)=>{
        console.log(data);
        signInWithEmailAndPassword(data.email , data.password )
    }

     if(user || googleUser){
        navigate(from, { replace: true });
     }
     if(loading || googleLoading){
         return <Spinner></Spinner>
     }

     let errorMessage 
     if(error || googleError){
         errorMessage = <p className='font-blod text-red-600'>{error?.message || googleError?.message}</p>
     }

    return (
        <div  className='flex justify-center items-center h-screen'>
            <div class="card w-96  bg-base-100 text-primary-content shadow-2xl">
                <div class="card-body">
              
                   
                    <h2 class="text-xl font-bold text-center">LOGIN</h2>
                    <form  onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>

                            </label>
                            <input  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} type="email" placeholder="Enter Email" class="input input-bordered  w-full max-w-xs" />
                            <label class="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="password" placeholder="Enter Password" className="input input-bordered  w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}

                            </label>
                        </div>

                        <input className="btn btn-accent btn-outline text-white w-full max-w-xs" type="submit" value="LOGIN" />
                    </form>
                    {errorMessage}
                    <span>New to here? <Link className='text-primary font-medium' to="/singup">Create a account</Link></span>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent font-medium"> <img className='w-[30px] mr-3' src={googlelogo} alt="" /> Continue With Google</button> 
                </div>
            </div>
        </div>
    );
};

export default Login;