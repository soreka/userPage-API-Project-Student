
class Renderer {
    constructor(api){   
        this.API = api
        // assigning containers  
        this.friendsContainer =  $(".friends-container")
        this.mainUserContainer = $(".user-container")
        this.pokemonContainer = $(".pokemon-container")
        this.quoteContainer = $(".quote-container")
        this.meatyContainer = $(".meat-container")
         //templates
        const friendsSource = $('#Friends-template').html()
        this.friendsTemplate = Handlebars.compile(friendsSource)
        
        const mainUserSource = $('#mainUser-template').html()
        this.mainUserTemplate = Handlebars.compile(mainUserSource)
        
        const pokemonSource = $('#pokemon-template').html()
        this.pokemonTemplate = Handlebars.compile(pokemonSource)

        const quoteSource = $('#quote-template').html()
        this.quoteTemplate = Handlebars.compile(quoteSource)
        
        const meatyParagraph = $('#meaty-template').html()
        this.meatyTemplate = Handlebars.compile(meatyParagraph)

        this.addLoadDisplayButtons()
        // this.friendsContainer = $(".friends-container")
    }
    

    addLoadDisplayButtons(){
        $(".loadData").on("click",function () {
            this.API.loadData()
        }.bind(this))
        
        $(".displayData").on("click",function () {
            this.friendsRender()
            this.mainUserRender()
            this.pokemonRender()
            this.quoteRender()
            this.meatyRender()
        }.bind(this))
    }
    
    mainUserRender(){
        // if(this.API.users?.friends){
        //     API.users.friends = []
        // }
        $(".mainUserContainer").remove()
        let mainUser = this.API.data["users"].mainUser
        const newHTML = this.mainUserTemplate(mainUser)
        this.mainUserContainer.append(newHTML)
    }

    meatyRender(){
        $(".meatyContainer").remove()
        let meaty = this.API.data["bacon"].meatyParagraph
        const newHTML = this.meatyTemplate(meaty)
        this.meatyContainer.append(newHTML)
    }

    quoteRender(){
        $(".quoteContainer").remove()
        let quote = this.API.data["favouriteQuote"].favouriteQuote
        const newHTML = this.quoteTemplate(quote)
        this.quoteContainer.append(newHTML)
    }

    pokemonRender(){
        $(".pokemonUserContainer").remove()
        let pokemon= this.API.data["pokemon"].pokemon
        const newHTML = this.pokemonTemplate(pokemon)
        this.pokemonContainer.append(newHTML)
    }

    friendsRender(){
        if(this.API.users?.friends){
            API.users.friends = []
        }    
        $(".friendContainer").remove()
        let friends = this.API.data["users"].friends
        friends.forEach(element => {
            const newHTML = this.friendsTemplate(element)
            this.friendsContainer.append(newHTML);
            
        });
        
    }
}

let api = new APIManager()
let render = new Renderer(api)
