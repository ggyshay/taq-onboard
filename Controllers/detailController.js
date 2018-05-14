import detailInteractor from "../Interactors/detailInteractor";

export default {
    send(id){
        return detailInteractor.execute(id)
    }
}