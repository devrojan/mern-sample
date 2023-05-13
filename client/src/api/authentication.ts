import axios, { AxiosError } from "axios"

export interface LoginCredentials  {
    email: string,
    password: string,
}

export interface RegisterData extends LoginCredentials {
    name: string
}


export async function login(credentials: LoginCredentials ) {
    try {
        const res = await axios.post('/api/login', credentials)
        return res
    } catch (error) {
        if (error instanceof AxiosError) {
            alert(error.response?.data.message)
            return
        }

        alert('Something went wrong')
    }
  
}

export async function register(data: RegisterData) {
    try {
        const res = await axios.post('/api/signup', data)
        alert('Success creating an account')
        return res
    } catch (error) {
        if (error instanceof AxiosError) {
            alert(error.response?.data.message)
            return
        }

        alert('Something went wrong')
    } 
}