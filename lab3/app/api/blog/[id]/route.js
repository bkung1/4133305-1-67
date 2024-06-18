export function GET(request,{params}){
    return Response.json({
        name:"Tewagrit",
        major:"IT",
        lv:"3",
        id: params.id

    });
}