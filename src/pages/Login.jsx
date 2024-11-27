import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useLoginMutation } from '../redux/authapi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Login, { isSuccess, error, isError, isLoading }] = useLoginMutation();
  const navigate = useNavigate(); // To redirect after successful login

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
      const loginData = { email, password };

      // Call the login mutation
      await Login(loginData).unwrap();

      if (isSuccess) {
        navigate('/dashboard'); // Redirect to a dashboard or other page after successful login
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Login</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="mt-8 space-y-4">
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                    <div className="relative flex items-center">
                      <Field
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter your password"
                      />
                      <svg
                        onClick={togglePasswordVisibility}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4 h-4 absolute right-4 cursor-pointer"
                        viewBox="0 0 128 128"
                      >
                        <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                      </svg>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="!mt-8">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                  </div>
                  <p className="text-gray-800 text-sm !mt-8 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:text-blue-700">
                      Register
                    </Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
