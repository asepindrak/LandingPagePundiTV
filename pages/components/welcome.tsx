
import Image from "next/image";
export default function Welcome() {
    return (
        <div className='bg-gradient-to-bl from-yellow via-dark-blue to-black' id="home">
            <div className='flex items-center justify-around w-full h-screen space-x-12 text-white'>
                <div className="hidden lg:block">
                    {/* <img src="/images/hero.png" alt="App Pundi TV" className='mx-auto mt-5 w-72' /> */}
                    <div className="relative h-screen w-72">
                        <Image src="/images/hero.png" alt="App Pundi TV" className='w-56 mx-auto' layout="fill" objectFit="contain" />
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-3xl text-center text-white md:text-6xl font-acme text-shadow'>Welcome to Pundi TV </p>
                    <p className='md:text-xl font-satisfy text-shadow'>Watch youtube earn money, only on Pundi TV</p>
                    <img src="/images/app_pundi.png" alt="App Pundi TV" className='w-32 mx-auto mt-5 md:hidden' />
                </div>
                {/* <div className="hidden md:block">
                    <img src="/images/app_pundi.png" alt="App Pundi TV" className='w-56 mx-auto' layout="fill" objectFit="contain" />
                </div> */}
                <div className="hidden md:block">
                    <div className="relative w-56 h-screen">
                        <Image src="/images/app_pundi.png" alt="App Pundi TV" className='w-56 mx-auto' layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className='w-full'>
                <path
                    fill="#ffff00"
                    fill-opacity="1"
                    d="M0,256L80,234.7C160,213,320,171,480,181.3C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                </path>
            </svg>
        </div>
    );
}