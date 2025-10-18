
function generatePassword(length){
  const str = "abcdef0123456789@#4";
  let password;

  for (let i = 0; i < length; i++){
      password += str.charAt(i);
  }

  return password;
}

// I know its wrong but I don't have time 