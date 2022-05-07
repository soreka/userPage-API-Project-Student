
class MeatyParagraph{
    constructor(meatyParagraph) {
        this._meatyParagraph = meatyParagraph
    }
    get meatyParagraph(){
        return this._meatyParagraph
    }

    displayData(){
        console.log(this.meatyParagraph);
    }
}

class Pokemon{
    constructor(name,pictureURL){
        this._name= name
        this._pictureURL = pictureURL
    }
    get name(){
        return this._name
    }
    
    get pictureURL(){
        return this._pictureURL
    }
    set name(name){
        this._name= name
    }
    set picture(pictureURL){
        this._pictureURL = pictureURL
    }
    displayData(){
        console.log(this._name,"     picture", this.pictureURL);
    }
}

class Users{
    constructor(firstName,lastName){
        this._firstName = firstName;
        this._lastName = lastName

    }
    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
    displayData(){
        console.log(this.firstName , "  " , this.lastName);
    }

}

class MainUser extends Users{
    constructor(firstName,lastName,city,state,picture) {
        super(firstName,lastName)
        this._city = city
        this._state = state
        this._picture = picture
    }
    get city(){
        return this._city
    }
    get state(){
        return this._state
    }
    get picture(){
        return this._picture
    }

    displayData(){
        console.log(this.firstName , "  " , this.lastName);
        console.log("City :-" ,this.city, "  State:-" ,this.state);
        console.log(this.picture);
    }

}

class FavouriteQuote {
    constructor(quote){
        this._authorName = "Kanye West"
        this._quote = JSON.stringify(quote)
    }

    get authorName(){
        return this._authorName
    }
    get quote(){
        return this._quote
    }

    displayData(){
        console.log(this.quote);
    }

}

