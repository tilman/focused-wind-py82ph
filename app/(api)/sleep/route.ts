import { NextApiRequest, NextApiResponse } from "next";

export function sleep(ms: number){
    return new Promise((res) => setTimeout(res, ms));
}

export async function GET(request: Request) {    
    const { searchParams } = new URL(request.url)
    const ms = searchParams.get('ms');
    // simulate work
    await sleep(Number(ms));
    return Response.json(`Slept for ${ms}ms.`);
}