import editUserDS from "../DataSources/editUserDS";

export default {
    executeCreate(user){
        return editUserDS.createUser(user)
    },

    executeEdit(user){
        return editUserDS.editUser(user)
    }
}