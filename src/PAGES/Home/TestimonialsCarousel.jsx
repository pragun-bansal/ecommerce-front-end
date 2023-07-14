// import React from 'react'
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const TestimonialsCarousel = () => {
  return (
    <div className="mt-[10vh]">
        <h1 className='text-center text-[24px] md:text-[32px] font-bold mb-[30px]'>Let Our Customers Speak For Us</h1>
        <div className="container mx-auto" >
            <div className="flex items-center justify-center w-full h-full py-12 md:py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={10} visibleSlides={3} step={1} infinite={true} interval={3000} isPlaying={true} dragEnabled={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-300">
                                    <Slide index={0}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={11} visibleSlides={2} step={1} infinite={true} interval={3000} isPlaying={true} touchEnabled={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true} interval={3000} isPlaying={true} touchEnabled={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div>
                        <div className="group w-full bg-white relative flex flex-col items-center hover:bg-indigo-700 cursor-pointer shadow-md md:p-12 p-6">
                            <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                <svg width={26} height={27} viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                        <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24.5767" height={27} fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="xl:w-80 text-base leading-normal text-center mt-4">When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone</p>
                            </div>
                            <div className="text-white group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                                <svg width={34} height={28} viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd)">
                                        <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feMorphology radius={1} operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                            <feOffset dy={4} />
                                            <feGaussianBlur stdDeviation={3} />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy={2} />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center mt-10">
                            <img src="https://i.ibb.co/ZgF5Zzz/avatar-1.png" alt="profile pictre" className=" mx-auto !w-[100px] !h-[100px]" />
                            <p className="text-base font-semibold leading-4 my-2 text-gray-800">Tom Koch</p>
                            <p className="text-base leading-4 text-center text-gray-600">Developer</p>
                        </div>
                    </div>
                                    </Slide>
                                    <Slide index={3}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="texlg:t-xl le leading-4 text-basealg:ding-tight text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/DWrGxX6/carosel-2.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src="https://i.ibb.co/rFsGfr5/carosel-4.png" alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>

    </div>
  )
}

export default TestimonialsCarousel