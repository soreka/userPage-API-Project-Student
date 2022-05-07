class Controller{
    constructor() {
        this._apiManager = new APIManager()
    }
    get apiManager(){
        return this._apiManager
    }
} 

