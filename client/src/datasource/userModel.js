/* 
    File: userModel.js
    Developers: Salman Vahora, Bat An Dinh, Artemis, Edgar, Sriraj Bura
    Description: Frontend model class defining User structure used in the registration form and user creation process.
    Date: November 23 2025
*/



class UserModel
{
    constructor(firstName, lastName, email, password, username){
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.password = password
    }
}

export default UserModel;