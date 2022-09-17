/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { imageMimeType } from '@/utils/constants';
import Image from 'next/image';
import { forEach, reduce } from 'lodash';

interface UploadProps {
  currentImage?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
}

const Upload: React.FC<UploadProps> = ({ currentImage }) => {
  const [files, setFiles] = useState<FileList>();
  const [fileDataURL, setFileDataURL] = useState<string | ArrayBuffer>();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.currentTarget?.files;

    if (files) {
      // const data = Array.from(files).reduce((acc: any, file: File) => {
      //   const fileReader = new FileReader();
      //   if (!file?.type?.match(imageMimeType)) {
      //     alert('Image mime type is not valid');
      //     return acc;
      //   }

      //   fileReader.onload = () => {
      //     const { result } = fileReader;

      //     if (result) {
      //       acc = [...acc, result];
      //     }
      //   };

      //   fileReader.readAsDataURL(file);
      //   return acc;
      // }, []);

      console.log(Array.from(files));

      const data = Array.from(files);
      const data2 = data.map((file: File) => {
        const fileReader = new FileReader();
        if (!file?.type?.match(imageMimeType)) {
          alert('Image mime type is not valid');
          return;
        }

        let data;

        fileReader.onload = () => {
          const { result } = fileReader;

          if (result) {
            data = result;
          }
        };

        fileReader.readAsDataURL(file);

        return data;
      });

      console.log(data2);
    } else {
      const fileReader = new FileReader();
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }
  };

  return (
    <>
      <form>
        <p>
          <label htmlFor="image">Browse images</label>
          <input
            type="file"
            id="image"
            multiple
            accept=".png, .jpg, .jpeg"
            onChange={changeHandler}
          />
        </p>
      </form>
      {fileDataURL ? (
        <p className="img-preview-wrapper relative h-60">
          <Image
            src={fileDataURL}
            layout="fill"
            objectFit="cover"
            alt="preview"
          />
        </p>
      ) : null}

      {!fileDataURL && currentImage && (
        <div className="relative h-60">
          <Image
            src={currentImage}
            layout="fill"
            objectFit="cover"
            alt="preview"
          />
        </div>
      )}
    </>
  );
};

export default Upload;
