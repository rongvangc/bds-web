import React from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import { Formik, Field, Form } from 'formik';
import { registerSchema } from '../utils/validation/registerSchema';
import { loginSchema } from '../utils/validation/loginSchema';
import Image from 'next/image';

const Login: NextPage = () => {
  const [openTab, setOpenTab] = React.useState(2);

  return (
    <Layout title="Đăng nhập">
      <Section className="h-full">
        <div className="container h-full px-6 py-12">
          <div className="g-6 text-gray-500 flex h-full flex-wrap items-center justify-center">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <Image
                src="/asset/undraw_login_re_4vu2.svg"
                alt="Picture of the author"
                width={600}
                height={600}
              />
            </div>
            <div className="md:w-8/12 lg:ml-20 lg:w-5/12">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <ul
                    className="mb-0 flex list-none flex-row flex-wrap pt-3"
                    role="tablist"
                  >
                    <li className="-mb-px flex-auto text-center last:mr-0">
                      <a
                        className={
                          'block rounded px-5 py-4 text-xs font-bold uppercase leading-normal shadow-lg ' +
                          (openTab === 1
                            ? 'bg-primary text-white'
                            : 'text-' + 'primary' + 'bg-white')
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#register"
                        role="tablist"
                      >
                        Đăng ký
                      </a>
                    </li>
                    <li className="-mb-px flex-auto text-center last:mr-0">
                      <a
                        className={
                          'block rounded px-5 py-4 text-xs font-bold uppercase leading-normal shadow-lg ' +
                          (openTab === 2
                            ? 'bg-primary text-white'
                            : 'text-' + 'primary' + 'bg-white')
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#logIn"
                        role="tablist"
                      >
                        Đăng nhập
                      </a>
                    </li>
                  </ul>
                  <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg">
                    <div className="flex-auto px-4 py-5">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? 'block' : 'hidden'}
                          id="register"
                        >
                          <div className="border-primaryBorder m-auto w-full max-w-md bg-white py-5 px-5">
                            <Formik
                              initialValues={{
                                phone: '',
                                email: '',
                                password: '',
                              }}
                              validationSchema={registerSchema}
                              onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2));
                                  setSubmitting(false);
                                }, 400);
                              }}
                            >
                              {({
                                errors,
                                touched,
                                /* and other goodies */
                              }) => (
                                <Form>
                                  <label
                                    htmlFor="phone"
                                    className="text-gray-400 mb-2 block text-sm font-medium"
                                  >
                                    Phone
                                  </label>
                                  <div className="mb-6">
                                    <div className="relative">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                          />
                                        </svg>
                                      </div>
                                      <Field
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        className="bg-gray-50 border-b-gray-300 text-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                                        placeholder="0966 555 444"
                                      />
                                    </div>
                                    {errors.phone && touched.phone && (
                                      <p className="pt-1 text-xs italic text-red">
                                        {errors.phone}
                                      </p>
                                    )}
                                  </div>
                                  <label
                                    htmlFor="email"
                                    className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
                                  >
                                    Email
                                  </label>
                                  <div className="mb-5">
                                    <div className="relative">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                          className="text-gray-500 dark:text-gray-400 h-5 w-5"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                      </div>
                                      <Field
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                                        placeholder="name@gmail.com"
                                      />
                                    </div>
                                    {errors.email && touched.email && (
                                      <p className="pt-1 text-xs italic text-red">
                                        {errors.email}
                                      </p>
                                    )}
                                  </div>
                                  <label
                                    htmlFor="password"
                                    className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
                                  >
                                    Password
                                  </label>
                                  <div className="mb-2">
                                    <div className="relative">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                          />
                                        </svg>
                                      </div>
                                      <Field
                                        name="password"
                                        type="password"
                                        id="password"
                                        className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                                        placeholder="Your Password"
                                      />
                                    </div>
                                    {errors.password && touched.password && (
                                      <p className="pt-1 text-xs italic text-red">
                                        {errors.password}
                                      </p>
                                    )}
                                  </div>
                                  <div className="mt-6 flex items-center justify-center">
                                    <button
                                      type="submit"
                                      className={`focus:border-green-dark grow rounded border border-primary bg-primary py-4 px-4 text-sm text-white focus:outline-none`}
                                    >
                                      Đăng ký
                                    </button>
                                  </div>
                                </Form>
                              )}
                            </Formik>
                          </div>
                        </div>
                        <div
                          className={openTab === 2 ? 'block' : 'hidden'}
                          id="logIn"
                        >
                          <div className="border-primaryBorder m-auto w-full max-w-md  bg-white py-5 px-5">
                            <Formik
                              initialValues={{
                                email: '',
                                password: '',
                              }}
                              validationSchema={loginSchema}
                              onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                  alert(JSON.stringify(values, null, 2));
                                  setSubmitting(false);
                                }, 400);
                              }}
                            >
                              {({
                                errors,
                                touched,
                                /* and other goodies */
                              }) => (
                                <Form>
                                  <label
                                    htmlFor="email"
                                    className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
                                  >
                                    Email
                                  </label>
                                  <div className="mb-5">
                                    <div className="relative">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                          className="text-gray-500 dark:text-gray-400 h-5 w-5"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                      </div>
                                      <Field
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                                        placeholder="name@gmail.com"
                                      />
                                    </div>
                                    {errors.email && touched.email && (
                                      <p className="pt-1 text-xs italic text-red">
                                        {errors.email}
                                      </p>
                                    )}
                                  </div>
                                  <label
                                    htmlFor="password"
                                    className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
                                  >
                                    Password
                                  </label>
                                  <div className="mb-2">
                                    <div className="relative">
                                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                          />
                                        </svg>
                                      </div>
                                      <Field
                                        name="password"
                                        type="password"
                                        id="password"
                                        className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                                        placeholder="Your Password"
                                      />
                                    </div>
                                    {errors.password && touched.password && (
                                      <p className="pt-1 text-xs italic text-red">
                                        {errors.password}
                                      </p>
                                    )}
                                  </div>
                                  <div className="mt-6 flex items-center justify-center">
                                    <button
                                      className={`focus:border-green-dark grow rounded border border-primary bg-primary py-4 px-4 text-sm text-white focus:outline-none`}
                                    >
                                      Đăng nhập
                                    </button>
                                  </div>
                                </Form>
                              )}
                            </Formik>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Login;
