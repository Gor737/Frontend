import { deleteUser, updateUser } from "@/app/(lib)/users";

type Props = {
    params: Promise<{id:string}>;
}

export const DELETE = async (req:Request, {params}: Props) => {
    try{
        const {id} = await params;
        const res = await deleteUser(Number(id));
        return Response.json(res, {status:200});
    }catch(err){
        throw err;
    }
}

export const PUT = async (req:Request, {params}:Props) => {
    try{
        const {id} = await params;
        const data = await req.json() 
        const res = await updateUser(Number(id), data);

        return Response.json(res, {status:200});
    }catch(err){
        throw err;
    }
}