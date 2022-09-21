
export default function AboutUs() {
    return (
        <>
            <div className='w-full h-screen pt-5 transition bg-yellow-500 md:pt-20 md:-mt-3 ' id="about">
                <div className="px-5 mt-16 md:flex md:mt-5 md:px-11">
                    <div className="items-center hidden h-full md:w-1/2 md:flex">
                        <img src="/images/splash.jpeg" alt="" className="mx-auto shadow-2xl w-72 rounded-2xl " />
                    </div>
                    <div className="flex items-center md:w-1/2">
                        <div className="lg:pr-10">
                            <p className="mb-5 text-5xl text-center font-acme ">About US</p>
                            <p className="text-2xl font-medium text-justify font-caveat lg:text-3xl indent-20 md:text-shadow">
                                Pundi TV is an application created for youtubers to increase the number of videos
                                viewer or subscriber on their channel.
                                Not only that, Pundi TV is also made so that viewers are comfortable while watching YouTube, because Pundi TV provides a system that can make money just by watching videos.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center h-full mt-5 md:hidden">
                        <img src="/images/splash.jpeg" alt="" className="w-48 mx-auto rounded-2xl transition ease-in-out shadow-2xl hover:scale-105" />
                    </div>
                </div>
            </div>
        </>
    );
}