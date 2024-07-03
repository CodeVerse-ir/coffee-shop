
export default function categoryBanner() {
    return (
        <>
            <section className="category-banner mt-8 mb-10 md:my-20">
                <div className="container">

                    <div
                        className="grid grid-cols-1 my-8 text-white gap-y-5 md:grid-cols-2 md:gap-x-5 md:min-h-64 md:my-5 child:min-h-36">

                        <a href="#" className="category-top-right pr-7 md:pr-12 md:pt-[5.44rem] pt-[2.44rem]">
                            <h4 className="font-DanaBold md:text-4xl/normal text-xl/normal">
                                انواع قهوه
                            </h4>
                            <sub className="text-base font-DanaMedium md:text-xl/normal">
                                ترکیبی و تک خاستگاه
                            </sub>
                        </a>

                        <a href="#" className="category-top-left md:pr-12 md:pt-[5.44rem] pt-[2.44rem] pr-7">
                            <h4 className="font-DanaBold md:text-4xl/normal text-xl/normal">
                                پودر های فوری
                            </h4>
                            <sub className="text-base font-DanaMedium md:text-xl/normal">
                                نسکافه ، هات چاکلت ، ماسالا
                            </sub>
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
