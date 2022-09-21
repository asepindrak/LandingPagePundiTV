import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <div className='w-full h-screen pt-5 transition bg-yellow md:pt-20 md:-mt-3 ' id="about">
                <div className="px-5 mt-16 md:flex md:mt-5 md:px-11">
                    <div className="items-center hidden h-full md:w-1/2 md:flex">
                        {/* <img src="/images/splash.jpeg" alt="" className="mx-auto shadow-2xl w-72 rounded-2xl " /> */}
                        <div className="relative h-96 w-72 rounded-2xl">
                            <Image src="/images/splash.jpeg" alt="App Pundi TV" className='w-56 mx-auto rounded-2xl' layout="fill" objectFit="cover" />
                        </div>
                    </div>
                    <div className="flex items-center md:w-1/2">
                        <div className="lg:pr-10">
                            <p className="mb-5 text-5xl text-center font-acme ">About US</p>
                            <p className="text-2xl font-medium text-justify font-caveat lg:text-3xl indent-20">
                                Pundi TV is an application created for youtubers to increase the number of videos
                                viewer or subscriber on their channel.
                                Not only that, Pundi TV is also made so that viewers are comfortable while watching YouTube, because Pundi TV provides a system that can make money just by watching videos.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center h-full mt-5 md:hidden">
                        <img src="/images/splash.jpeg" alt="" className="w-48 mx-auto shadow-2xl rounded-2xl " />
                    </div>
                </div>
            </div>
        </>
    );
}