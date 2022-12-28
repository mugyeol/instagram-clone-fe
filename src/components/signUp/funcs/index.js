export function isValidEmail(email) {
  return email.match(
    // /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
  );
}
export const isValidPassword = (pwd) => {
  return pwd.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/);
};
export const isValidId = (id) => {
  return id.match(
    // /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
  );
};
export const isValidUsername = (username) => {
  return username.length > 3;
};
export const isValidNickname = (nickname) => {
  return nickname.length > 3;
};
