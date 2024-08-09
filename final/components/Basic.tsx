"use client"
import {FC} from "react";

const staticNum:number = 5;

type Gender = "Male" | "Female" | "LGBTQ";

interface Props{
    initVal:number;
    gender: Gender;

}


interface Person{
    fristname:string;
    lastname:string;
    age?:number;
    single:boolean;
}

const person:Person ={
    fristname:"Ball",
    lastname:"God",
    age:20,
    single:false,
};

const Basic:FC<Props> = ({initVal,gender})=>{
    const verifyGender = (gd:Gender)=>{
        if (gd ==="Female")
            console.log(gd);
        else console.log("Not Female");
    
    };

    return (
        <>
        <p>
            Basic
        </p>
        <div>{staticNum}</div>
        <div>{person.fristname}</div>
        <div>{gender}</div>
        <div>{initVal}</div>
        <button>Increase</button>
        <button onClick={()=>verifyGender(gender)}>Gender</button>
        
        
        </>
    );

};

Basic.defaultProps={
    initVal:0,
    gender : "Female"
}

export default Basic;