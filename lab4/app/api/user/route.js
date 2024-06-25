import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(
)

export async function GET (){
    const allUesrs = await prisma.user.findMany()

    return Response.json(allUesrs);
}

export async function POST(req){

    try { 
        const {email, name}= await req.json();
        const createUser = await prisma.user.create({
        data :{
            email,
            name,
        },
    });     
    return Response.json(createUser,{status: 200});
    } catch (error) {
        return Response.json(error,{status: 500});    
    } 
}