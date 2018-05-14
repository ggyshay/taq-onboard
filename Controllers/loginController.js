import loginInteractor from '../Interactors/loginInteractor';

export default {
    async send(user){
        //data is {email, password}
        //send data to the validator
        res = await loginInteractor.execute(user)//{error, errorMessage, data}
        return res
    }
};
