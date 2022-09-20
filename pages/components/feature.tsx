export default function Feature() {
    return (
        <div className="lg:h-screen bg-gradient-to-b from-yellow to-dark-blue px-10 flex items-center lg:py-0 md:py-40 pt-20 md:pt-0" id="feature">
            <div className="w-full">
                <p className="text-4xl text-center md:text-5xl font-acme">Feature</p>
                <div className="grid grid-cols-1 gap-8 mt-16 text-2xl text-center md:gap-0 md:grid-cols-4 font-acme">
                    <div className="space-y-5 transition ease-in-out hover:scale-110">
                        <img src="/images/icon_wallet.png" alt="" className="h-32 mx-auto md:h-24 lg:h-32" />
                        <p>Wallet</p>
                    </div>
                    <div className="space-y-5 transition ease-in-out hover:scale-110">
                        <img src="/images/icon_campaign.png " alt="" className="h-32 mx-auto md:h-24 lg:h-32" />
                        <p>Campaign</p>
                    </div>
                    <div className="space-y-5 transition ease-in-out hover:scale-110">
                        <img src="/images/icon_store.png" alt="" className="h-32 mx-auto md:h-24 lg:h-32" />
                        <p>Store</p>
                    </div>
                    <div className="space-y-5 transition ease-in-out hover:scale-110">
                        <img src="/images/icon_ads.png" alt="" className="h-32 mx-auto md:h-24 lg:h-32" />
                        <p className="">Ads</p>
                    </div>

                </div>
            </div>
        </div>
    );
}