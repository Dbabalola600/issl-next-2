import Link from 'next/link';
import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';

//dropdown styling

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'



import { query } from '.keystone/api';
import { Lists } from '.keystone/types';




type Post = {
  id: string;
  title: string;
  slug: string;
};

export const Navbar =()=> {
  
const [active, setActive] = useState(false);

const handleClick = () => {
  setActive(!active);
};

  return (
    <>
      <nav className='flex items-center flex-wrap bg-primaryColour p-3 sticky top-0 z-50 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>

            {/* <svg
              viewBox='0 0 24 24'
              
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg> */}

            <img
              src="/logo.svg"
            />

          </a>
        </Link>

        <button
          className=' inline-flex p-3 hover:primaryColour rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >

          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>




        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${active ? '' : 'hidden'
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-grayColour hover:text-primaryColour '>
                Home
              </a>
            </Link>

            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-grayColour hover:text-primaryColour'>
                Services
              </a>
            </Link>





            <Menu as="div" className="relative inline-block text-center w-full">
              <div>
                <Menu.Button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-grayColour hover:text-primaryColour text-left">
                  Options 2
                  {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2  rounded-md  bg-white ring-1 ring-black ring-opacity-5 focus:outline-none w-full md:w-56">
                  <div className="py-1">


                    <Menu.Item>
                      
                        <Link
                          href="/App_dev"

                        >
                          <a
                           className= ' block px-4 py-2 text-primaryColour hover:bg-primaryColour hover:text-white text-base '
                          >
                            Support
                          </a>

                        </Link>
                     
                    </Menu.Item>

                    <Menu.Item>

                    <Link
                          href="/AboutUs"

                        >
                          <a
                           className= ' block px-4 py-2 text-primaryColour hover:bg-primaryColour hover:text-white text-base '
                          >
                            License 
                          </a>

                        </Link>
                      
                    </Menu.Item>

                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-grayColour hover:text-primaryColour'>
                Solutions
              </a>
            </Link>

            <Link href='/AboutUs'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-grayColour hover:text-primaryColour'>
                About us
              </a>
            </Link>

            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-grayColour hover:text-primaryColour'>
                Contact us
              </a>
            </Link>

           

          </div>
        </div>
      </nav>
    </>
  );

  
}




