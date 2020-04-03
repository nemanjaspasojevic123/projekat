let state = {
    token: null,
    id: null
}

const deleteToken =  ()=>{
    return new Promise((resolve)=>{
        state.token = null;
        state.id =null;
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        resolve();
    });
}
const setId = (id) => {
    state.id = id;
    localStorage.setItem('id', id)
}

const setToken = (token) => {
    state.token = token;
    localStorage.setItem('token', token);
}

const getToken = () => {
    const token = state.token ? state.token :
        localStorage.getItem('token') ? localStorage.getItem('token') :
            null;
    return token;
}

const isLogin = () => {
    // return true;
    return state.token || localStorage.getItem('token');
}




export { setToken, setId, getToken, isLogin, deleteToken};