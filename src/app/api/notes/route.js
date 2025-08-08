import connectDB from '@/app/lib/mongodb';
import Note from '@/app/models/Note';


export async function GET() {
  await connectDB();
  const notes = await Note.find({});
  return Response.json(notes);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newNote = await Note.create(body);
  return Response.json(newNote);
}