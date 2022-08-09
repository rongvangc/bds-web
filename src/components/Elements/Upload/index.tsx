import { imageMimeType } from '@/utils/constants';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadProps {}

const Upload: React.FC<UploadProps> = () => {
  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    const file = e?.currentTarget?.files?.[0];
    if (!file?.type?.match(imageMimeType)) {
      alert('Image mime type is not valid');
      return;
    } else if (file) {
      if (file) {
        fileReader.onload = (e: any) => {
          const { result } = e.currentTarget;
          if (result) {
            setFileDataURL(result);
          }
        };
        fileReader.readAsDataURL(file);
      }
      setFile(file);
    } else {
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }
  };

  return (
    <>
      <form>
        <p>
          <label htmlFor="image"> Browse images </label>
          <input
            type="file"
            id="image"
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />
        </p>
      </form>
      {fileDataURL ? (
        <p className="img-preview-wrapper">
          {<img src={fileDataURL} alt="preview" />}
        </p>
      ) : null}
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p className="border-2 border-dashed border-primary p-4">
          Drag & drop some files here, or click to select files
        </p>
      </div>
    </>
  );
};

export default Upload;
