import avatar1 from "../assets/images/avatar-anisha.png"
import avatar2 from "../assets/images/avatar-ali.png"
import avatar3 from "../assets/images/avatar-richard.png"

function Testimonials(){
    return(
        <>
       
            <h1 className="text-center text-6xl mt-14"> What they've said</h1>
            <div className="flex items-center justify-around max-lg:flex-col">
                <div className="flex-col items-center justify-center w-96 mt-20">
                    <img src={avatar1} className="m-auto"></img>
                    <h3 className="text-center">Anisha Li </h3>
                    <p className="text-slate-500 text-center">"Manage has supercharged our team's workflow. The 
                        maintain visibility on larger milestones at all times, keeps
                        everyone motivated"</p>
                </div>

                <div className="flex-col items-center justify-center w-96 mt-20">
                    <img src={avatar2} className="m-auto"></img>
                    <h3 className="text-center">Ali Bravo </h3>
                    <p className="text-slate-500 text-center">"we have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel
                    confusion and everyone is much more focused"</p>
                </div>

                <div className="flex-col items-center justify-center w-96 mt-20">
                    <img src={avatar3} className="m-auto"></img>
                    <h3 className="text-center">Richard watts </h3>
                    <p className="text-slate-500 text-center">"Manage allows us to provide structure and productivity.
                    Keeps us organized and focused. I can't stop recommening them to everyone I talk to!"</p>
                </div>

               
                
            </div>
            <div className="flex items-center justify-center my-20">
                <button className="py-3 px-5 rounded-full bg-orange-600 text-white hover:opacity-75">Get Started</button>
                </div>

            
        </>
    )
}

export default Testimonials;