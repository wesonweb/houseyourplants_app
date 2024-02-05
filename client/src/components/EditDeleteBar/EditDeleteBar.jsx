
export default function EditDeleteBar({ handleDeletePlant}) {
  return (
    <>
    <div className="flex justify-end">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 me-3 rounded">
        Edit
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeletePlant}
        >
        Delete
      </button>
    </div>
    </>
  )
}
