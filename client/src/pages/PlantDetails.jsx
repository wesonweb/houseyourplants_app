
import { useParams } from 'react-router-dom'

export default function PlantDetails() {
  const { id } = useParams()

  return (
    <div>
      <h1>Page to display full plant info</h1>
      <p>Plant ID: {id}</p>
    </div>
  )
}
