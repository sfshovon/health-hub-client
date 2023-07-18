import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if(token){
    navigate('/');
  }

  const handleSignUp = (data) => {
    setSignUpError('');
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user);
      toast('User Has Been Created Successfully')
      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
      .then(() => {
        saveUser(data?.name, data?.email);
       })
      .catch(err => console.log(err));
    })
    .catch(error => {
      setSignUpError(error.message)
    });
  }

  const saveUser = (name, email) => {
    const user = {name, email};
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers:  {
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data => {
      setCreatedUserEmail(email);
    })
  }

  return (
    <div className="px-2 md:px-0 flex justify-center items-center">
      <div className="w-96 p-7 border border-zinc-900 rounded-2xl">
        <h2 className="text-2xl text-center text-primary font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Name</span></label>
            <input className="input input-bordered w-full max-w-xs" type="text" 
              {...register("name", { required: "Name is Required" })}  
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Email</span></label>
            <input  className="input input-bordered w-full max-w-xs" type="email" 
              {...register("email", { required: true })} 
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Password</span></label>
            <input className="input input-bordered w-full max-w-xs"type="password" 
              {...register("password", { required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 characters long" },
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must have uppercase, number and special characters" 
              }})} 
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <input className="mt-4 btn btn-accent w-full" value="Sign Up" type="submit" />
          <div className="mt-2">
            {signUpError && <p className="text-red-600 font-semibold">{signUpError}</p>}
          </div>
        </form>
        <p className="mt-4 text-center font-semibold">Already have an account? <Link className="text-secondary" to="/login">Please login</Link></p>
        <div className="divider font-semibold">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;