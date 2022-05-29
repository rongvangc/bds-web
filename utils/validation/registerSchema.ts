import * as Yup from 'yup'
export const registerSchema = Yup.object().shape({
  email: Yup.string().required('Trường thông tin bắt buộc').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Vui lòng nhập email có thật"),
  password: Yup.string().required('Trường thông tin bắt buộc').min(8, 'Mật khẩu cần trên 8 ký tự'),
  phone: Yup.string().required('Trường thông tin bắt buộc')
})