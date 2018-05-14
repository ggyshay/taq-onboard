import loginDS from "../DataSources/loginDS";

//use case for the login

export default {
    execute(user){
        //promisse with data or error and its message
        return loginDS.login(user)
    }
}