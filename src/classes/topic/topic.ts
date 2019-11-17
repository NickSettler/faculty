class Topic{
    private _name: String;

    constructor(name: String = "", options = {}){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

export default Topic;