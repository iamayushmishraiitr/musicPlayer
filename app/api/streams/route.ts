import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import {z} from "zod"
const CreateStreamSchema= z.object({
  id:z.string() ,
  url:z.string() 
})

export async function POST(req: NextRequest) {
  try {
    const data= CreateStreamSchema.parse(await req.json()) ;
  } catch (e) {
    return NextResponse.json(
      {
        message: "Error while adding a stream",
      },
      {
        status: 500,
      }
    );
  }
}
