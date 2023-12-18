import { http, HttpResponse } from 'msw'

export const login = () => {
    http.post('login', () => {
        return HttpResponse.json(
            { token: 'jkdjdkfjsdksdf' },
            { status: 201 })
    })
}

export const register = () => {
    http.post('/register', () => {
        return HttpResponse.json(
            { id: 2, email: 'seba.df@gmail.com'},
            { status:201 }
        )
    })
}
