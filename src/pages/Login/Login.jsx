import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  if(token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLoginError('');
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      setLoginUserEmail(data.email);
    })
    .catch( error => {
      setLoginError(error.message)
    })
  }

  return (
    <div className="px-2 md:px-0 flex justify-center items-center">
      <div className="w-96 p-7 border border-zinc-900 rounded-2xl">
        <h2 className="text-2xl text-center text-primary font-bold">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Email</span></label>
            <input className="input input-bordered w-full max-w-xs" type="email"
              {...register("email", { required: "Email Address is required"})}
            />
          {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text font-semibold">Password</span></label>
            <input className="input input-bordered w-full max-w-xs" type="password"
              {...register("password", { required: "Password is required",
                  minLength: { value: 6, message: "Password must be 6 characters or longer" }
              })}
            />
            <label className="label"> <span className="mt-1 label-text font-semibold">Forget Password?</span></label>
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
          </div>
          <input className="mt-2 btn btn-accent w-full" value="Login" type="submit" />
          <div className="mt-2">
            {loginError && <p className="text-red-600 font-semibold">{loginError}</p>}
          </div>
        </form>
        <p className="mt-4 text-center font-semibold">New to Health Hub? <Link className="text-secondary" to="/signup">Create new Account</Link></p>
        <div className="divider font-semibold">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;