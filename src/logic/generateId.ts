export const generateRandomId = () => {
  let string = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 15; i++) {
    string += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return string;
}
