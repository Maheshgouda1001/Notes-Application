import { strict } from "assert";

export default function NoteCard({
  id,
  title,
  note,
  onClickHandle
}: {
  id:string;
  title: string;
  note: string;
  onClickHandle: (id:string,title:string,note:string) => void;
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-0 m-2 bg-white shadow-md w-80 h-60" onClick={()=>onClickHandle(id,title,note)}>
        <div className="border-b border-solid border-stone-600 px-1 bg-[#f3d1b6]">
          <h2 className="text-xs font-bold text-brown p-2">{title}</h2>
        </div>
      <p className="text-gray-700 p-2">{note}</p>
    </div>
  );
}