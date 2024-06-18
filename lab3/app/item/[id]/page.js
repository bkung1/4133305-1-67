import TestBtn from "./testBtn"
import Pius from "@/lib/plus"

export default function item({params}){

    const added = Pius(999999999,9999999999999)

    return(
        <div>
            <p>item : {params.id}</p>
            <p>
                {added}
            </p> 
            <TestBtn/>
        </div>
    )
}