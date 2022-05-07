//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
        this.data["bacon"] = new BaconIpsumAPI()
        this.data["pokemon"] = new PokemonAPI()
        this.data["users"] = new UsersAPI()
        this.data["favouriteQuote"] = new FavouriteQuoteAPI()
    }

    loadData(){
       for(let object in this.data){
            this.data[object].loadData()
       }
    }
    displayData(){
        
        for(let object in this.data){
           
            try {
                this.data[object].displayData()   
            } catch (error) {
                
            }
                  
        }
    }
}

class BaconIpsumAPI{
    constructor(){
        this._meatyParagraph = null
    }
    get meatyParagraph(){
        return this._meatyParagraph
    }
    set meatyParagraph(meatyParagraph){
        this._meatyParagraph = meatyParagraph
    }

    addParagraph(data){
        let paragraph = data[0]
        this.meatyParagraph = new MeatyParagraph(paragraph)
    }

    displayData(){
        this.meatyParagraph.displayData()
    }

    loadData(){
        // handling meatyParagraph 
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat&sentences=4',
            dataType: 'json',
            success: function (data) {
                this.addParagraph(data)
            }.bind(this),
            Error : console.log(" Meaty Paragraph Handling didn't work ")
          }
          )
    }
}

class PokemonAPI{

    constructor(){
        this._pokemon=null
    }    
    get pokemon(){
        return this._pokemon
    }
    set pokemon(pokemon){
        this._pokemon=pokemon
    }
   
    addPokemon(data){
        let name = data.name
        let pictureURL =data.sprites.other.dream_world.front_default
        this.pokemon = new Pokemon(name,pictureURL)
    }

    displayData(){
        this.pokemon.displayData()
    }

    loadData(){
        const PRETTY_POKEMON_NUMBERS = 300
        let rand = Math.floor(Math.random() * PRETTY_POKEMON_NUMBERS)
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon/' + rand,
            dataType: 'json',
            success: function (data) {
                this.addPokemon(data)
            }.bind(this),
            Error : console.log(" Pokemon Handling didn't work ")
          }
          )
    }
    
}

class FavouriteQuoteAPI{
    constructor(){
        this._favouriteQuote = null
    }
    get favouriteQuote(){
        return this._favouriteQuote
    }

    set favouriteQuote(favouriteQuote){
        this._favouriteQuote = favouriteQuote
    }

    displayData(){
        this.favouriteQuote.displayData()

    }
       
    addQuote(data){
        let quoteData = data.quote
        this.favouriteQuote = new FavouriteQuote(quoteData)
    }

    loadData(){
        // Quote Handling 
        $.ajax({
            url: 'https://api.kanye.rest',
            dataType: 'json',
            success: function (data) {
                this.addQuote(data)
            }.bind(this),
            Error : console.log("Quote Handling didn't work ")
          }
          )
    }
}

class UsersAPI {
    constructor(){
        this._friends = []
        this._mainUser =null
        this._quote = null
    }

    get mainUser(){
        return this._mainUser
    }

    set mainUser(mainUser){ 
        this._mainUser = mainUser
    }

    set friends(useres){
        this._friends = useres
    }
    get friends(){
        return this._friends
    }

    get quote(){
        return this._quote
    }

    set quote(quote){
        this._quote = quote
    }

    displayData(){
        for(let person of this.friends){
          try {
            person.displayData()
          } catch (error) {
              
          }  
        }
    }
    
    nameUnpack(data){
        let dataInNeed =data.results.find(p => p.hasOwnProperty('name')).name
        let firstName = dataInNeed.first
        let lastName = dataInNeed.last
        return{firstName:firstName,lastName:lastName}
    }

    addFriends(data){

        let userName=this.nameUnpack(data)
        let person = new Users(userName.firstName,userName.lastName)
        this.friends.push(person)
    }

    locationUnpack(data){
        let dataInNeed =data.results.find(p => p.hasOwnProperty('location')).location
        let city = dataInNeed.city
        let state = dataInNeed.state
        return{city:city,state:state}
    } 
    
    pictureUnpack(data){
        let dataInNeed =data.results.find(p => p.hasOwnProperty('picture')).picture
        let picture = dataInNeed.large
        return{picture:picture}
    }

    addMainUser(data){
        let userName = this.nameUnpack(data)
        let picture = this.pictureUnpack(data)
        let location = this.locationUnpack(data)
        let mainUser = new MainUser(userName.firstName,userName.lastName,location.city
             ,location.state,picture.picture)        
        this.mainUser = mainUser
    }
    loadData(){
        this.friends = []
        // Friends Handling 
        for (let i =0;i<6;i++){
            $.ajax({
            url: 'https://randomuser.me/api/?inc=name&noinfo',
            dataType: 'json',
            success: function (data) {
                this.addFriends(data)
            }.bind(this),
            Error : console.log(" Friends Handling  didn't work ")
          }
          )
        }
        // MainUser Handling 
        $.ajax({
            url: 'https://randomuser.me/api/?inc=name,location,picture&noinfo',
            dataType: 'json',
            success: function (data) {
                this.addMainUser(data)
            }.bind(this),
            Error : console.log(" MainUser Handling didn't work ")
          }
          )
       
    }
}
