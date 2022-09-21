export default function OurTeam() {
    return (
        <>

            <div className=" lg:h-screen bg-dark-blue flex items-center" id="ourTeam">
                <div className="w-full">
                    <p className="pt-16 text-3xl text-center text-white font-acme text-shadow">Our Team</p>
                    <div className="grid gap-5 px-10 mt-10 md:grid-cols-3">
                        <div className="group">
                            <div className="max-w-sm px-3 py-5 transition ease-in-out bg-white rounded-lg shadow-lg hover:bg-gradient-to-br from-yellow to-orange group-hover:-translate-y-3 group">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="w-40 h-40 mx-auto rounded-full shadow-xl md:w-48 md:h-48" src="/images/icon_punditv.png" alt="" />
                                </a>
                                <div className="mt-5 text-center font-acme ">
                                    <p className="text-xl lg:text-3xl">Yayan Sofyan</p>
                                    <p className="text-base font-medium text-gray-900 lg:text-xl ">CEO</p>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="max-w-sm px-3 py-5 transition ease-in-out bg-white rounded-lg shadow-lg hover:bg-gradient-to-br from-yellow to-orange group-hover:-translate-y-3">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="w-40 h-40 mx-auto rounded-full shadow-xl md:w-48 md:h-48" src="/images/icon_punditv.png" alt="" />
                                </a>
                                <div className="mt-5 text-center font-acme">
                                    <p className="text-xl lg:text-3xl">Gugum Gumilar</p>
                                    <p className="text-base font-medium text-gray-900 lg:text-xl">CBO</p>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="max-w-sm px-3 py-5 transition ease-in-out bg-white rounded-lg shadow-lg hover:bg-gradient-to-br from-yellow to-orange group-hover:-translate-y-3">
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    <img className="w-40 h-40 mx-auto rounded-full shadow-xl md:w-48 md:h-48" src="/images/icon_punditv.png" alt="" />
                                </a>
                                <div className="mt-5 text-center font-acme">
                                    <p className="text-xl lg:text-3xl">Edi Mulyadi Rosdiman</p>
                                    <p className="text-base font-medium text-gray-900 lg:text-xl">CTO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block h-fit bg-gradient-to-b from-dark-blue to-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" className='w-full'>
                    <path
                        fill="#1F1F39"
                        fill-opacity="1"
                        d="M0,256L80,234.7C160,213,320,171,480,181.3C640,192,800,256,960,261.3C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>
            </div>
        </>
    );
}