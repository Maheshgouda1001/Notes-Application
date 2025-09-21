export default function TextArea({ name, newNote, setNewNote }: { name: string; newNote: string; setNewNote: (event: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
            <textarea
              name={name}
              placeholder="Write your note here..."
              className="border p-2 w-96 h-48 mb-4 rounded resize-none bg-white"
              value={newNote}
              onChange={setNewNote}
            />
    )
}