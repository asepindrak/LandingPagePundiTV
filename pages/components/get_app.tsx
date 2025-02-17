export default function GetApp() {
    return (
        <div className="px-5 pt-20 transition ease-in-out md:px-10 lg:flex md:h-screen bg-dark-blue" id="getApp">
            <div className="flex items-center justify-center text-white lg:w-1/3">
                <div className="text-center text-white ">
                    <p className="text-4xl md:text-5xl font-acme ">Get Pundi TV App</p>
                    <p className="text-base md:text-2xl font-acme ">
                        Dont miss Pundi TV App on your mobile or tablets
                    </p>
                    <p className="mt-5 text-2xl font-medium text-justify font-caveat lg:text-3xl indent-20 lg:mt-10">
                        Download the pundi application and make your channel more viewers and subscribers, dont forget to watch videos and earn money.
                    </p>
                    <div className="flex justify-center mt-5 space-x-5 md:mt-10">
                        <button className="transition ease-in-out bg-black shadow-2xl rounded-xl hover:scale-110 ">
                            <img src="/images/playstore.png" alt="" className="md:h-12 lg:h-16" />
                        </button>
                        <button className="transition ease-in-out bg-black shadow-2xl rounded-xl hover:scale-110 ">
                            <img src="/images/appStore.png" alt="" className="md:h-12 lg:h-16" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="items-center justify-center mt-10 space-y-5 md:space-y-0 lg:mt-0 md:flex md:space-x-5 lg:w-2/3">
                <img src="/images/pundi1.jpeg" alt="" className="w-64 mx-auto transition ease-in-out shadow-2xl lg:w-96 rounded-2xl hover:scale-105 md:mx-0" />
                <img src="/images/pundi2.jpeg" alt="" className="w-64 mx-auto transition ease-in-out shadow-2xl lg:w-96 rounded-2xl hover:scale-105 md:mx-0" />
            </div>
        </div>
    );
}
