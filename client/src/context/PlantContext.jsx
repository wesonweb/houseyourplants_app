import { createContext, useReducer } from 'react'
import { PropTypes } from 'prop-types'

export const PlantsContext = createContext()
// TODO: invistigage why the following line has a warning
export const plantsReducer = (state, action) => {

  switch (action.type) {
    case 'GET_PLANTS':
      return {
        plants: action.payload
      }
    case 'CREATE_PLANT':
      return {
        ...state,
        plants: [action.payload, ...state.plants]
      }
    default:
      return state
  }
}

// create a Provider component
export const PlantsContextProvider = ({ children })  => {
  const [state, dispatch ] = useReducer(plantsReducer, {
    plants: null
  })

  return (
    <PlantsContext.Provider value={{...state, dispatch}}>
      { children }
    </PlantsContext.Provider>
  )
}

PlantsContextProvider.propTypes = {
  children: PropTypes.node
}
