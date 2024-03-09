// export const validEmail = new RegExp(
//   "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/"
// );

// export const validPassword = new RegExp("/(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/"
// );

// export const validatePassword = new RegExp({
//   tamanho: /^.{6,8}$/,
//   caracteresEspeciais: /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/,
//   maiusculaMinuscula: /^(?=.*[a-z]{1})(?=.*[A-Z]{1})/,
//   numero: /^(?=.*\d){1}/,
// });

export const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  export const validPasswordTam = new RegExp("^.{6,8}$");
  export const validPasswordCaractere = new RegExp("(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}");
  export const validPasswordMaius = new RegExp("^(?=.*[a-z]{1})(?=.*[A-Z]{1})");
  export const validPasswordNum = new RegExp("^(?=.*\d){1}");

  
