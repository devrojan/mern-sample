import { useState } from "react"
import { register } from "../api/authentication"

const RegisterForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        await register({
            name,
            email,
            password
        })

        setName('')
        setEmail('')
        setPassword('')

       
    }
    
    return (
        <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                <div className="mt-2">
                    <input 
                        id="fullName" 
                        name="fullName" 
                        type="text" 
                        autoComplete="email" 
                        required 
                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        autoComplete="email" 
                        required 
                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="mt-2">
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        autoComplete="current-password" 
                        required 
                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign up
            </button>
        </form>
    )
}

export default RegisterForm