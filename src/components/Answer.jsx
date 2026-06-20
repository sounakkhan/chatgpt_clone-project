import { useEffect, useState } from "react"
import { checkHeading, replaceHeadingStars } from "../helper"

const Answer=({ans,id,totalresult})=>{
    const[heading,setheading]=useState(false)
    const[answer,setanswer]=useState(ans)
    useEffect(()=>{
        if(checkHeading(ans)){
            setheading(true)
           setanswer(replaceHeadingStars(ans)) 
        }
    },[])
    return(
        <div>
            <>
            
           {
            id==0 && totalresult>1?<span className="pt-2 text-xl block text-shadow-amber-200">{ans}</span>:
           heading?<span className="pt-2 text-lg block text-shadow-amber-100">{answer}</span>:
           <span className="pl-3">{answer}</span>}
            </>

        </div>
    )
}
export default Answer