import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { loginWithEmailAndPassword } from "../../auth";

export default function Login() {
  function _login({ email, password }) {
    loginWithEmailAndPassword(email, password);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-200 via-green-400 to-green-500">
      <div className="flex bg-white rounded-2xl shadow-xl">
        <div className="flex w-80  bg-masthead bg-85% bg-center bg-no-repeat"></div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={_login}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
            password: Yup.string().required("Required").min(8, "Too short"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form
                className="flex flex-col max-w-xs p-10"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col my-3">
                  <label
                    className="text-sm font-bold px-3 pb-2 text-green-500"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${
                      errors.email && touched.email
                        ? "bg-red-50"
                        : "bg-green-50"
                    }  rounded-full px-5 py-2 shadow-sm focus:outline-none`}
                  />
                </div>
                <div className="flex flex-col my-3">
                  <label
                    className="text-sm font-bold px-3 pb-2 text-green-500"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${
                      errors.password && touched.password
                        ? "bg-red-50"
                        : "bg-green-50"
                    }  rounded-full px-5 py-2 shadow-sm focus:outline-none`}
                  />
                </div>
                <div className="my-3">
                  <input
                    type="submit"
                    disabled={errors.email || errors.password}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-full shadow-sm hover:shadow-md disabled:bg-gray-300 cursor-pointer"
                    value="Log In"
                  />
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
