// Write your code here

class Breakfast{
    constructor(food, drink){
        this.food = food
        this.drink = drink
    }
}

new Breakfast('eggs',  'juice')

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')

class Dinner {
    #desert
    constructor(salad, soup,  entree, desert){
        this.salad = salad 
        this.soup = soup
        this.entree = entree
        this.#desert = desert
    }
}

new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')