import Image from 'next/image';
import React from 'react';
import IconList from '../../../icons';
import { Colors } from '../../../utils/types';
import LinkButton from '../../Elements/LinkButton';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-10 gap-12">
          <div className="col-span-2">
            <Image
              src="/logo.jpg"
              width={600}
              height={120}
              objectFit="contain"
              alt=""
            />
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-xl font-bold uppercase">Mua & bán</h3>
            <ul>
              <li className="mb-2">
                <LinkButton href="/">Trang chủ</LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/">Nhà đất bán</LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/">Nhà đất cho thuê</LinkButton>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-4 text-xl font-bold uppercase">Thương hiệu</h3>
            <ul>
              <li className="mb-2">
                <LinkButton href="/">Giới thiệu</LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/">Hỗ trợ</LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/">Tin tức</LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/">TOP NV môi giới</LinkButton>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <h3 className="mb-4 text-xl font-bold uppercase">
              Công ty cp đtpt verado
            </h3>
            <ul>
              <li className="mb-2">
                <LinkButton href="/" className="flex items-center">
                  <IconList type="mobile" color={Colors.white} />
                  <span className="ml-2">02626 27 8888</span>
                </LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/" className="flex items-center">
                  <IconList type="envelope" color={Colors.white} />
                  <span className="ml-2">veradogroup@gmail.com</span>
                </LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/" className="flex items-center">
                  <IconList type="facebook" color={Colors.white} />
                  <span className="ml-2">Bất động sản VERADO Daklak</span>
                </LinkButton>
              </li>
              <li className="mb-2">
                <LinkButton href="/" className="flex items-center">
                  <IconList type="map-location" color={Colors.white} />
                  <span className="ml-2">
                    G47 Tôn Đức Thắng - P.Tân An - TP.BMT
                  </span>
                </LinkButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
