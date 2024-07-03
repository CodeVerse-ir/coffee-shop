import diamond from '../public/utils/image/club/diamond.png';
import Image from 'next/image';


export default function coffeeClub() {
    return (
        <>
            <section className="coffee-club mb-8 md:mb-20">
                <div className="container">

                    <div
                        className="flex flex-col md:flex-row px-3 py-8 my-8 lg:px-11 md:py-6 md:my-20 gap-y-9 md:gap-y-0 xl:gap-x-24 md:items-center md:justify-between bg-gradient-to-r from-emerald-500 to-emerald-600 child:text-white rounded-2xl">
                        <div className="flex items-center gap-x-3 md:gap-x-6">
                            <Image
                                className='w-[87px] h-[87px] md:w-[110px] md:h-[110px]'
                                src={diamond}
                                alt="Coffee Club"
                                loading="lazy"
                            />
                            <div>
                                <h4 className="font-MorabbaBold text-2xl md:text-4xl lg:text-5xl mb-2">
                                    کافی کلاب
                                </h4>
                                <p className="font-MorabbaLight text-lg md:text-xl lg:text-2xl">
                                    میدونستی میتونی با امتیاز هات قهوه بگیری ؟
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-evenly gap-x-2 xl:gap-x-14">
                            <div className="flex items-center justify-between gap-x-2 md:gap-x-5">
                                <div
                                    className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
                                        <use href="#discovery"></use>
                                    </svg>
                                    <span className="text-xs md:text-sm">
                                        چرخ و پخت
                                    </span>
                                </div>
                                <div
                                    className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
                                        <use href="#activity"></use>
                                    </svg>
                                    <span className="text-xs md:text-sm">
                                        ماموریت ها
                                    </span>
                                </div>
                                <div
                                    className="w-[72px] h-[72px] md:w-[98px] md:h-[98px] text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                                    <svg className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto">
                                        <use href="#ticket-star"></use>
                                    </svg>
                                    <span className="text-xs md:text-sm">
                                        جایزه ها
                                    </span>
                                </div>
                            </div>

                            {/* <!-- score & prize --> */}
                            <div className="flex flex-col items-center justify-center max-w-24 md:max-w-28 gap-y-1 md:gap-y-2">
                                <h4 className="font-DanaBold text-2xl md:text-3xl/10">
                                    542
                                </h4>
                                <p className="font-DanaMedium text-xs md:text-sm">
                                    امتیـــــــاز شما
                                </p>
                                {/* <!-- prize  --> */}
                                <a href="#"
                                    className="w-[5.625rem] p-1 rounded-[6.25rem] md:w-28 md:p-1.5 bg-gradient-to-r from-orange-200 to-orange-300 flex items-center justify-center mx-auto">
                                    <span className="font-DanaMedium text-xs md:text-sm">
                                        دریافت جایزه
                                    </span>
                                    <svg className="w-4 h-4 md:w-5 md:h-5">
                                        <use href="#chevron-left"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
