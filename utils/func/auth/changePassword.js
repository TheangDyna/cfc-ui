const changePassword = (password,newPassword) => {
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, password, newPassword);
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
 
export default changePassword;