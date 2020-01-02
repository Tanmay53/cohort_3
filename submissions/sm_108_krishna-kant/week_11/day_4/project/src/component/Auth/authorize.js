export let isAuthenticated = false;
const credentials = {
  username: 'admin',
  password: 'admin'
};
export const authenticate = (cb, userdetails) => {
  if (
    credentials.username == userdetails.username &&
    credentials.password == userdetails.password
  ) {
    isAuthenticated = true;
    setTimeout(cb, 500); // fake async
  }
};
