import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const Protected = () => {

    const { user } = useAuthContext()
    const { token } = user || {}
    return token && user.username === 'wes' ? <Outlet /> : <Navigate to="/" replace></Navigate>
}

export default Protected
