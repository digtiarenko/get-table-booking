'use client';

import { useFormik } from 'formik';
import * as yup from 'yup';

export default function Modal({
  type,
  onClose,
}: {
  type: string;
  onClose: () => void;
}) {
  const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup
      .string()
      .matches(emailRegexp, 'Phone number is not valid')
      .email('Enter a valid email')
      .required('Email is required'),
    phone: yup
      .string()
      .matches(phoneRegex, 'Enter a valid phone')
      .required('Phone is required'),
    city: yup.string().required('City is required'),
    password: yup
      .string()
      .min(6, 'Password number should be of minimum 6 characters')
      .max(20, 'Password should be of maximum 20 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('values', values);
      // dispatch(logIn(values));
      // resetForm();
    },
  });
  return (
    <div onClick={onClose} className="relative z-10" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            onClick={e => e.stopPropagation()}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <button
                onClick={onClose}
                type="button"
                className="absolute right-3 top-3 box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="sm:flex flex-col sm:items-center">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-center font-semibold leading-2 text-gray-900"
                    id="modal-title"
                  >
                    {type === 'signin' ? 'Sign in' : 'Sign up'}
                  </h3>
                </div>
                <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form onSubmit={formik.handleSubmit} className="space-y-1">
                    <div className="flex justify-between gap-1">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First Name
                        </label>
                        <div className="mt-2">
                          <input
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            required
                            className="block w-full rounded-md border-0 p-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          {formik.touched.firstName &&
                          formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last Name
                        </label>
                        <div className="mt-2">
                          <input
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            id="lastName"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            required
                            className="block w-full rounded-md border-0 p-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-2 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 p-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between gap-1">
                      <div>
                        <label
                          htmlFor="Phone"
                          className="block text-sm font-medium leading-2 text-gray-900"
                        >
                          Phone
                        </label>
                        <div className="mt-2">
                          <input
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="tel"
                            required
                            className="block w-full rounded-md border-0 p-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          {formik.touched.phone && formik.errors.phone ? (
                            <div>{formik.errors.phone}</div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-2 text-gray-900"
                        >
                          City
                        </label>
                        <div className="mt-2">
                          <input
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            id="city"
                            name="city"
                            type="text"
                            autoComplete="street-address"
                            required
                            className="block w-full rounded-md border-0 p-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-2 text-gray-900"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full bg-white rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div>{formik.errors.password}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-center sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        {type === 'signin' ? 'Sign in' : 'Sign up'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
