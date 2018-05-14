import authFetch from "../authorizer";

export default {
    listUsers(){
        let options = {
            "page": 0 , 
            "window": 100
        }
        let url = "https://tq-template-server-sample.herokuapp.com/users"+"?pagination="+JSON.stringify(options)

        return authFetch(url, {method : "GET"})
        .then(res => res.data)
        .catch(console.log)
    }
}