import * as Yup from 'yup'
export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required('Trường thông tin bắt buộc'),
  password: Yup.string().required('Trường thông tin bắt buộc').min(8, 'Mật khẩu cần trên 8 ký tự'),
})