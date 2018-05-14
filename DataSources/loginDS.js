import authFetch from "../authorizer";

//fecth for login

export default {
    login(user){
        //authfetch
        return authFetch('https://tq-template-server-sample.herokuapp.com/authenticate', {
            method: "POST",
            headers: {
              Accept: 'application/json',
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: user.email,
              password: user.password,
              rememberMe: user.rememberMe,
            }),
          })   
        .then(resJson => {
            return {
                data: resJson.data,
                error: (resJson.data == undefined),
                errorMessage: resJson.errors && resJson.errors[0].message
            }
        })
    }
}