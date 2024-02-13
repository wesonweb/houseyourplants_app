import { createContext, useReducer } from 'react'
import { PropTypes } from 'prop-types'

export const AuthContext = createContext() // create an authentication context

// create a reducer function to handle the state
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default: state // return original state
    }
}
    // create the Provider component to provide the context to the rest of the application
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null // initial state
    })
    console.log('AuthContextProvider state:', state)
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node
}
