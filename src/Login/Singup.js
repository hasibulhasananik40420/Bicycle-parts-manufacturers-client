import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import google from '../Assest/Images/google-logo.png'
import Spinner from '../Shared/Spinner';
const Singup = () => {
    //google sing in
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/"



    const onSubmit = async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // console.log('updated done');

    }

    if (loading || googleLoading || updating) {
        return <Spinner></Spinner>
    }

    let errorMessage
    if (error || googleError || updateError) {
        errorMessage = <p className='text-red-500 font-serif'> {error?.message || googleError?.message || updateError.message}</p>
    }

    if (user || googleUser) {
        navigate(from, { replace: true });
    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96  bg-base-100 text-primary-content shadow-2xl">
                <div class="card-body">
                    <h2 class="text-xl font-bold text-center">SINGUP</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}

                                type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.name.message}</span>}
                            </label>
                        </div>


                        {/* email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}

                                type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-medium">{errors.email.message}</span>}

                            </label>
                        </div>



                        {/* password */}
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
                            })} type="password" placeholder="Enter Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-medium">{errors.password.message}</span>}

                            </label>
                        </div>

                        {errorMessage}

                        <input className="btn  btn-outline  w-full max-w-xs" type="submit" value="SINGUP" />
                    </form>
                    <span>Already have an account? <Link className='text-primary font-medium' to="/login">Please Login</Link></span>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline  font-medium"><img className='w-[30px] mr-3' src={google} alt="" /> Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Singup;