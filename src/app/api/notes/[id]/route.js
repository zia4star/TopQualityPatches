import connectDB from '@/app/lib/mongodb';
import Note from '@/app/models/Note';


export async function DELETE(req, { params }) {
  await connectDB();
  const id = await params.id
  await Note.findByIdAndDelete({_id: id});
  return Response.json({ success: true });
}
export async function PUT(req, { params }) {
  await connectDB();
  const data = await req.json();
  const updatedNote = await Note.findByIdAndUpdate(params._id, data, { new: true });
  return Response.json(updatedNote);
}