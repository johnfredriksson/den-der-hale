function Landing() {
    return (
        <section className="h-[95vh] m-[2.5vh] max-w-[800px] p-5 border-solid border-4 md:m-auto md:my-[2.5vh] border-black overflow-hidden">
            <h1 className="text-6xl leading-11 absolute bottom-[4vh] font-bold">
                DEN<br />DER<br />HALE
            </h1>
            <div className="relative">
                <div className="max-w-[800px] w-[150vw] absolute top-[-10em] right-[-15em]">
                    <img className="w-[100]  absolute animate-[spin_700s_linear_infinite]" src="images/ants/1.svg"/>
                    <img className="w-[100]  absolute animate-[spin_650s_linear_infinite]" src="images/ants/2.svg"/>
                    <img className="w-[100]  absolute animate-[spin_600s_linear_infinite]" src="images/ants/3.svg"/>
                    <img className="w-[100]  absolute animate-[spin_760s_linear_infinite]" src="images/ants/4.svg"/>
                    <img className="w-[100]  absolute animate-[spin_630s_linear_infinite]" src="images/ants/5.svg"/>
                    <img className="w-[100]  absolute animate-[spin_710s_linear_infinite]" src="images/ants/6.svg"/>
                    <img className="w-[100]  absolute animate-[spin_400s_linear_infinite]" src="images/ants/7.svg"/>
                    <img className="w-[100]  absolute animate-[spin_635s_linear_infinite]" src="images/ants/8.svg"/>
                    <img className="w-[100]  absolute animate-[spin_710s_linear_infinite]" src="images/ants/9.svg"/>
                </div>
            </div>
        </section>
    )
}

// bottom-[18vh] right-[7vw]

export default Landing;