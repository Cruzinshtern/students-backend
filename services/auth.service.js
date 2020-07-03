const users = [{
  login: "Cruzinshtern",
  password: "12345"
},
];

//create method to check if the user is valid
export function isAuthorized(creds) {
  const user = users.find(user => user.login == creds.login);
  console.log(user);
  if(!user) {
    return false
  }
  if(creds.password !== user.password) {
    return false
  }
  return true
}
