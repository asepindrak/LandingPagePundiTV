import Image from "next/image";
import Feature from './feature';

export default function Navbar() {
    return (
        <nav className="fixed flex flex-wrap items-center justify-between w-full py-2 bg-black bg-opacity-75 md:bg-opacity-50 md:px-10">
            <div className="flex items-center justify-between w-full px-6 text-white container-fluid font-acme h-11">
                <a href="" className='font-acme'>
                    <Image src="/images/Logo Pundi.png" alt="Logo Pundi" width={50} height={50} />
                </a>
                <div className='hidden space-x-4 md:block'>
                    <a href="#home" className='transition hover:scale-125 hover:text-yellow'>Home</a>
                    <a href="#about" className='transition hover:scale-125 hover:text-yellow'>About Us</a>
                    <a href="#feature" className='transition hover:scale-125 hover:text-yellow'>Feature</a>
                    <a href="#getApp" className='transition hover:scale-125 hover:text-yellow'>get App</a>
                    <a href="#ourTeam" className='transition hover:scale-125 hover:text-yellow'>Our Team</a>
                    <a href="#contact" className='transition hover:scale-125 hover:text-yellow'>Contact Us</a>
                </div>

                <button className="md:hidden inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="w-full pt-3 md:hidden collapse" id="collapseExample">
                <div className="h-1 mx-5 bg-white rounded-full "></div>
                <div className="block p-6 space-y-3 text-white rounded-lg shadow-lg font-acme">
                    <div className="group">
                        <a href="#home" className='block transition hover:translate-x-3 group-hover:text-yellow'>Home</a>
                    </div>
                    <div className="group">
                        <a href="#about" className='block transition hover:translate-x-3 group-hover:text-yellow'>About Us</a>
                    </div>
                    <div className="group">
                        <a href="#feature" className='block transition hover:translate-x-3 group-hover:text-yellow'>Feature</a>
                    </div>
                    <div className="group">
                        <a href="#getApp" className='block transition hover:translate-x-3 group-hover:text-yellow'>Get App</a>
                    </div>
                    <div className="group">
                        <a href="#ourTeam" className='block transition hover:translate-x-3 group-hover:text-yellow'>Our Team</a>
                    </div>
                    <div className="group">
                        <a href="#contact" className='block transition hover:translate-x-3 hover:text-yellow'>Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}