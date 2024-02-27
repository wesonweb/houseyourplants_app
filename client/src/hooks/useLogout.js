import { useAuthContext } from './useAuthContext'

export const useLogout = () => {

    const { dispatch } = useAuthContext()

    const logout = () => {
        localStorage.removeItem('user') // remove the token / user from local storage
        console.log('logged out')
        dispatch({ type: 'LOGOUT' }) // dispatch the action to the reducer
    }

    return { logout }
}
