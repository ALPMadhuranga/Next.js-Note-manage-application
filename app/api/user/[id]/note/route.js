import connect from "@/utils/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

// Get Notes
export const GET = async (request, { params }) => {
    try {
      await connect();
  
      const notes = await Note.find({ author: params.id });
  
      return new NextResponse(JSON.stringify(notes), { status: 200 });
    } catch (error) {
      return new NextResponse(error, { status:500 });
    }
  };

// Update notes
export const PUT = async (request, {params, body}) => {
  try {
    await connect();

    const { title, description } = JSON.parse(body);

    const updatedNote = await Note.findOneAndUpdate(
      { title, description },
      { new: true }
    );

    if (!updatedNote) {
      return new NextResponse("Note not found", { status: 404 });
    }

    return new NextResponse(JSON.stringify(updatedNote), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
}