import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiLogoGmail, BiLogoGithub } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signIn(data.email, data.password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
      
          });
    }
    return (
        <div className='py-10'>
            <div className="card lg:card-side bg-base-100 shadow-xl py-10">
                <figure className='flex-1'><img className='rounded-lg' src="https://i.ibb.co/1st9nhd/login-form-college.jpg" alt="College" /></figure>
                <div className="card-body  flex-1">
                    <h2 className="card-title text-center text-2xl md:text-3xl">Login to College Connect!</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] md:w-3/4 mx-auto'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="text" placeholder="Type Email" 
                            {...register("email", { required: true })} 
                            className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Enter Your Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="Type Password" className="input input-bordered w-full " />
                        </div>
                        <h3 className='mt-4'>Forgattet Password</h3>
                        <div className="card-actions mt-4 justify-start">
                            <input type='submit' className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <div className='form-footer w-full md:w-3/4 mx-auto'>
                        <h2 className='font-semibold py-4'>Don't have an account?<Link to='/sing-up' className='text-indigo-600'> Sing Up</Link> </h2>
                        <div className="divider">OR</div>
                        <p className='py-4 text-2xl flex justify-center gap-6'>
                            <span className='rounded-full shadow-lg p-2 border-gray-400 hover:bg-indigo-100 transition duration-500 cursor-pointer border-2'>
                                <BiLogoGmail></BiLogoGmail>
                            </span>
                            <span className='rounded-full shadow-lg p-2 border-gray-400 hover:bg-indigo-100 transition duration-500 cursor-pointer border-2'>
                                <BiLogoGithub></BiLogoGithub>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login