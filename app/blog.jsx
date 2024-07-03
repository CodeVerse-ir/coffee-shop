import blog1 from '../public/utils/image/blogs/blog-1.png'
import blog2 from '../public/utils/image/blogs/blog-2.png'
import blog3 from '../public/utils/image/blogs/blog-3.png'
import blog4 from '../public/utils/image/blogs/blog-4.png'
import Image from 'next/image'


export default function blog() {
    return (
        <>
            <section className="blog mb-8 md:mb-20">
                <div className="container">


                    {/* <!-- Section Head --> */}
                    <div className="flex items-end justify-between mb-5 md:mb-12">

                        <h2 className="section-title">
                            مطالب خواندنی
                        </h2>

                        <a href="#" className="section-link">
                            <span className="hidden md:inline-block">
                                مشاهده همه مطالب
                            </span>
                            <span className="inline-block md:hidden">
                                مشاهده همه
                            </span>
                            <svg className="w-4 h-4 lg:w-5 lg:h-5">
                                <use href="#chevron-left"></use>
                            </svg>
                        </a>

                    </div>

                    {/* <!-- items --> */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {/* <!-- item 1 --> */}
                        <div
                            className="flex md:flex-col dark:bg-zinc-700 bg-white p-2.5 justify-start rounded-2xl gap-4 md:justify-between md:items-center">
                            {/* <!-- image --> */}
                            <div className="relative flex items-center group max-w-32 max-h-32 md:max-w-72 md:max-h-48">
                                <Image
                                    className='object-cover rounded-2xl rounded-bl-4xl min-h-32 min-w-32 md:min-w-72 md:min-h-48'
                                    src={blog1}
                                    alt="blog 1"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-gradient-to-r from-orange-200/80 to-orange-300/80 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                                    <svg className="w-20 h-8 mx-auto md:min-w-32 md:h-14 text-amber-900">
                                        <use href="#logo-type"></use>
                                    </svg>
                                </div>
                            </div>
                            {/* <!-- text --> */}
                            <div className="w-full pl-2.5 flex flex-col md:flex-row justify-between">

                                {/* <!-- title --> */}
                                <h4
                                    className="text-right font-dana-Medium line-clamp-2 text-sm/7 md:text-lg/7 text-zinc-700 dark:text-white md:max-w-48 text-wrap md:max-h-14 md:pr-2.5">
                                    طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی
                                </h4>

                                {/* <!-- divide --> */}
                                <span className="w-full h-px bg-gray-100 dark:bg-white/10 md:w-px md:h-full"></span>

                                {/* <!-- created date --> */}
                                <div className="flex justify-between md:ml-2.5">
                                    <div
                                        className="flex text-teal-600 dark:text-emerald-500 text-xs/4 md:text-base/5 md:flex-col md:items-center md:justify-center">
                                        <span className="md:font-dana-Bold md:text-2xl/8">21</span>
                                        <span> مرداد </span>
                                        <span>1402</span>
                                    </div>
                                    <a href="#"
                                        className="flex items-center justify-evenly bg-orange-200/20 text-orange-300 w-[4.4375rem] h-5 rounded-md md:hidden">
                                        <p className="text-sm/4">مطالعه</p>
                                        <svg className="w-4 h-4">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- item 2 --> */}
                        <div
                            className="flex md:flex-col dark:bg-zinc-700 bg-white p-2.5 justify-start rounded-2xl gap-4 md:justify-between md:items-center">
                            {/* <!-- image --> */}
                            <div className="relative flex items-center group max-w-32 max-h-32 md:max-w-72 md:max-h-48">
                                <Image
                                    className='object-cover rounded-2xl rounded-bl-4xl min-h-32 min-w-32 md:min-w-72 md:min-h-48'
                                    src={blog2}
                                    alt="blog 2"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-gradient-to-r from-orange-200/80 to-orange-300/80 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                                    <svg className="w-20 h-8 mx-auto md:min-w-32 md:h-14 text-amber-900">
                                        <use href="#logo-type"></use>
                                    </svg>
                                </div>
                            </div>
                            {/* <!-- text --> */}
                            <div className="w-full pl-2.5 flex flex-col md:flex-row justify-between">
                                {/* <!-- title --> */}

                                <h4
                                    className="text-right font-dana-Medium line-clamp-2 text-sm/7 md:text-lg/7 text-zinc-700 dark:text-white md:max-w-48 text-wrap md:max-h-14 md:pr-2.5">
                                    طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی
                                </h4>

                                {/* <!-- divide --> */}
                                <span className="w-full h-px bg-gray-100 dark:bg-white/10 md:w-px md:h-full"></span>

                                {/* <!-- created date --> */}
                                <div className="flex justify-between md:ml-2.5">
                                    <div
                                        className="flex text-teal-600 dark:text-emerald-500 text-xs/4 md:text-base/5 md:flex-col md:items-center md:justify-center">
                                        <span className="md:font-dana-Bold md:text-2xl/8">21</span>
                                        <span> مرداد </span>
                                        <span>1402</span>
                                    </div>
                                    <a href="#"
                                        className="flex items-center justify-evenly bg-orange-200/20 text-orange-300 w-[4.4375rem] h-5 rounded-md md:hidden">
                                        <p className="text-sm/4">مطالعه</p>
                                        <svg className="w-4 h-4">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- item 3 --> */}
                        <div
                            className="flex md:flex-col dark:bg-zinc-700 bg-white p-2.5 justify-start rounded-2xl gap-4 md:justify-between md:items-center">
                            {/* <!-- image --> */}
                            <div className="relative flex items-center group max-w-32 max-h-32 md:max-w-72 md:max-h-48">
                                <Image
                                    className='object-cover rounded-2xl rounded-bl-4xl min-h-32 min-w-32 md:min-w-72 md:min-h-48'
                                    src={blog3}
                                    alt="blog 3"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-gradient-to-r from-orange-200/80 to-orange-300/80 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                                    <svg className="w-20 h-8 mx-auto md:min-w-32 md:h-14 text-amber-900">
                                        <use href="#logo-type"></use>
                                    </svg>
                                </div>
                            </div>
                            {/* <!-- text --> */}
                            <div className="w-full pl-2.5 flex flex-col md:flex-row justify-between">
                                {/* <!-- title --> */}

                                <h4
                                    className="text-right font-dana-Medium line-clamp-2 text-sm/7 md:text-lg/7 text-zinc-700 dark:text-white md:max-w-48 text-wrap md:max-h-14 md:pr-2.5">
                                    طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی
                                </h4>

                                {/* <!-- divide --> */}
                                <span className="w-full h-px bg-gray-100 dark:bg-white/10 md:w-px md:h-full"></span>

                                {/* <!-- created date --> */}
                                <div className="flex justify-between md:ml-2.5">
                                    <div
                                        className="flex text-teal-600 dark:text-emerald-500 text-xs/4 md:text-base/5 md:flex-col md:items-center md:justify-center">
                                        <span className="md:font-dana-Bold md:text-2xl/8">21</span>
                                        <span> مرداد </span>
                                        <span>1402</span>
                                    </div>
                                    <a href="#"
                                        className="flex items-center justify-evenly bg-orange-200/20 text-orange-300 w-[4.4375rem] h-5 rounded-md md:hidden">
                                        <p className="text-sm/4">مطالعه</p>
                                        <svg className="w-4 h-4">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- item 4 --> */}
                        <div
                            className="flex md:flex-col dark:bg-zinc-700 bg-white p-2.5 justify-start rounded-2xl gap-4 md:justify-between md:items-center">
                            {/* <!-- image --> */}
                            <div className="relative flex items-center group max-w-32 max-h-32 md:max-w-72 md:max-h-48">
                                <Image
                                    className='object-cover rounded-2xl rounded-bl-4xl min-h-32 min-w-32 md:min-w-72 md:min-h-48'
                                    src={blog4}
                                    alt="blog 4"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 flex items-center justify-center transition-all opacity-0 bg-gradient-to-r from-orange-200/80 to-orange-300/80 group-hover:opacity-100 rounded-2xl rounded-bl-4xl">
                                    <svg className="w-20 h-8 mx-auto md:min-w-32 md:h-14 text-amber-900">
                                        <use href="#logo-type"></use>
                                    </svg>
                                </div>
                            </div>
                            {/* <!-- text --> */}
                            <div className="w-full pl-2.5 flex flex-col md:flex-row justify-between">
                                {/* <!-- title --> */}

                                <h4
                                    className="text-right font-dana-Medium line-clamp-2 text-sm/7 md:text-lg/7 text-zinc-700 dark:text-white md:max-w-48 text-wrap md:max-h-14 md:mr-2.5">
                                    طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی
                                </h4>

                                {/* <!-- divide --> */}
                                <span className="w-full h-px bg-gray-100 dark:bg-white/10 md:w-px md:h-full"></span>

                                {/* <!-- created date --> */}
                                <div className="flex justify-between md:ml-2.5">
                                    <div
                                        className="flex text-teal-600 dark:text-emerald-500 text-xs/4 md:text-base/5 md:flex-col md:items-center md:justify-center">
                                        <span className="md:font-dana-Bold md:text-2xl/8">21</span>
                                        <span> مرداد </span>
                                        <span>1402</span>
                                    </div>
                                    <a href="#"
                                        className="flex items-center justify-evenly bg-orange-200/20 text-orange-300 w-[4.4375rem] h-5 rounded-md md:hidden">
                                        <p className="text-sm/4">مطالعه</p>
                                        <svg className="w-4 h-4">
                                            <use href="#arrow-left"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
