import "../styles/About.css"

export default function About() {



    return(
        <div>
            <h1>About</h1>
            <h2 >Here is the about page.</h2>
           <div className={"about"}>
               <div className={"first-dev"}>
                   <div className={"image"}>
                          <img src={"vlad.jpg"} alt={"vlad"}/>
                   </div>
                   <div>
                       <p>TEXT</p>
                   </div>
               </div>
               <div className={"second-dev"}>
                   <div className={"image"}>
                       <img src={"max.jpg"} alt={"max"}/>
                   </div>
                   <div>
                       <p>TEXT</p>
                   </div>
               </div>
           </div>
        </div>
    )
}