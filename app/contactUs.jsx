import contact from '../public/utils/image/blogs/contact.png'
import Image from 'next/image'


export default function contactUs() {
    return (
        <>
            <section className="contact-us mb-8 md:mb-20">
                <div className="container">

                    <div className="flex flex-col items-center md:flex-row">
                        {/* <!-- image --> */}
                        <div className="h-auto w-72 md:min-w-72 md:ml-5">
                            <Image
                                src={contact}
                                alt="contact"
                                loading="lazy"
                            />
                        </div>
                        {/* <!-- text --> */}
                        <div className="text-zinc-700 dark:text-white">
                            <h4 className="font-MorabbaMedium text-2xl md:text-5xl">
                                یکی از بهترین قهوه ها !
                            </h4>
                            <sub className="top-0 font-MorabbaLight text-lg md:text-3xl">کیفیت قهوه را از ما بخواهید ...</sub>
                            <div className="text-3xl tracking-widest text-zinc-700 dar:text-gray-400 my-5">
                                ...
                            </div>
                            <p className="text-justify text-lg font-thin md:text-2xl">
                                فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
                                پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده
                                است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما
                                را می سازد!
                            </p>
                            <a href="#"
                                className="flex items-center h-12 mt-5 md:min-w-52 text-orange-300 border border-orange-300 rounded-[6.25rem] justify-evenly w-44 p-3 hover:bg-orange-200/20 transition-colors">
                                <svg className="w-5 h-5 md:w-8 md:h-8">
                                    <use href="#phone"></use>
                                </svg>
                                <p className="text-base tracking-tightest md:text-xl">
                                    ثبت سفارش تلفنی
                                </p>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
