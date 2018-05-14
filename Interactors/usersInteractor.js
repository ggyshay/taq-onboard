import usersDS from "../DataSources/usersDS";

export default {
    execute(){
        return usersDS.listUsers()
    }
}