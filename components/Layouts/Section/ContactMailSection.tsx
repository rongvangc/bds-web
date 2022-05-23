import React from 'react';
import { useFormik } from 'formik';
import Image from 'next/image';
import LinkButton from '../../Elements/LinkButton';
import * as Yup from 'yup';

const ContactMailSection: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Tối đa 30 kí tự')
        .required('Vui lòng nhập họ và tên!'),
      phone: Yup.number().required('Vui lòng nhập số điện thoại!'),
      email: Yup.string()
        .email('Lỗi định dạng mail')
        .required('Vui lòng nhập email!'),
    }),
  });

  return (
    <div className="grid grid-cols-2 gap-4 py-8">
      <div className="rounded-2xl bg-primary px-7 py-12 text-center text-white">
        <h3 className="text mb-4 text-2xl font-bold uppercase">
          Đăng kí ngay
          <br />
          Để nhận tư vấn miễn phí
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Họ và tên"
            className="w-full rounded-lg bg-lightGreen px-4 py-2.5 text-primary outline-none"
            onChange={formik.handleChange}
            value={formik.values.name}
            required
          />
          {formik.errors.name ? (
            <p className="mb-4 text-left text-red">{formik.errors.name}</p>
          ) : (
            <p className="mb-4"></p>
          )}
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Số điện thoại"
            className="w-full rounded-lg bg-lightGreen px-4 py-2.5 text-primary outline-none"
            onChange={formik.handleChange}
            value={formik.values.phone}
            required
          />
          {formik.errors.phone ? (
            <p className="mb-4 text-left text-red">{formik.errors.phone}</p>
          ) : (
            <p className="mb-4"></p>
          )}
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className="w-full rounded-lg bg-lightGreen px-4 py-2.5 text-primary outline-none"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          {formik.errors.email ? (
            <p className="mb-4 text-left text-red">{formik.errors.email}</p>
          ) : (
            <p className="mb-4"></p>
          )}
          <p className="my-4">
            Tham gia Group để những thông tin về sản phẩm giá tốt
          </p>
          <div className="flex justify-center">
            <LinkButton href="https://www.facebook.com/">
              <div className="px-1">
                <Image src="/facebook.png" width={30} height={30} alt="" />
              </div>
            </LinkButton>
            <LinkButton href="https://www.facebook.com/">
              <div className="px-1">
                <Image
                  src="/zalo.png"
                  width={30}
                  height={30}
                  alt=""
                  className="rounded-md bg-white"
                />
              </div>
            </LinkButton>
          </div>
          <button
            className="mt-4 rounded-3xl bg-tertiary py-2 px-6 text-xl"
            type="submit"
          >
            Tư vấn ngay
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMailSection;
