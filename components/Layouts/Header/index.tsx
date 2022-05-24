import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import IconList, { MenuIcon } from '../../../icons';
import { NAVIGATOR, TYPE_TAB_BAR_OPTION } from '../../../utils/constants';
import ButtonElement from '../../Elements/ButtonElement';
import LinkButton from '../../Elements/LinkButton';
import { Colors } from '../../../utils/types';
import FilterRealEstateBar from '../../Elements/FilterRealEstateBar';
import { useHeader } from '../../hooks/useHeader';

const Header: React.FC = () => {
  const { route } = useRouter();

  const isHome = route === '/';

  const { handleChangeTab, handleFilterOption } = useHeader();

  return (
    <>
      <header className="md:hidden">
        <div className="flex items-center justify-between bg-primary">
          <div className="w-fit p-2">
            <div className="overflow-hidden rounded-sm bg-white">
              <MenuIcon width={32} height={32} />
            </div>
          </div>
          <div className="flex items-center">
            <ButtonElement
              size="sm"
              icon="edit-alt"
              variant="primary"
              className="mr-1"
            >
              Đăng tin
            </ButtonElement>
            <ButtonElement size="sm" icon="user" variant="primary">
              Đăng nhập
            </ButtonElement>
          </div>
        </div>
      </header>
      <header className="hidden shadow-md md:block">
        {isHome && (
          <>
            <div className="absolute w-full">
              <div className="relative z-0 h-[144px]">
                <Image
                  src="/bg-head.jpg"
                  layout="fill"
                  objectFit="fill"
                  alt=""
                />
              </div>
            </div>
            <div className="container relative mx-auto flex h-36 flex-col justify-center text-center">
              <Image
                src="/logo.jpg"
                width={300}
                height={50}
                objectFit="contain"
                alt=""
              />
              <p className="mt-4 text-xl font-bold text-white">
                Mang đến phồn vinh và cuộc sống thịnh vượng
              </p>
              <div className="flex justify-center">
                <div className="flex items-center">
                  <IconList type="facebook" color={Colors.white} />
                  <span className="ml-2 text-base font-medium text-white">
                    G47 Tôn Đức Thắng - P.Tân An - TP.BMT
                  </span>
                </div>
                <div className="ml-16 flex items-center text-lg font-medium text-white">
                  <IconList type="mobile" color={Colors.white} />
                  <span className="ml-2 text-base">02626 27 8888</span>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="container mx-auto flex justify-end bg-white py-1 md:shrink-0">
          <ButtonElement
            size="sm"
            icon="edit-alt"
            variant="primary"
            className="mr-2"
          >
            Đăng tin
          </ButtonElement>
          <ButtonElement size="sm" icon="user" className="mr-2">
            Đăng nhập
          </ButtonElement>
          <ButtonElement size="sm" icon="user">
            Đăng ký
          </ButtonElement>
        </div>
        <div className="bg-primary">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <LinkButton href="/">Logo</LinkButton>
              </div>
              <ul className="menu-header flex text-white">
                {NAVIGATOR.map((item: any) => (
                  <li
                    key={item.path}
                    className={item.path === route ? 'active' : ''}
                  >
                    <LinkButton href={item.path}>{item.name}</LinkButton>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {!isHome && (
        <div className="sticky top-0 z-30 bg-white shadow">
          <FilterRealEstateBar
            option={TYPE_TAB_BAR_OPTION}
            onChange={handleChangeTab}
            onFilter={handleFilterOption}
          />
        </div>
      )}
    </>
  );
};

export default Header;
