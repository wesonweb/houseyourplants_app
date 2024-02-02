import { PlantsContext } from '../context/PlantContext'
import { useContext } from 'react'

export const usePlantsContext = () => {
  const context = useContext(PlantsContext)
  if (!context) {
    throw new Error('usePlantsContext must be used within a PlantsProvider')
  }
  return context
}
