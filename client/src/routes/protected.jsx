import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Login from '../pages/Login'
import Register from '../pages/Register'



const Protected = () => {
    const { user } = useAuthContext()
    const { role } = user || {}
    const isAdmin = role === 'admin' ? true : false
    return isAdmin ? <Outlet /> : <Navigate to="/" replace></Navigate>
}

const LoginProtected = () => {
    const { user } = useAuthContext()
    const { token } = user || {}
    return token ? <Navigate to="/" replace></Navigate> : <Login />
}

const RegisterProtected = () => {
    const { user } = useAuthContext()
    return user ? <Navigate to="/" replace></Navigate> : <Register />
}

export { Protected, LoginProtected, RegisterProtected }
