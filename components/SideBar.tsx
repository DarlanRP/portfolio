import React from 'react';
import {
  FaSun,
  FaMoon,
  FaGithub,
  FaLinkedin,
  FaSass,
  FaReact,
  FaJs,
  FaCss3,
  FaSalesforce,
} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const pdfCv = './images/cv.pdf';

function Sidebar() {
  const { theme, setTheme } = useTheme();

  const downloadPdfCv = (url: any) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <>
      <Image
        src="/images/meImg.png"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="155px"
        width="155px"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        Darlan Rodrigues
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Developer
      </p>
      {/* Contacts */}
      <div
        className="py-4 mx-5 bg-gray-200 h-fit dark:bg-dark-200 dark:bg-black-500 rounded-2xl"
        style={{
          marginLeft: '-1rem',
          marginRight: '-1rem',
        }}
      >
        <div className="flex justify-center">
          <GoLocation className="mr-2" /> <span>São Paulo, Brasil</span>
        </div>
        <p className="mx-2 my-2 break-words">darlanrodriguesp97@hotmail.com</p>
        <p className="my-2">
          <a
            href="https://wa.me/5511982723002"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            11-982723002{' '}
          </a>{' '}
        </p>

        {/* Socials */}
        <div className="flex w-9/12 mx-auto my-5 justify-evenly text-cyan-light dark:text-cyan-dark md:w-full ">
          <a
            href="https://www.linkedin.com/in/darlanrp/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="w-8 h-8 cursor-pointer " />
          </a>
          <a
            href="https://github.com/DarlanRP"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="w-8 h-8 cursor-pointer" />
          </a>
          <button type="button" onClick={changeTheme}>
            {theme === 'light' ? (
              <FaMoon className="w-8 h-8 cursor-pointer" />
            ) : (
              <FaSun className="w-8 h-8 cursor-pointer" />
            )}
          </button>
        </div>
        <div className="py-4 mx-5">
          <button
            onClick={() => {
              downloadPdfCv(pdfCv);
            }}
            className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-cyan-light to-purple-light dark:from-cyan-dark dark:to-purple-dark focus:outline-none hover:scale-105 "
            type="button"
          >
            Baixar Currículo
          </button>
        </div>
        <div className="flex mx-auto my-5 justify-evenly text-cyan-light dark:text-cyan-dark md:w-full 2xl:my-14">
          <FaJs className="w-8 h-8" />
          <FaReact className="w-8 h-8" />
          <SiNextdotjs className="w-8 h-8" />
          <SiTypescript className="w-8 h-8" />
        </div>
        <div className="flex mx-auto my-5 justify-evenly text-cyan-light dark:text-cyan-dark md:w-full 2xl:my-14">
          <SiTailwindcss className="w-8 h-8" />
          <FaSass className="w-8 h-8" />
          <FaCss3 className="w-8 h-8" />
          <FaSalesforce className="w-8 h-8" />
        </div>
      </div>

      {/* Email Button */}
    </>
  );
}

export default Sidebar;
