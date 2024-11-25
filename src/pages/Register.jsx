import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
       <div className="bg-gray-50 font-[sans-serif]">
        <div className="min-h-screen flex items-center justify-center py-6 px-4">
          <div className="max-w-4xl mx-96 w-full grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
            {/* Left: Registration Form */}
            <div className="p-8 rounded-2xl bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">Register</h2>
              <form className="mt-8 space-y-4">
                {/* Name Field */}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                      placeholder="Enter password"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Address</label>
                  <textarea
                    name="address"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your address"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="!mt-8">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Register
                  </button>
                </div>
                <p className="text-gray-800 text-sm !mt-8 text-center">
                  Already have an account?{" "}
                 <Link to='/login'>Log in </Link>
                </p>
              </form>
            </div>

            {/* Right: Image */}
            {/* <div className="hidden md:block">
              <img
                src="https://via.placeholder.com/400"
                alt="Placeholder"
                className="rounded-lg shadow-lg"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
