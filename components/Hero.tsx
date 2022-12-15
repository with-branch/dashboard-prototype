import React from 'react';

export default function Hero() {
    return (
        <div id="top" className="bg-tertiary dark:bg-onyx">
            <div className="flex flex-col justify-between h-full max-w-xl px-4 mx-auto lg:flex-row md:px-0 lg:px-10 lg:max-w-screen-xl">
                <div className="lg:h-0">
                    <img
                        src="/hero.png"
                        className="to-animate scale-up object-cover lg:block h-84 mx-auto lg:h-0 z-10"
                        alt=""
                    />
                </div>
                <div className="w-full mr-10 pt-4 mb-4 lg:mb-0 lg:pt-10 lg:max-w-lg lg:px-5">
                    <div className="max-w-xl mb-6">
                        <h2 className="to-animate from-left max-w-xl mb-6 text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-8xl lg:leading-none">
                            Machine Learning for every business
                        </h2>
                        <p className="to-animate from-left second max-w-xl mb-4 text-base text-gray-600 md:text-xl">
                            With Branch any business can implement end-to-end Machine Learning in less than two sprints and with only a couple of developers.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <a
                            href="#GetInTouch"
                            className="to-animate from-left third inline-flex items-center justify-center z-10 h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-300 ease-in-out rounded-full shadow-md bg-primary hover:bg-secondary Sfocus:shadow-outline focus:outline-none"
                        >
                            Get on the waitlist
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        src="/hero.png"
                        className="to-animate scale-up object-contain hidden lg:block dark:hidden h-60 mx-auto lg:h-full"
                        alt=""
                    />
                </div>
            </div>
            <div className="lg:-mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FCFCFC" fillOpacity="1" d="M0,288L720,32L1440,160L1440,320L720,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}