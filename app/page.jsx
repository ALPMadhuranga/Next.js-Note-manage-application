import NoteCard from "@/components/NoteCard";
import Link from "next/link";
import { RiAddBoxLine } from "react-icons/ri";

export default function Home() {
  return (
    <main className=" min-h-screen p-8">
      <div className="mb-4">
        <h1 className="text-center text-3xl font-bold text-teal-600">Hello, </h1>
        <p className="px-20 text-center text-gray-500 text-sm">"Welcome to <strong className="text-teal-500">MemoFlow:</strong> Organize thoughts, anytime, anywhere!"</p>
        <Link href='/createNote' className="text-5xl text-teal-500 text-left"><RiAddBoxLine  /></Link>
      </div>
      <div className="flex flex-wrap items-center">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      </div>
    </main>
  );
}