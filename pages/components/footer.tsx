export default function Footer() {
    return (
        <div className="py-10 bg-gradient-to-b from-dark-blue to-black lg:mt-16" id="contact">
            <div className="justify-center gap-3 px-10 space-x-0 md:flex md:space-x-10 lg:space-x-0">
                <div className="text-center text-white md:1/2 lg:w-2/5">
                    <p className="mb-3 text-xl text-center font-acme">Colabarate</p>
                    <div className="flex items-center justify-around lg:px-3 md:space-x-5 lg:space-x-3">
                        <a href="">
                            <img src="/images/Logo Pundi.png" alt="" className="mx-auto transition ease-in-out w-28 lg:w-36 hover:scale-110" />
                        </a>
                        <a href="">
                            <img src="/images/logo_nusapay.png" alt="" className="h-8 mx-auto transition ease-in-out lg:h-11 hover:scale-110" />
                        </a>
                    </div>
                </div>
                <div className="mt-5 text-white md:1/2 lg:w-1/5 md:mt-0 ">
                    <p className="mb-3 text-xl font-acme md:text-center lg:text-start">Social Media</p>
                    <a href="" className="flex space-x-3 transition ease-in-out lg:h-8 hover:translate-x-3 hover:text-yellow item-center">
                        <img src="/images/icon_ig.png" alt="" className="h-8 " />
                        <p>Pundi TV Official</p>
                    </a>
                </div>
                <div className="mt-5 text-white md:w-1/5 md:mt-0 md:hidden lg:block">
                    <p className="mb-3 text-xl font-acme">Support</p>
                    <div className="group">
                        <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">Stige IT Solution</a>
                    </div>
                    <div className="group">
                        <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">Nusapay</a>
                    </div>
                </div>
                <div className="mt-5 text-white md:w-1/5 md:mt-0 md:hidden lg:block">
                    <p className="mb-3 text-xl font-acme">Contact Us</p>
                    <div className="group">
                        <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">+6285-2222-8585</a>
                    </div>
                    <div className="group">
                        <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">admin@punditv.com</a>
                    </div>
                </div>
            </div>
            <div className="hidden md:block lg:hidden">
                <div className="flex justify-center px-10 mt-10 space-x-10 text-center">
                    <div className="w-1/2 text-white ">
                        <p className="mb-3 text-xl font-acme">Support</p>
                        <div className="group">
                            <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">Stige IT Solution</a>
                        </div>
                        <div className="group">
                            <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">Nusapay</a>
                        </div>
                    </div>
                    <div className="w-1/2 text-white ">
                        <p className="mb-3 text-xl font-acme">Contact Us</p>
                        <div className="group">
                            <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">+6285-2222-8585</a>
                        </div>
                        <div className="group">
                            <a href="" className="block transition ease-in-out hover:text-yellow group-hover:translate-x-3">admin@punditv.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
