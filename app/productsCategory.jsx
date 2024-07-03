import item1 from '../public/utils/image/categories/category1.png'
import item2 from '../public/utils/image/categories/category2.png'
import item3 from '../public/utils/image/categories/category3.png'
import item4 from '../public/utils/image/categories/category4.png'
import item5 from '../public/utils/image/categories/category5.png'
import Image from 'next/image'

export default function productsCategory() {
    return (
        <>
            <section className="products-category mb-10 md:mb-20">
                <div className="container">

                    <div className="flex flex-wrap items-center gap-6 md:flex-nowrap justify-evenly">

                        {/* <!-- item-1 --> */}
                        <a href="#" className="max-w-[6.25rem] lg:max-w-[12.5rem] flex flex-col">
                            <Image
                                className='rounded-full w-25 h-25 lg:w-48 lg:h-48'
                                src={item1}
                                alt="item 1"
                                loading="lazy"
                            />
                            <sub
                                className="lg:text-xl/7 font-DanaBold text-sm/5 text-zinc-700 dark:text-white md:mt-2.5 mt-1.5 text-center">
                                قهوه دمی و اسپرسو
                            </sub>
                        </a>

                        {/* <!-- item-2 --> */}
                        <a href="#" className="max-w-[6.25rem] lg:max-w-[12.5rem] items-center justify-center flex flex-col">
                            <Image
                                className='rounded-full w-25 h-25 lg:w-48 lg:h-48'
                                src={item2}
                                alt="item 2"
                                loading="lazy"
                            />
                            <sub
                                className="lg:text-xl/7 font-DanaBold text-sm/5 text-zinc-700 dark:text-white md:mt-2.5 mt-1.5 text-center">
                                لوازم جانبی و تجهیزات
                            </sub>
                        </a>

                        {/* <!-- item-3 --> */}
                        <a href="#" className="max-w-[6.25rem] lg:max-w-[12.5rem] items-center justify-center flex flex-col">
                            <Image
                                className='rounded-full w-25 h-25 lg:w-48 lg:h-48'
                                src={item3}
                                alt="item 3"
                                loading="lazy"
                            />
                            <sub
                                className="lg:text-xl/7 font-DanaBold text-sm/5 text-zinc-700 dark:text-white md:mt-2.5 mt-1.5 text-center">
                                اسپرسو ساز
                            </sub>
                        </a>

                        {/* <!-- item-4 --> */}
                        <a href="#" className="max-w-[6.25rem] lg:max-w-[12.5rem] items-center justify-center flex flex-col">
                            <Image
                                className='rounded-full w-25 h-25 lg:w-48 lg:h-48'
                                src={item4}
                                alt="item 4"
                                loading="lazy"
                            />
                            <sub
                                className="lg:text-xl/7 font-DanaBold text-sm/5 text-zinc-700 dark:text-white md:mt-2.5 mt-1.5 text-center">
                                پک تستر قهوه
                            </sub>
                        </a>

                        {/* <!-- item-5 --> */}
                        <a href="#" className="max-w-[6.25rem] lg:max-w-[12.5rem] items-center justify-center flex flex-col">
                            <Image
                                className='rounded-full w-25 h-25 lg:w-48 lg:h-48'
                                src={item5}
                                alt="item 5"
                                loading="lazy"
                            />
                            <sub
                                className="lg:text-xl/7 font-DanaBold text-sm/5 text-zinc-700 dark:text-white md:mt-2.5 mt-1.5 text-center">
                                قهوه ترک
                            </sub>
                        </a>

                    </div>

                </div>
            </section>
        </>
    )
}
