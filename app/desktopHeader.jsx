import goldenCoffee from '../public/utils/image/svgs/logo.svg'
import product1 from '../public/utils/image/products/p1.png'
import product2 from '../public/utils/image/products/p2.png'
import product3 from '../public/utils/image/products/p3.png'
import Image from 'next/image'


export default function desktopHeader({ handleDarkMode }) {
    return (
        <div>
            {/* <!-- Header Desktop --> */}
            <header className=" fixed top-9 right-0 left-0 z-50 hidden md:flex items-center w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
                <div className="flex items-center justify-between w-full ">
                    {/* <!-- Logo & Menu --> */}
                    <nav className="flex items-center gap-x-5 lg:gap-x-9">

                        {/* <!-- Logo --> */}
                        <div className="shrink-0">
                            <Image
                                src={goldenCoffee}
                                alt="Golden Coffee"
                            />
                        </div>

                        {/* <!-- Menu --> */}
                        <ul className="flex gap-x-5 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px]">
                            <li className="font-DanaMedium text-orange-200">
                                <a href="">
                                    صفحه اصلی
                                </a>
                            </li>

                            {/* <!-- Has Sub --> */}
                            <li className="relative group">
                                <a className="group-hover:text-orange-300 transition-colors" href="">
                                    فروشگاه
                                </a>

                                {/* <!-- Submenu --> */}
                                <div
                                    className="absolute top-full w-52 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible delay-75 transition-all space-y-4 text-zinc-700 dark:text-white bg-white dark:bg-zinc-700 text-base tracking-normal border-t-[3px] border-t-orange-300 rounded-2xl shadow-normal child:inline-block child-hover:text-orange-300 child:transition-colors">
                                    <a href="">
                                        قهوه ویژه
                                    </a>
                                    <a href="">
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
                                <a href="">
                                    دیکشنری
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    بلاگ
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    درباره ما
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    تماس با ما
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* <!-- Cart & Toggle & Login Link --> */}
                    <div className="flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-10 text-xl text-orange-200">

                        {/* <!-- Cart Icon & Theme Switch Btn --> */}
                        <div className="flex items-center gap-x-4 lg:gap-x-5">

                            {/* <!-- Cart --> */}
                            <div className="relative group">
                                {/* <!-- Cart Icon Hover --> */}
                                <div className="py-3 cursor-pointer">
                                    <svg className="w-8 h-8">
                                        <use href="#shopping-cart"></use>
                                    </svg>
                                </div>
                                {/* <!-- Cart Box --> */}
                                <div
                                    className="absolute left-0 top-full w-[400px] h-[500px] p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl delay-75 transition-all  overflow-y-scroll">
                                    {/* <!-- Cart Header --> */}
                                    <div className="flex items-center justify-between font-DanaMedium text-sm tracking-tighter">
                                        <span className="text-gray-300">
                                            3 مورد
                                        </span>
                                        <a href="" className="flex items-center text-orange-300">
                                            مشاهده سبد خرید
                                            <svg className="w-4 h-4">
                                                <use href="#chevron-left"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    {/* <!-- Cart Body --> */}
                                    <div
                                        className="mt-5 pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 child:py-5">

                                        <div className="flex gap-x-2.5">
                                            <Image
                                                className='w-30 h-30'
                                                src={product1}
                                                alt="Product 1"
                                            />
                                            <div className="flex flex-col justify-between">
                                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
                                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                                </h4>
                                                <div className="flex items-center gap-x-5">
                                                    <div
                                                        className="flex items-center justify-between px-1 w-20 h-10 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                                        <svg className="w-5 h-5 cursor-pointer flex">
                                                            <use href="#plus-mini"></use>
                                                        </svg>
                                                        <span className="mt-1">3</span>
                                                        <svg className="w-5 h-5 cursor-pointer">
                                                            <use href="#minus-mini"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="space-y-2.5">
                                                        <span className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                                                            21.500 تومان تخفیف
                                                            <svg className="w-4 h-4">
                                                                <use href="#discountLogo"></use>
                                                            </svg>
                                                        </span>
                                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                                            297,000
                                                            <span className="font-Dana text-sm">تومان</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-x-2.5">
                                            <Image
                                                className='w-30 h-30'
                                                src={product2}
                                                alt="Product 2"
                                            />                      <div className="flex flex-col justify-between">
                                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
                                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                                </h4>
                                                <div className="flex items-center gap-x-5">
                                                    <div
                                                        className="flex items-center justify-between px-1 w-20 h-10 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                                        <svg className="w-5 h-5 cursor-pointer flex">
                                                            <use href="#plus-mini"></use>
                                                        </svg>
                                                        <span className="mt-1">1</span>
                                                        <svg className="w-5 h-5 cursor-pointer">
                                                            <use href="#minus-mini"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="space-y-2.5">
                                                        <span className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                                                            10.500 تومان تخفیف
                                                            <svg className="w-4 h-4">
                                                                <use href="#discountLogo"></use>
                                                            </svg>
                                                        </span>
                                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                                            27,000
                                                            <span className="font-Dana text-sm">تومان</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-x-2.5">
                                            <Image
                                                className='w-30 h-30'
                                                src={product3}
                                                alt="Product 3"
                                            />                      <div className="flex flex-col justify-between">
                                                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-base line-clamp-2">
                                                    قهوه اسپرسو بن مانو پرسیکا 250 گرمی از بهترین شرکت خارجی قاره آفریقا
                                                </h4>
                                                <div className="flex items-center gap-x-5">
                                                    <div
                                                        className="flex items-center justify-between px-1 w-20 h-10 border text-orange-300 border-gray-300 rounded-3xl select-none">
                                                        <svg className="w-5 h-5 cursor-pointer flex">
                                                            <use href="#plus-mini"></use>
                                                        </svg>
                                                        <span className="mt-1">2</span>
                                                        <svg className="w-5 h-5 cursor-pointer">
                                                            <use href="#minus-mini"></use>
                                                        </svg>
                                                    </div>
                                                    <div className="space-y-2.5">
                                                        <span className="flex gap-x-0.5 text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                                                            12.500 تومان تخفیف
                                                            <svg className="w-4 h-4">
                                                                <use href="#discountLogo"></use>
                                                            </svg>
                                                        </span>
                                                        <div className="text-zinc-700 dark:text-white font-DanaBold">
                                                            24,000
                                                            <span className="font-Dana text-sm">تومان</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <!-- Cart Footer --> */}
                                    <div className="flex justify-between mt-5">

                                        <div>
                                            <span className="font-DanaBold text-gray-300 text-xs tracking-tighter">
                                                مبلغ قابل پرداخت
                                            </span>
                                            <div className="text-zinc-700 dark:text-white font-DanaBold">
                                                1,798,000
                                                <span className="font-Dana text-sm">تومان</span>
                                            </div>
                                        </div>

                                        <a href=""
                                            className="flex justify-center items-center w-[144px] h-14 text-white bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 rounded-xl tracking-tightest">
                                            ثبت سفارش
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Theme Switch Btn --> */}
                        <div className="toggle-theme cursor-pointer" onClick={handleDarkMode}>
                            <svg className="inline-block dark:hidden w-8 h-8">
                                <use href="#moon"></use>
                            </svg>
                            <svg className="hidden dark:inline-block w-8 h-8">
                                <use href="#sun"></use>
                            </svg>
                        </div>

                        {/* <!-- Divide Border --> */}
                        <span className="block w-px h-14 bg-white/20"></span>

                        {/* <!-- Login Link --> */}
                        <a href="" className="flex items-center gap-x-2.5 tracking-tightest">
                            <span>
                                <svg className="w-8 h-8 rotate-180">
                                    <use href="#arrow-left-on-rectangle"></use>
                                </svg>
                            </span>
                            <span className="hidden xl:inline-block">
                                ورود | ثبت نام
                            </span>
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

