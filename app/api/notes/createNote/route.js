import connect from "@/utils/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

// create note
export const POST = async (request) => {
    const {title, description,author} = await request.json();
    await connect();

    try {
        const newNote = new Note({
            title,
            description,
            author
        });

        await newNote.save();

        return new NextResponse("Note added successfully", { status: 200 });
        
    } catch (error) {
        return new NextResponse(err, {
            status: 500,
        });
    }
}