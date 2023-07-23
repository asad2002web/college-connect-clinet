import React, { useCallback, useContext } from 'react'
import { BiLogoGithub, BiLogoGmail } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const SingUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext)
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const password = watch("password");
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    // updateUserProfile(data.name, data.photoURL);
    updateUserProfile(data.name, data.photoURL).then(() => {
      const saveUser = { name: data.name, email: data.email, photo: data.photoURL, role: 'student'};
     
    });
    navigate("/");
  }


  return (
    <div className="w-full md:w-3/4 mx-auto my-16">
      <h1 className='text-center text-2xl py-4'>Sing Up Accoount</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              name='name'
              placeholder="Full Name"
              {...register("fullName", { required: true })}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              {...register("gender", { required: true })}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date of Birth Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dob"
              type="date"
              {...register("dateOfBirth", { required: true })}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              // {...register("confirmPass", { required: true})}
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword?.type && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Sign Up Button */}
          <div className="col-span-2">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <p className='py-4 font-semibold text-xl'>Allready have a account ? <Link to='/login'><span className='text-indigo-600'>Login</span></Link> </p>
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

  )
}

export default SingUp