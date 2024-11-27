import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "../redux/authapi";

const Register = () => {
  const [Register, { isSuccess, isError, isLoading }] = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must be numeric")
        .min(10, "Phone number must be at least 10 digits")
        .required("Phone number is required"),
      address: Yup.string()
        .min(10, "Address must be at least 10 characters")
        .required("Address is required"),
    }),
    onSubmit: async (values) => {
      try {
        // Call the Register mutation
        const response = await Register(values).unwrap();
        if (isSuccess) {
          console.log("Registration Successful:", response);
          // You can redirect the user or show a success message
        }
      } catch (error) {
        if (isError) {
          console.error("Registration failed:", error);
          // Show an error message to the user
        }
      }
    },
  });

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex items-center justify-center py-6 px-4">
        <div className="max-w-4xl mx-96 w-full grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Register</h2>
            <form className="mt-8 space-y-4" onSubmit={formik.handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter your name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <input
                  name="password"
                  type="password"
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter your phone number"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Address</label>
                <textarea
                  name="address"
                  className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter your address"
                  {...formik.getFieldProps("address")}
                ></textarea>
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-500 text-xs mt-1">{formik.errors.address}</p>
                )}
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
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
