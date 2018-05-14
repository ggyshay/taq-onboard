import usersInteractor from "../Interactors/usersInteractor";

export default {
    send(){
        return usersInteractor.execute()
    }
}