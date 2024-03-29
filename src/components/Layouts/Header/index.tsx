import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import IconList, { MenuIcon } from '../../../icons';

import Button from '../../Elements/Button';
import LinkButton from '../../Elements/LinkButton';
import FilterRealEstateBar from '../../Elements/FilterRealEstateBar';
import { useCommonStore } from '@/stores';
import { useFilterHome } from '../hooks/useFilterHome';
import {
  NAVIGATOR,
  SALE_REAL_ESTATE_OPTION,
  PJ_REAL_ESTATE_OPTION,
  TYPE_TAB_BAR_OPTION,
  RENT_REAL_ESTATE_OPTION,
} from '@/utils/constants';
import { Colors, NavigatorMenu, OptionData } from '@/utils/types';

const Header: React.FC = () => {
  const { route, asPath, push } = useRouter();
  const { onChangeSearchValue, onChangeFilterOption, onChangeTabValue } =
    useCommonStore();
  const { provinces, districts, streets, wards } = useFilterHome();

  const isHome = route === '/';
  const isShowHeaderBar = [
    ...SALE_REAL_ESTATE_OPTION,
    ...RENT_REAL_ESTATE_OPTION,
    ...PJ_REAL_ESTATE_OPTION,
  ].some((item) => `/${item.value}` === asPath);

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
            <Button
              size="sm"
              icon="edit-alt"
              variant="primary"
              className="mr-1"
            >
              Đăng tin
            </Button>
            <Button size="sm" icon="user" variant="primary">
              Đăng nhập
            </Button>
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
          <Button
            size="sm"
            icon="edit-alt"
            variant="primary"
            className="mr-2"
            onClick={() => push('/dashboard')}
          >
            Đăng tin
          </Button>
          <Button size="sm" icon="user" onClick={() => push('/dang-nhap')}>
            Đăng nhập
          </Button>
        </div>
        <div className="bg-primary">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <LinkButton href="/" className="flex items-center">
                  <Image
                    src="/logo-icon.png"
                    width={30}
                    height={30}
                    alt="Logo"
                  />
                </LinkButton>
              </div>
              <ul className="menu-header relative z-30 flex text-white">
                {NAVIGATOR.map((item: NavigatorMenu) => (
                  <li
                    key={item.path}
                    className={item.path === asPath ? 'active relative' : ''}
                  >
                    <LinkButton className="z-30" href={item.path}>
                      {item.name}
                    </LinkButton>

                    {item.options && (
                      <div className="child-menu absolute top-0">
                        <ul className="z-20 mt-10 flex w-max flex-col rounded-md bg-white text-black shadow-md">
                          {item?.options?.map((item: OptionData, i: number) => (
                            <li
                              key={i}
                              className={
                                `/${item.value}` === asPath ? 'active' : ''
                              }
                            >
                              <LinkButton href={`/${item.value}`}>
                                {item.description}
                              </LinkButton>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {isShowHeaderBar && (
        <div className="bg-white shadow">
          <FilterRealEstateBar
            districts={districts}
            streets={streets}
            wards={wards}
            provinces={provinces}
            option={TYPE_TAB_BAR_OPTION}
            onSearch={onChangeSearchValue}
            onChange={onChangeTabValue}
            onFilter={onChangeFilterOption}
          />
        </div>
      )}
    </>
  );
};

export default Header;
