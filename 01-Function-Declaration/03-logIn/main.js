function login (username,password) {
    if (username == 'admin' && password == 'P@ssword') {
        alert('Login Success')

    } else {
        alert('login fail')
    }
}
    

let username = prompt('username')
let password = prompt('pass')
login ();