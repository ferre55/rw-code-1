const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
/* ! FIXED =  Modificar y poner correctamente los selectores */
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

  /* ! FIXED: Agregar Async function para que no se ejecute un error */
async function displayUser(username) {
  $n.textContent = 'cargando...';

  const response = await fetch(`${usersEndpoint}/${username}`);
  
  /* ! FIXED =  la variable data se definio */
  const data = await response.json();
  console.log(data);

    /* ! FIXED =  Cambiar comillas simples por backticks */
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /* ! FIXED: Poner la variable completa */
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);