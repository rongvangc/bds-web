import { useRouter } from 'next/router';
import React from 'react';
import { MenuIcon } from '../../../icons';
import { NAVIGATOR } from '../../../utils/constants';
import ButtonElement from '../../Elements/ButtonElement';
import LinkButton from '../../Elements/LinkButton';

const Header: React.FC = () => {
  const { route } = useRouter();

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
    </>
  );
};

export default Header;
