import type { NextPage } from 'next';
import React, { lazy, Suspense, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Loading } from '@/components/Elements/Loading';
import IconList from '@/icons';
import { Colors } from '@/utils/types';

const EditComponent = lazy(
  () => import('../../components/Layouts/Section/EditProfileDashboard')
);
const UserComponent = lazy(
  () => import('../../components/Layouts/Section/UserDashboard')
);
const PostComponent = lazy(
  () => import('../../components/Layouts/Section/PostDashboard')
);
const ProjectComponent = lazy(
  () => import('../../components/Layouts/Section/ProjectDashboard')
);
const HomeComponent = lazy(
  () => import('../../components/Layouts/Section/HomeDashboard')
);

type SectionWorking = 'home' | 'edit' | 'user' | 'post' | 'project';

const Dashboard: NextPage = () => {
  const { push } = useRouter();
  const [session, setSession] = useState<SectionWorking>('home');

  const handleChangeSession = (key: SectionWorking) => () => setSession(key);

  const sessionLayout = () => {
    return (
      <div className="w-full rounded-md shadow-md">
        <Suspense fallback={<Loading />}>
          {(() => {
            switch (session) {
              case 'edit':
                return <EditComponent />;
              case 'user':
                return <UserComponent />;
              case 'post':
                return <PostComponent />;
              case 'project':
                return <ProjectComponent />;
              default:
                return <HomeComponent />;
            }
          })()}
        </Suspense>
      </div>
    );
  };

  return (
    <div className="flex">
      <div className="sticky top-0 col-span-2 h-screen shadow-md">
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
                onClick={handleChangeSession('edit')}
              >
                <IconList type="edit-alt" size="sm" color={Colors.white} />
              </div>
            </div>

            <div className="menu">
              <h3 className="mb-2 border-b border-lightGray font-bold">
                Admin Role
              </h3>
              <ul>
                <li
                  className="mb-1 flex cursor-pointer items-center rounded-md py-1 px-2"
                  onClick={handleChangeSession('post')}
                >
                  <IconList type="edit" />
                  <a className="ml-2 font-medium">Tin tức</a>
                </li>
                <li
                  className="mb-1 flex cursor-pointer items-center rounded-md py-1 px-2"
                  onClick={handleChangeSession('project')}
                >
                  <IconList type="document" />
                  <a className="ml-2 font-medium">Dự án</a>
                </li>
                <li
                  className="mb-1 flex cursor-pointer items-center rounded-md py-1 px-2"
                  onClick={handleChangeSession('user')}
                >
                  <IconList type="user-plus" />
                  <a className="ml-2 font-medium">Quản lý người dùng</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-auto">
            <ul>
              <li
                className="mb-2 flex cursor-pointer items-center rounded-md py-1 px-2"
                onClick={() => push('/')}
              >
                <IconList type="home" />
                <a className="ml-2 font-semibold">Trang chủ</a>
              </li>
              <li className="flex cursor-pointer items-center rounded-md bg-lightGray py-1 px-2">
                <IconList type="logout" />
                <a className="ml-2 font-semibold">Đăng xuất</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1 p-4">{sessionLayout()}</div>
    </div>
  );
};

export default Dashboard;
