import React from 'react';
import { FormikProvider, useFormik, Form } from 'formik';
import { PostType } from '@/utils/types';
import { InputForm } from '@/components/Elements/InputForm';
import { POST_TYPE } from '@/utils/constants';

const Create: React.FC = () => {
  const formik = useFormik<PostType>({
    initialValues: {
      title: '',
      content: '',
      postType: 1,
      previewImage: '/default-product-image.png',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { values, handleChange, handleSubmit } = formik;

  console.log(values);

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={handleSubmit}>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-5">
            <div>
              <InputForm
                id="title"
                label="TIÊU ĐỀ BÀI VIẾT"
                value={values?.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <InputForm
                id="content"
                label="NỘI DUNG"
                value={values?.content}
                onChange={handleChange}
                type="textarea"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <InputForm
                id="postType"
                label="LOẠI TIN"
                value={values?.postType}
                onChange={handleChange}
                type="select"
                options={POST_TYPE}
              />
            </div>
            <div>
              <InputForm
                id="previewImage"
                label="ẢNH"
                value={values?.postType}
                onChange={handleChange}
                type="upload"
              />
            </div>
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default Create;
