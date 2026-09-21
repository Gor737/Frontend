import { addUser } from "@/app/(lib)/users";

export const POST = async (req: Request) => {
    try{
        const data = await req.json();
        const res = await addUser(data);
        return Response.json(res, {status: 201});
    }catch(err){
        throw err;
    }
}