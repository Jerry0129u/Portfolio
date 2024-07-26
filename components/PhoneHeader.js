import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export function PhoneHeader() {
  const [open, setOpen] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  function toggleMenu() {
    setOpen(!open);
  }

  function toggleDarkMode() {
    setDarkModeEnabled(!darkModeEnabled);
    document.documentElement.classList.toggle('dark', !darkModeEnabled);
  }

  return (
  <section className=' dark:bg-black'>
    <section className={`max-w-[1280px] mx-auto ${darkModeEnabled ? 'dark' : ''}`} >
      <div className="pt-4" >
        <div className="h-9 flex justify-between items-center">
          <h1 className='font-sans font-[700] text-[30px] leading-9 dark:text-white'>SS /</h1>
          <div className="hidden gap-6 xl:flex items-center">
            <div className="flex gap-6 font-sans font-[500] text-[16px] text-gray-600 leading-[26px] dark:text-gray-30">
              <Link href="/#about">About</Link>
              <Link href="/#work">Work</Link>
              <Link href="/#test">Testimonials</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            <div className="border-gray-200 border m-1 mt-2"></div>
            <div className="py-[6px] flex items-center">
              <Image
                src="/images/sun-icon.png"
                width={24}
                height={24}
                alt="Sun Icon"
                onClick={() => darkModeEnabled && toggleDarkMode()}
              />
              <Image
                src="/images/moon.png"
                width={28}
                height={28}
                alt="Moon Icon"
                onClick={() => !darkModeEnabled && toggleDarkMode()}
              />
            </div>
            <div className="w-[164px] h-[36px] rounded-xl bg-gray-900  dark:bg-white ">
              <h2 className="text-gray-50 font-[500] text-[16px] font-sans leading-6 flex justify-center py-[6px] px-4 dark:text-gray-800">
                Download CV
              </h2>
            </div>
          </div>

          <div className="xl:hidden" onClick={toggleMenu}>
            <Image
              src="/images/drop-icon.png"
              width={100}
              height={100}
              alt="Menu Icon"
              className="w-9 h-9"
            />
          </div>
          
          <div className={open ? 'block' : 'hidden'}>
            <div className="fixed inset-0 bg-gray-500 opacity-50"></div>
            <div className="fixed top-0 right-0 bottom-0 h-[667px] bg-white shadow-2xl w-[335px] z-20 dark:bg-gray-800">
              <div className="flex justify-between px-4 pb-5 pt-4">
                <div>
                  <Image
                    src="/images/logo.png"
                    width={77}
                    height={32}
                    alt="Company Logo"
                  />
                </div>
                <div onClick={toggleMenu}>
                  <Image
                    src="/images/close-button.png"
                    width={24}
                    height={24}
                    alt="Close Menu"
                  />
                </div>
              </div>
              <div className="border-slate-900/10 w-80 border"></div>
              <div className="flex flex-col gap-4 py-4 pl-4 font-sans font-[500] text-[16px] text-gray-600 leading-[26px] dark:text-gray-300">
                <Link href="/#about" onClick={toggleMenu}>About</Link>
                <Link href="/#work" onClick={toggleMenu}>Work</Link>
                <Link href="/#test" onClick={toggleMenu}>Testimonials</Link>
                <Link href="/#contact" onClick={toggleMenu}>Contact</Link>
              </div>
              <div className="border-slate-900/10 w-80 border"></div>
              <div className="flex justify-between px-3 my-5">
                <div className="font-sans font-[400] text-[16px] leading-6 text-gray-600 dark:text-gray-300">Switch Theme</div>
                <div onClick={toggleDarkMode}>
                  <Image
                    src="/images/sun-icon.png"
                    width={24}
                    height={24}
                    alt="Toggle Dark Mode"
                    className={darkModeEnabled ? 'hidden' : 'block'}
                  />
                  <Image
                    src="/images/moon.png"
                    width={24}
                    height={24}
                    alt="Toggle Light Mode"
                    className={!darkModeEnabled ? 'hidden' : 'block'}
                  />
                </div>
              </div>
              <div className="w-[288px] h-[36px] rounded-xl bg-gray-900 m-4">
                <h2 className="text-gray-50 font-[500] text-[16px] font-sans leading-6 flex justify-center py-[6px]">
                  Download CV
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  );
}
