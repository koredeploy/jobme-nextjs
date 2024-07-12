import Cookies from 'js-cookie'
import Router from 'next/router'

const logout = () => {
    Cookies.remove('token', {
        path: '/'
    });
    Router.push('/login')

}

export default logout;