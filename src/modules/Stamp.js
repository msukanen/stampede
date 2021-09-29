export default class Stamp {
    #name
    #yearPublished
    #isStamped
    #price
    #country
    #src

    constructor(nameOrObject, yearPublished, isStamped, price, country, src) {
        if (typeof nameOrObject === typeof {}) {
            this.#name = nameOrObject.n
            this.#yearPublished = nameOrObject.y
            this.#isStamped = nameOrObject.s
            this.#price = nameOrObject.p
            this.#country = nameOrObject.c
            this.#src = nameOrObject.src
        } else {
            this.#name = nameOrObject
            this.#yearPublished = yearPublished
            this.#isStamped = isStamped
            this.#price = price
            this.#country = country
            this.#src = src
        }
    }

    get name()      {return this.#name}
    get published() {return this.#yearPublished}
    get stamped()   {return this.#isStamped}
    get price()     {return this.#price}
    get country()   {return this.#country}
    get src()       {return this.#src}
}
