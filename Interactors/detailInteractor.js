import detailDS from "../DataSources/detailDS";

export default {
    execute(id){
        return detailDS.getDetail(id)
    }
}