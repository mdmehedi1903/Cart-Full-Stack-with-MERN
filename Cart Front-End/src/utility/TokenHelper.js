export function setEmail(email){
    sessionStorage.setItem('email', email)
}

export function getEmail(){
    return sessionStorage.getItem('email');
}

export function setToken(token){
   localStorage.setItem('token', token)
}


export function getToken(){
    return localStorage.getItem('token');
}

export function logOut(){
    localStorage.clear();
}