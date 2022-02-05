//Ejercio guiado 1
fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(json => console.log(json))

//Ejercicio guiado 2: multiples solicitudes
//Api base
const urlBase = 'https://jsonplaceholder.typicode.com';

//Petición
const request = async (urlBase) => {
    const result = await fetch(urlBase);
    const response = await result.json();
    return response;
}

//Obtener post 
const getPost = async () => {
    const urlPost = `${urlBase}/posts`
    return request(urlPost);
}

//Obtener usuarios por lista de id
const getUsers = async (id) => {
    const urlUsersID = `${urlBase}/users/${id}`
    return request(urlUsersID);
}

//Obtener los usuarios que hicieron un post
getPost().then(posts => {
    const userIds = posts.map(p => p.userIds);
    const setOfUsers = new Set(userIds);
    const users = [...setOfUsers];
    Promise.all(users.map(userID => getUsers(userID))).then((response) =>
        console.log(response)
    );
});

//Ejercicio guiado: publicaciones de un usuario 
//solicitud a diferentes APIs en varias consultas 

//APi base 
const apiBase = 'https://jsonplaceholder.typicode.com';

//peticion
const request2 = async (apiBase) => {
    const results = await fecht(apiBase);
    const response2 = await results.json();
    return response2;
}

//Obtener post 
const getPosts2 = async (id) => {
    const url = `${apiBase}/posts?userId=${id}`;
    return request2(url);
}

//Obtener lista de usuarios 
const getUser2 = async (id) => {
    const url = `${apiBase}/users/${id}`;
    return request2(url);
}

//Obtener los usuarios por id = 1
const userId = 1;
Promise.all([getUser2(userId), getPosts2(userId)]).then(response => {
    console.log('response', response);
})
    .catch((e) => console.log('error por no conectarse Api', e))