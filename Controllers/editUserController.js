import editUserInteractor from "../Interactors/editUserInteractor";

export default {
    //decides if creates or edits
    send(user){
        pureUser = {...user};
        delete pureUser.isEdit;

        if(user.isEdit){
            return editUserInteractor.executeEdit(pureUser)
        }else{
            return editUserInteractor.executeCreate(pureUser)
        }
    }
}