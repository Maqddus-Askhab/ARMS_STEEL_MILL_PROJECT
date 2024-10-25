'use client';
import Image from 'next/image';
import image from '../../public/pictures/logo.jpg';
import Link from 'next/link';
import { FC } from 'react';
import { motion } from 'framer-motion'; 


const Footer: FC = () => {

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-16 lg:px-32">

                {/* Company Info */}
                <div className="flex flex-col md:items-start md:w-1/3 mb-6 md:mb-0">
                    <div className="flex items-center space-x-2 mb-4">
                        <Image
                            src={image}
                            alt="Company Logo"
                            width={48}
                            height={48}
                            className="w-12"
                        />
                        <h2 className="text-xl font-bold">Steel Mill</h2>
                    </div>
                    <p className="text-sm text-left">
                        Suspendisse mollis porttitor nulla, sed tincidunt enim suscipit eu.
                        In hac habitasse platea dictumst...
                    </p>
                    {/* <button className="bg-orange-500 text-white px-4 py-2 mt-4 rounded-full 
                    hover:bg-[#3b5065]">
                        READ MORE
                    </button> */}
                    <div>
                        <Link href="/pages/contact" passHref>
                            <motion.button
                                className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold mt-7"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Our Services */}
                <div className="flex flex-col md:items-start md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4 text-left">Our Services</h3>
                    <ul className="space-y-2 text-left">
                        <li>
                            <Link href="#" className="hover:underline">
                                Oil & Gas Productions
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Automobile Service
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Chemical Industry
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Material Service
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Mechanical Industry
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline">
                                Welding Services
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="flex flex-col md:items-start md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4 text-left">Contact Us</h3>
                    <address className="not-italic space-y-4 text-left">
                        <p>
                            Ipsum dolor 1234 sit St NE<br />
                            12th Atlanta, Georgia 123
                        </p>
                        <p>
                            📞 (770) 123 4567
                        </p>
                        <p>
                            ✉️ info@industrial.com
                        </p>
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
