import Head from "next/head";
import Link from "next/link";



import Footer from "./Footer";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { useState } from 'react';



function DefaultLayout({ children }: { children?: JSX.Element }) {

 
    return (
        <div className="w-full gap-y-10 ">


            <div className="bg-primaryColour w-full overscroll-x-auto  ">
                
             
                <div className="bg-white w-full">
                    <main>

                        <Head>
                            <title>ISSL</title>

                            <link rel="icon" href="/logo_2.ico" />
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                          
                        </Head>


                        {children}

                        <div className="pt-5">
                            <Footer />
                        </div>
                    </main>

                </div>



            </div>



        </div>
    )
}

export default DefaultLayout;





