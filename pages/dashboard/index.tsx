import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import IconList from 'icons';
import { Colors } from 'utils/types';

const Dashboard: NextPage = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-12">
        <div className="col-span-1 h-screen shadow-md">
          <div className="flex h-full flex-col justify-between p-4">
            <div className="h-full">
              <div className="flex justify-center">
                <Image
                  src="/logo-color.png"
                  width={140}
                  height={40}
                  objectFit="contain"
                  alt=""
                />
              </div>

              <div className="relative my-4 mx-8 flex justify-center rounded-full bg-lightGray">
                <Image
                  src="/default-avatar.png"
                  width={200}
                  height={200}
                  alt=""
                />
                <div
                  className="absolute bottom-0 right-6 cursor-pointer rounded-full bg-primary p-1"
                  onClick={() => {}}
                >
                  <IconList type="edit-alt" size="sm" color={Colors.white} />
                </div>
              </div>

              <div className="menu">
                <h3 className="mb-2 border-b border-lightGray font-bold">
                  Admin Role
                </h3>
                <ul>
                  <li className="mb-1 flex cursor-pointer items-center rounded-md py-1 px-2">
                    <IconList type="edit" />
                    <a className="ml-2 font-medium">Tin tức</a>
                  </li>
                  <li className="mb-1 flex cursor-pointer items-center rounded-md py-1 px-2">
                    <IconList type="document" />
                    <a className="ml-2 font-medium">Dự án</a>
                  </li>
                  <li className="mb-1 flex cursor-pointer items-center rounded-md py-1 px-2">
                    <IconList type="user-plus" />
                    <a className="ml-2 font-medium">Quản lý người dùng</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <ul>
                <li className="flex cursor-pointer items-center rounded-md bg-lightGray py-1 px-2">
                  <IconList type="logout" size="md" />
                  <a className="ml-2 text-lg font-semibold">Đăng xuất</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-3">123</div>
      </div>
    </div>
  );
};

export default Dashboard;
