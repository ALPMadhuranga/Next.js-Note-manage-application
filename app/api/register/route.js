import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import User from "@/models/User";
import connect from "@/utils/db";

export const POST = async (request) => {
    const { username, email, password } = await request.json();

    await connect();

    const  existingUser = await User.findOne({email})

    if(existingUser) {
        return new NextResponse("Email is already in use", { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        return new NextResponse("user is registered", { status: 200 })
    } catch (err) {
        return new NextResponse(err, {
            status: 500,
        });
    }
};