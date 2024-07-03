export default function footer() {
    return (
        <>
            <footer className="relative min-h-96 px-5 py-10 m:px-10 md:px-5 lg:px-16 lg:py-16 text-gray-300 bg-zinc-700">

                {/* <!-- Curve --> */}
                <svg
                    className="absolute top-0 left-0 right-0 hidden md:inline-block mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px] rotate-180">
                    <use href="#curve"></use>
                </svg>

                {/* <!-- Arrow Circle --> */}
                <div
                    className="absolute top-0 left-0 right-0 mx-auto -translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
                    <svg className="w-5 h-5 text-zinc-700 dark:text-white rotate-180">
                        <use href="#chevron-down-mini"></use>
                    </svg>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 xl:gap-y-0 pb-10 border-b border-b-gray-100/20">

                    <div className="flex flex-col md:col-span-2 xl:col-span-1 gap-y-6">

                        <div className="flex -mr-7">
                            <svg className="w-24 h-10 hover:text-orange-300 transition-colors">
                                <use href="#logo"></use>
                            </svg>
                            <svg className="w-24 h-10 hover:text-orange-300 transition-colors">
                                <use href="#logo-type"></use>
                            </svg>
                        </div>

                        <p className="text-base lg:text-lg xl:pl-20">
                            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
                            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
                            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
                            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                        </p>

                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-white font-DanaBold text-xl lg:text-2xl pb-2">
                            دسترسی سریع
                        </h4>
                        <ul
                            className="grid grid-cols-2 mt-6 gap-y-2.5 child-hover:child:text-orange-300 child:child:transition-colors text-sm lg:text-base xs:pl-20 md:pl-0 lg:pl-20">
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    حریم خصوصی
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    پرسش های متداول
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    عودت کالا
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    فرصت
                                    های شغلی
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    شرایط
                                    استفاده
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    ضمانت
                                    نامه ها
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    ثبت
                                    سفارش
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span className="inline-block w-2 h-1 ml-2 bg-gray-200 rounded-3xl"></span>
                                    ارتباط
                                    با ما
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="flex flex-col">
                        <h4 className="text-white font-DanaBold text-base lg:text-2xl pb-8">
                            در تماس باشیم
                        </h4>

                        <div className="flex gap-x-2 mb-4 text-sm lg:text-base">
                            <svg className="w-5 h-5">
                                <use href="#map-pin"></use>
                            </svg>
                            بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                        </div>

                        <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-between mb-4 text-sm lg:text-base">
                            <div className="flex gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#envelope"></use>
                                </svg>
                                info@coffe.com
                            </div>
                            <div className="flex gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#mobile"></use>
                                </svg>
                                <span>
                                    091111111111
                                </span>
                            </div>
                            <div className="flex gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#phone"></use>
                                </svg>
                                <span>
                                    021-64646484
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-start gap-x-2 lg:gap-x-10 text-sm lg:text-base">
                            <div
                                className="flex items-center justify-center text-orange-300 hover:text-zinc-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-orange-300 border border-orange-300 rounded-lg py-1 px-5 gap-x-2 transition-all cursor-pointer">
                                <svg className="w-5 h-5">
                                    <use href="#map-pin"></use>
                                </svg>
                                @golden_coffee
                            </div>
                            <div
                                className="flex items-center justify-center text-orange-300  hover:text-zinc-700 hover:bg-gradient-to-r from-orange-100 to-orange-300 border border-orange-300 rounded-lg py-1 px-5 gap-x-2 transition-all cursor-pointer">
                                <svg className="w-5 h-5">
                                    <use href="#map-pin"></use>
                                </svg>
                                @golden_coffee
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-y-4 xl:gap-y-0 items-center justify-between mt-10 text-sm lg:text-base">
                    <p>
                        تمام حقوق این رابط کاربری متعلق به سبزلرن میباشد و دانشجوی این دوره
                        اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
                    </p>
                    <p>
                        Copyright © 2023 Golden Coffee. All rights reserved.
                    </p>
                </div>

            </footer>
        </>
    )
}
