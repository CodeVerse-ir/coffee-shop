import product1 from '../public/utils/image/products/p1.png'
import product2 from '../public/utils/image/products/p2.png'
import product3 from '../public/utils/image/products/p3.png'
import product4 from '../public/utils/image/products/p4.png'
import product5 from '../public/utils/image/products/p5.png'
import Image from 'next/image'

export default function mobileHeader({ handleToggleNav, handleToggleCart, openNavbar, openCart, handleDarkMode, openSubmenu, handleSubmenu }) {

    return (
        <div>
            {/* <!-- Header Moble --> */}
            <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700">

                {/* <!-- Nav Icon --> */}
                <div className="nav-icon" onClick={handleToggleNav}>
                    <svg className="w-6 h-6 text-zinc-700 dark:text-white">
                        <use href="#bars-3"></use>
                    </svg>
                </div>

                {/* <!-- Nav --> */}
                <div
                    className={`nav fixed top-0 bottom-0 ${openNavbar ? "right-0" : "-right-64"} w-64 pt-3 px-4 bg-white dark:bg-zinc-700 overflow-y-scroll transition-all z-20`}>

                    {/* <!-- Nav Header --> */}
                    <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
                        <div className="flex gap-x-3.5">

                            <svg className="w-[41px] h-10 text-orange-300">
                                <use href="#logo"></use>
                            </svg>
                            <svg className="w-[100px] h-10 text-orange-300">
                                <use href="#logo-type"></use>
                            </svg>

                        </div>
                        <div className="nav-close-btn" onClick={handleToggleNav}>
                            <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                                <use href="#x-mark"></use>
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center h-10 mb-4 pr-2.5 bg-orange-200/20 text-orange-300 rounded-md">
                        <a href="" className="flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#home"></use>
                            </svg>
                            صفحه اصلی
                        </a>
                    </div>

                    {/* <!-- Nav Body --> */}
                    <ul className="child:pr-2.5 space-y-6 text-zinc-700 dark:text-white">

                        {/* <!-- Has Sub --> */}
                        <li>
                            <div className={`flex items-center justify-between ${openSubmenu ? 'text-orange-300' : ''}`}>
                                <a className="flex items-center gap-x-2" href="">
                                    <svg className="w-5 h-5">
                                        <use href="#shopping-bag"></use>
                                    </svg>
                                    فروشگاه
                                </a>
                                <span className={`submenu-open-btn transition-all ${openSubmenu ? 'rotate-180' : ''}`} onClick={handleSubmenu}>
                                    <svg className="w-4 h-4 rotate-180">
                                        <use href="#chevron-down-mini"></use>
                                    </svg>
                                </span>
                            </div>

                            {/* <!-- Submenu --> */}
                            <div className={`submenu child:justify-start ${openSubmenu ? 'submenu--open' : ''}`}>
                                <a href="">
                                    قهوه ویژه
                                </a>
                                <a href="" className="submenu__item--active">
                                    قهوه ویژه در سطح جهانی
                                </a>
                                <a href="">
                                    قهوه درجه یک
                                </a>
                                <a href="">
                                    ترکیبات تجاری
                                </a>
                                <a href="">
                                    کپسول قهوه
                                </a>
                                <a href="">
                                    قهوه زینو برزیلی
                                </a>
                            </div>

                        </li>
                        <li>
                            <a href="" className="flex items-center gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#chat-bubble-left-ellipsis"></use>
                                </svg>
                                دیکشنری
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#briefcase"></use>
                                </svg>
                                بلاگ
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#document-text"></use>
                                </svg>
                                درباره ما
                            </a>
                        </li>
                        <li>
                            <a href="" className="flex items-center gap-x-2">
                                <svg className="w-5 h-5">
                                    <use href="#phone-arrow-up-right"></use>
                                </svg>
                                تماس با ما
                            </a>
                        </li>
                    </ul>

                    {/* <!-- Nav Footer --> */}
                    <div
                        className="flex flex-col items-start gap-y-6 py-8 pr-2.5 mt-8 text-orange-300 border-t border-t-gray-100 dark:border-t-white/10">

                        <a href="" className="inline-flex items-center gap-x-2.5">
                            <svg className="w-5 h-5 rotate-180 text-orange-300">
                                <use href="#arrow-left-on-rectangle"></use>
                            </svg>
                            ورود | ثبت نام
                        </a>

                        <div className="inline-block toggle-theme select-none" onClick={handleDarkMode}>
                            <div className="inline-flex items-center gap-x-2.5 dark:hidden">
                                <svg className="w-5 h-5">
                                    <use href="#moon"></use>
                                </svg>
                                <span>تم تیره</span>
                            </div>
                            <div className="hidden dark:inline-flex items-center gap-x-2.5">
                                <svg className="w-5 h-5">
                                    <use href="#sun"></use>
                                </svg>
                                <span>تم روشن</span>
                            </div>
                        </div>

                        <a href="" className="inline-flex items-center gap-x-2.5">
                            <svg className="w-5 h-5 text-orange-300">
                                <use href="#shopping-cart"></use>
                            </svg>
                            سبد خرید
                        </a>

                    </div>

                </div>

                {/* <!-- Logo Type --> */}
                <div>
                    <svg className="w-[100px] h-10 text-orange-300">
                        <use href="#logo-type"></use>
                    </svg>
                </div>

                {/* <!-- Cart Icon --> */}
                <div className="cart-icon" onClick={handleToggleCart}>
                    <svg className="w-6 h-6 text-zinc-700 dark:text-white">
                        <use href="#shopping-cart"></use>
                    </svg>
                </div>

                {/* <!-- Cart --> */}
                <div
                    className={`cart fixed flex flex-col top-0 bottom-0 ${openCart ? "left-0" : "-left-64"} w-64 pt-5 px-4 bg-white dark:bg-zinc-700 overflow-y-scroll transition-all z-20`}>

                    {/* <!-- Cart Header --> */}
                    <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10">

                        <div className="cart-close-btn" onClick={handleToggleCart}>
                            <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                                <use href="#x-mark"></use>
                            </svg>
                        </div>

                        <span className="text-zinc-700 dark:text-white font-DanaMedium">
                            سبد خرید
                        </span>

                    </div>

                    {/* <!-- Cart Body --> */}
                    <div className="child:pb-5 child:mb-5">

                        <div className="flex items-center gap-x-1 border-b border-b-gray-100 dark:border-b-white/10 ">
                            <Image
                                className='w-[90px] h-[90px]'
                                src={product1}
                                alt="Product 1"
                            />
                            <div className="flex flex-col justify-between gap-y-4">
                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                </h4>
                                <div className="flex flex-col items-start gap-y-4">
                                    <div
                                        className="flex items-center justify-between px-1 w-16 h-8 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                        <svg className="w-4 h-4 cursor-pointer flex">
                                            <use href="#plus-mini"></use>
                                        </svg>
                                        <span className="mt-1 font-DanaBold text-sm">3</span>
                                        <svg className="w-4 h-4 cursor-pointer">
                                            <use href="#minus-mini"></use>
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <span
                                            className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter">
                                            21.500 تومان تخفیف
                                            <svg className="w-4 h-4">
                                                <use href="#discountLogo"></use>
                                            </svg>
                                        </span>
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                            297,000
                                            <span className="font-Dana text-xs">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-1 border-b border-b-gray-100 dark:border-b-white/10 ">
                            <Image
                                className='w-[90px] h-[90px]'
                                src={product2}
                                alt="Product 2"
                            />
                            <div className="flex flex-col justify-between gap-y-4">
                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                </h4>
                                <div className="flex flex-col items-start gap-y-4">
                                    <div
                                        className="flex items-center justify-between px-1 w-16 h-8 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                        <svg className="w-4 h-4 cursor-pointer flex">
                                            <use href="#plus-mini"></use>
                                        </svg>
                                        <span className="mt-1 font-DanaBold text-sm">3</span>
                                        <svg className="w-4 h-4 cursor-pointer">
                                            <use href="#minus-mini"></use>
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <span
                                            className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter">
                                            21.500 تومان تخفیف
                                            <svg className="w-4 h-4">
                                                <use href="#discountLogo"></use>
                                            </svg>
                                        </span>
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                            297,000
                                            <span className="font-Dana text-xs">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-1 border-b border-b-gray-100 dark:border-b-white/10 ">
                            <Image
                                className='w-[90px] h-[90px]'
                                src={product3}
                                alt="Product 3"
                            />
                            <div className="flex flex-col justify-between gap-y-4">
                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                </h4>
                                <div className="flex flex-col items-start gap-y-4">
                                    <div
                                        className="flex items-center justify-between px-1 w-16 h-8 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                        <svg className="w-4 h-4 cursor-pointer flex">
                                            <use href="#plus-mini"></use>
                                        </svg>
                                        <span className="mt-1 font-DanaBold text-sm">3</span>
                                        <svg className="w-4 h-4 cursor-pointer">
                                            <use href="#minus-mini"></use>
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <span
                                            className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter">
                                            21.500 تومان تخفیف
                                            <svg className="w-4 h-4">
                                                <use href="#discountLogo"></use>
                                            </svg>
                                        </span>
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                            297,000
                                            <span className="font-Dana text-xs">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-1 border-b border-b-gray-100 dark:border-b-white/10 ">
                            <Image
                                className='w-[90px] h-[90px]'
                                src={product4}
                                alt="Product 4"
                            />
                            <div className="flex flex-col justify-between gap-y-4">
                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                </h4>
                                <div className="flex flex-col items-start gap-y-4">
                                    <div
                                        className="flex items-center justify-between px-1 w-16 h-8 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                        <svg className="w-4 h-4 cursor-pointer flex">
                                            <use href="#plus-mini"></use>
                                        </svg>
                                        <span className="mt-1 font-DanaBold text-sm">3</span>
                                        <svg className="w-4 h-4 cursor-pointer">
                                            <use href="#minus-mini"></use>
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <span
                                            className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter">
                                            21.500 تومان تخفیف
                                            <svg className="w-4 h-4">
                                                <use href="#discountLogo"></use>
                                            </svg>
                                        </span>
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                            297,000
                                            <span className="font-Dana text-xs">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-x-1 border-b border-b-gray-100 dark:border-b-white/10 ">
                            <Image
                                className='w-[90px] h-[90px]'
                                src={product5}
                                alt="Product 5"
                            />
                            <div className="flex flex-col justify-between gap-y-4">
                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm line-clamp-2">
                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                </h4>
                                <div className="flex flex-col items-start gap-y-4">
                                    <div
                                        className="flex items-center justify-between px-1 w-16 h-8 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                        <svg className="w-4 h-4 cursor-pointer flex">
                                            <use href="#plus-mini"></use>
                                        </svg>
                                        <span className="mt-1 font-DanaBold text-sm">3</span>
                                        <svg className="w-4 h-4 cursor-pointer">
                                            <use href="#minus-mini"></use>
                                        </svg>
                                    </div>
                                    <div className="space-y-1">
                                        <span
                                            className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 font-DanaMedium text-xs tracking-tighter">
                                            21.500 تومان تخفیف
                                            <svg className="w-4 h-4">
                                                <use href="#discountLogo"></use>
                                            </svg>
                                        </span>
                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                            297,000
                                            <span className="font-Dana text-xs">تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- Cart Footer --> */}
                    <div className="flex items-end mt-auto mb-8 gap-x-4">

                        <a href=""
                            className="flex items-center justify-center w-28 h-11 text-white bg-teal-600 dark:bg-emerald-500 rounded-xl">
                            ثبت سفارش
                        </a>

                        <div>
                            <span className="font-DanaBold text-gray-300 text-xs tracking-tighter">
                                مبلغ قابل پرداخت
                            </span>
                            <div className="text-zinc-700 dark:text-white font-DanaBold">
                                1,798,000
                                <span className="font-Dana text-xs">تومان</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
