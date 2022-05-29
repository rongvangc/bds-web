import React, { useState, useMemo, useCallback } from 'react';
import type { NextPage } from 'next';
import Layout from '../components/Layouts';
import Section from '../components/Layouts/Section';
import { Formik, Field, Form } from 'formik';
import { registerSchema } from '../utils/validation/registerSchema';
import { loginSchema } from '../utils/validation/loginSchema';
import Image from 'next/image';
import Button from 'components/Elements/Button';
import { isEmpty } from 'lodash';
import IconList from 'icons';

const Login: NextPage = () => {
  const [openTab, setOpenTab] = useState<'login' | 'register'>('login');
  const isRegister = useMemo(() => openTab === 'register', [openTab]);

  const form = useCallback(() => {
    return (
      <Formik
        initialValues={{
          phone: '',
          email: '',
          password: '',
        }}
        validationSchema={isRegister ? registerSchema : loginSchema}
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
            {isRegister ? (
              <>
                <label
                  htmlFor="phone"
                  className="text-gray-400 mb-2 block text-sm font-medium"
                >
                  Phone
                </label>
                <div className="mb-6">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                      <IconList type="phone" size="md" />
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
              </>
            ) : null}
            <label
              htmlFor="email"
              className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
            >
              Email
            </label>
            <div className="mb-5">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                  <IconList type="envelope" size="md" />
                </div>
                <Field
                  name="email"
                  id="email"
                  className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                  placeholder="name@gmail.com"
                />
              </div>
              {errors.email && touched.email && (
                <p className="pt-1 text-xs italic text-red">{errors.email}</p>
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
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                  <IconList type="key" size="md" />
                </div>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full border-0 border-b-2 p-2.5 pl-10 text-sm"
                  placeholder="Mật khẩu"
                />
              </div>
              {errors.password && touched.password && (
                <p className="pt-1 text-xs italic text-red">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <Button
                className="flex w-full justify-center py-4"
                variant="primary"
                disabled={!isEmpty(errors)}
              >
                {isRegister ? 'Đăng ký' : 'Đăng nhập'}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    );
  }, [isRegister]);

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
                  <ul className="mb-0 flex list-none flex-row flex-wrap border-b border-lightGray pt-3">
                    <li className="-mb-px flex-auto text-center last:mr-0">
                      <a
                        className={
                          'block cursor-pointer rounded-t px-5 py-4 text-xs font-bold uppercase leading-normal shadow-lg ' +
                          (openTab === 'register'
                            ? 'bg-primary text-white'
                            : 'text-' + 'primary' + 'bg-white')
                        }
                        onClick={() => {
                          setOpenTab('register');
                        }}
                        role="tablist"
                      >
                        Đăng ký
                      </a>
                    </li>
                    <li className="-mb-px flex-auto text-center last:mr-0">
                      <a
                        className={
                          'block cursor-pointer rounded-t px-5 py-4 text-xs font-bold uppercase leading-normal shadow-lg ' +
                          (openTab === 'login'
                            ? 'bg-primary text-white'
                            : 'text-' + 'primary' + 'bg-white')
                        }
                        onClick={() => {
                          setOpenTab('login');
                        }}
                      >
                        Đăng nhập
                      </a>
                    </li>
                  </ul>
                  <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-b bg-white shadow-lg">
                    <div className="flex-auto px-4 py-5">
                      <div className="tab-content tab-space">{form()}</div>
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
