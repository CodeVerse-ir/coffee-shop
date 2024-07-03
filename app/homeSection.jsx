export default function homeSection() {
    return (
        <>
            <section
                className="home relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-center">

                <div className="container relative overflow-y-hidden h-full md:min-h-screen flex items-center justify-end">
                    <div className="text-white">
                        <h2 className="font-MorabbaBold text-2xl md:text-6xl/[62px]  mb-0.5 md:mb-2">
                            قهوه عربیکا تانزانیا
                        </h2>
                        <span className="font-MorabbaLight text-xl md:text-5xl/[64px]">
                            یک فنجان قهوه بالانس !
                        </span>
                        <span className="block w-[100px] h-px bg-orange-300 my-3 md:my-8"></span>
                        <p className="max-w-[201px] md:max-w-[460px] text-xs md:text-2xl">
                            قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت
                            میشود.
                        </p>
                    </div>

                    {/* <!-- Circle --> */}
                    <div className="circle circle--lg">
                        <div className="circle circle--md">
                            <div className="circle circle--sm">

                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Curve --> */}
                <svg
                    className="absolute bottom-0 left-0 right-0 hidden md:inline-block mx-auto text-gray-100 dark:text-zinc-800 w-[100px] h-[22px]">
                    <use href="#curve"></use>
                </svg>

                {/* <!-- Arrow Circle --> */}
                <div
                    className="absolute bottom-0 left-0 right-0 mx-auto translate-y-2/4 hidden md:flex items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full">
                    <svg className="w-5 h-5 text-zinc-700 dark:text-white">
                        <use href="#chevron-down-mini"></use>
                    </svg>
                </div>

            </section>
        </>
    )
}
