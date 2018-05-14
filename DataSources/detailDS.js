import authFetch from "../authorizer";

export default {
    getDetail(id){
        return authFetch("https://tq-template-server-sample.herokuapp.com/users/" + id.toString(), {method: "GET"})
        .catch(console.log)
    }
}