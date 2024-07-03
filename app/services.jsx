export default function services() {
    return (
        <>
            <section className="services mb-8 md:mb-20">
                <div className="container">

                    {/* <!-- support & delivery --> */}
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center text-zinc-700 dark:text-white gap-y-11 md:gap-x-4 lg:gap-x-5 mb-14 md:mb-36">

                        {/* <!-- support --> */}
                        <div className="flex flex-col items-center justify-center gap-3 max-w-fit md:flex-row">
                            <svg className="w-14 h-14 md:w-16 md:h-16 dark:text-gray-100">
                                <use href="#support"></use>
                            </svg>
                            {/* <!-- text --> */}
                            <div className="flex flex-col items-start justify-between md:max-h-14">
                                <p className="text-sm font-DanaBold lg:text-lg text-nowrap">
                                    پشتیبانی شبانه روزی
                                </p>
                                <span className="text-xs lg:text-sm">
                                    7 روز هفته ، 24 ساعته
                                </span>
                            </div>
                        </div>

                        {/* <!-- delivery --> */}
                        <div className="flex flex-col items-center justify-center gap-3 max-w-fit md:flex-row">
                            <svg className="w-14 h-14 md:w-16 md:h-16 dark:text-gray-100">
                                <use href="#delivery"></use>
                            </svg>
                            {/* <!-- text --> */}
                            <div className="flex flex-col items-start justify-between md:max-h-14">
                                <p className="text-sm font-DanaBold lg:text-lg text-nowrap">
                                    امکان تحویل اکسپرس
                                </p>
                                <span className="text-xs lg:text-sm">
                                    ارسال بسته با سرعت
                                </span>
                            </div>
                        </div>


                        {/* <!-- pitcher & coffee  --> */}
                        {/* <!-- pitcher --> */}
                        <div className="flex flex-col items-center justify-center gap-3 max-w-fit md:flex-row">
                            <svg className="w-14 h-14 md:w-16 md:h-16 dark:text-gray-100">
                                <use href="#pitcher"></use>
                            </svg>
                            {/* <!-- text --> */}
                            <div className="flex flex-col items-start justify-between md:max-h-14">
                                <p className="text-sm font-DanaBold lg:text-lg text-nowrap">
                                    رست تخصصی
                                </p>
                                <span className="text-xs lg:text-sm">
                                    تازه برداشته شده و با کیفیت
                                </span>
                            </div>
                        </div>

                        {/* <!-- coffee --> */}
                        <div className="flex flex-col items-center justify-center gap-3 max-w-fit md:flex-row">
                            <svg className="w-14 h-14 md:w-16 md:h-16 dark:text-gray-100">
                                <use href="#coffee"></use>
                            </svg>
                            {/* <!-- text --> */}
                            <div className="flex flex-col items-start justify-between md:max-h-14">
                                <p className="text-sm font-DanaBold lg:text-lg text-nowrap">
                                    اکسسوری قهوه
                                </p>
                                <span className="text-xs lg:text-sm">
                                    وسایل و ادوات دم آوری
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
