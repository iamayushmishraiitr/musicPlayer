import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { z } from "zod";

// Define the schema
const CreateStreamSchema = z.object({
  id: z.string(),
  url: z.string() 
});

export async function POST(req: NextRequest) {
  try {
    // Parse and validate incoming data
    const data = CreateStreamSchema.parse(await req.json());
    console.log(data ,"Adsadsadsa ")
    return NextResponse.json(
      { message: "Stream added successfully", data }, 
      { status: 200 }
    );
  } catch (e) {
    if (e instanceof z.ZodError) {
      // Return specific validation errors
      return NextResponse.json(
        { message: "Validation error", errors: e.errors },
        { status: 400 }
      );
    }

    // General server error fallback
    return NextResponse.json(
      { message: "Error while adding a stream" },
      { status: 500 }
    );
  }
}
