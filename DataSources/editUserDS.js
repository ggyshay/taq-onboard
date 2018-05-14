import authFetch from "../authorizer";

export default {
    createUser(user){
        let pureUser = {...user}
        delete pureUser.id
        let options = {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(pureUser)
        }
        return authFetch("https://tq-template-server-sample.herokuapp.com/users", options)
 
    },

    editUser(user){
        let options = {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        }


        return authFetch("https://tq-template-server-sample.herokuapp.com/users/" + user.id.toString(), options)
    }
}