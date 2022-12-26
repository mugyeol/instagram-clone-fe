export function isValidEmail(email) {
  return email.match(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );
}
export const isValidPassword = (pwd) => {
  return pwd.length > 5;
};
export const isValidId = (id) => {
  return id.length > 5;
};
export const isValidUsername = (username) => {
  return username.length > 3;
};
export const isValidNickname = (nickname) => {
  return nickname.length > 3;
};
