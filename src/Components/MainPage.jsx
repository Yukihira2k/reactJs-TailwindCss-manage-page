import mainImg from "../assets/images/illustration-intro.svg"
function MainPage(){
    return(
        <>
        <div className="flex items-center justify-center w-auto mt-32 gap-44 max-lg:flex-col-reverse max-lg:gap-0">
            <div className="flex-col w-1/4 max-lg:w-full max-lg:text-center max-lg:justify-center max-lg:items-center ">
                <h1 className="text-6xl mb-10 max-lg:text-5xl max-lg:text-center">Bring everyone together to build better products.</h1>
                <p className="text-slate-500 w-2/3 mb-10 text-justify max-lg:text-center max-lg:w-2/3 max-lg:ml-16">
                    Manage makes it simple for software teams
                    to plan day-to-day tasks while keeping the larger team goals
                    in view.
                </p>

                <button className="bg-orange-500 px-10 py-3 rounded-xl text-white hover:opacity-75">Get Started</button>
            </div>
        <div>
            <img src={mainImg}></img>
        </div>

        
            
        </div>

        
        </>
    )
}

export default MainPage;