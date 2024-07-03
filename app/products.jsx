import product1 from '../public/utils/image/products/p1.png'
import product2 from '../public/utils/image/products/p2.png'
import product3 from '../public/utils/image/products/p3.png'
import product4 from '../public/utils/image/products/p4.png'
import product5 from '../public/utils/image/products/p5.png'
import product6 from '../public/utils/image/products/p6.png'
import product7 from '../public/utils/image/products/p7.png'
import product8 from '../public/utils/image/products/p8.png'
import Image from 'next/image'

export default function products() {
    return (
        <>
            <section className="products pt-8 md:pt-24 lg:pt-48">
                <div className="container">

                    {/* <!-- Section Head --> */}
                    <div className="flex items-end justify-between mb-5 md:mb-12">

                        <div>
                            <h2 className="section-title">
                                جدیدترین محصولات
                            </h2>
                            <span className="section-subtitle">
                                فرآوری شده از دانه قهوه
                            </span>
                        </div>

                        <a href="#" className="section-link">
                            <span className="hidden md:inline-block">
                                مشاهده همه محصولات
                            </span>
                            <span className="inline-block md:hidden">
                                مشاهده همه
                            </span>
                            <svg className="w-4 h-4 lg:w-5 lg:h-5">
                                <use href="#chevron-left"></use>
                            </svg>
                        </a>

                    </div>

                    {/* <!-- Section Body  --> */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 md:gap-5">

                        {/* <!-- item 1 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 md:w-64 mx-auto'
                                    src={product1}
                                    alt="Product 1"
                                    loading="lazy"
                                />

                                {/* <!-- discount percent  --> */}
                                <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    12%
                                </span>

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-teal-600 dark:text-emerald-500">
                                    <span className="font-DanaBold text-base lg:text-xl">
                                        75,000
                                    </span>
                                    <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span>
                                    <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 2 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product2}
                                    alt="Product 2"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                {/* <!-- <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    12%
                                </span> --> */}

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-teal-600 dark:text-emerald-500">
                                    <span className="font-DanaBold text-base lg:text-xl">
                                        75,000
                                    </span>
                                    <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span>
                                    {/* <!-- <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span> --> */}
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 3 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product3}
                                    alt="Product 3"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    12%
                                </span>

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-red-500">
                                    <span className="font-Dana text-base lg:text-xl">
                                        فعلا موجود نیست
                                    </span>
                                    {/* <!-- <span className="font-DanaBold text-base lg:text-xl">
                                        75,000
                                    </span> --> */}
                                    {/* <!-- <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span> --> */}
                                    {/* <!-- <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span> --> */}
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 4 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product4}
                                    alt="Product 4"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    5%
                                </span>

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-teal-600 dark:text-emerald-500">
                                    <span className="font-DanaBold text-base lg:text-xl">
                                        154,000
                                    </span>
                                    <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span>
                                    <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 5 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product5}
                                    alt="Product 5"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    12%
                                </span>

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-teal-600 dark:text-emerald-500">
                                    <span className="font-DanaBold text-base lg:text-xl">
                                        154,000
                                    </span>
                                    <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span>
                                    <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between  mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 6 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product6}
                                    alt="Product 6"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                {/* <!-- <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    12%
                                </span> --> */}

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-teal-600 dark:text-emerald-500">
                                    <span className="font-DanaBold text-base lg:text-xl">
                                        75,000
                                    </span>
                                    <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span>
                                    {/* <!-- <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span> --> */}
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 7 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product7}
                                    alt="Product 7"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    1%
                                </span>

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-red-500">
                                    <span className="font-Dana text-base lg:text-xl">
                                        فعلا موجود نیست
                                    </span>
                                    {/* <!-- <span className="font-DanaBold text-base lg:text-xl">
                                        75,000
                                    </span> --> */}
                                    {/* <!-- <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span> --> */}
                                    {/* <!-- <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span> --> */}
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                        {/* <!-- item 8 --> */}
                        <div className="flex flex-col justify-between p-4 md:p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">

                            <div className="relative mb-2 md:mb-5">

                                <Image
                                    className='w-32 mx-auto md:w-64'
                                    src={product8}
                                    alt="Product 8"
                                    loading="lazy"
                                />
                                {/* <!-- discount percent --> */}
                                <span
                                    className="absolute top-1 right-1 flex items-center justify-center w-10 lg:w-[3.375rem] h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] font-DanaBold bg-orange-300 text-white dark:text-zinc-700 rounded-3xl pt-1">
                                    5%
                                </span>

                            </div>

                            {/* <!-- Cart Title --> */}
                            <h5 className="font-DanaMedium text-sm/7 lg:text-xl/7 min-h-14 text-zinc-700 dark:text-white line-clamp-2">
                                قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم که مقدار مهمی در ان قرار نمی گیرد
                            </h5>

                            {/* <!-- Cart Price --> */}
                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                                <div className="text-teal-600 dark:text-emerald-500">
                                    <span className="font-DanaBold text-base lg:text-xl">
                                        154,000
                                    </span>
                                    <span className="text-xs md:text-sm tracking-tighter">
                                        تومان
                                    </span>
                                    <span className="mr-2 text-sm text-gray-400 line-through lg:text-base decoration-red-500 decoration-1">
                                        175,000
                                        <span className="hidden md:inline">
                                            تومان
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* <!-- Cart Footer --> */}
                            <div className="flex items-center justify-between mt-1.5 md:mt-2.5">

                                {/* <!-- Shopping Cart --> */}
                                <div className="flex items-center text-gray-400 gap-x-1 lg:gap-x-3">

                                    {/* <!-- Cart --> */}
                                    <svg
                                        className="w-6 h-6 p-1 bg-gray-100 rounded-full lg:w-9 lg:h-9 lg:p-2 dark:bg-zinc-800 hover:bg-teal-600 hover:text-white dark:hover:bg-emerald-500 transition-colors cursor-pointer">
                                        <use href="#shopping-cart"></use>
                                    </svg>

                                    {/* <!-- Arrows Right Left --> */}
                                    <svg
                                        className="w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 dark:hover:text-emerald-500 transition-colors cursor-pointer">
                                        <use href="#arrows-right-left"></use>
                                    </svg>
                                </div>

                                {/* <!-- Star --> */}
                                <div className="flex text-yellow-400">
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-300 dark:text-gray-400">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                    <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
                                        <use href="#star"></use>
                                    </svg>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
