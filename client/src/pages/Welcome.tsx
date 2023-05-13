import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = Cookies.get('x-access-token')
    
        if (!token) {
          navigate('/')
        }
    }, [])

    const logout  = () => {
        Cookies.remove('x-access-token')
        navigate('/')
    }

    return (
    <div className="flex items-center justify-center flex-col h-screen">
        <div className="border px-8 py-12 rounded-md w-96">
        <div className="text-center mb-8">
            Welcome user
        </div>

        <button 
            type="submit" 
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={e => logout()}
        >
            Logout
        </button>
        </div>
    </div>
    )
}

export default Welcome