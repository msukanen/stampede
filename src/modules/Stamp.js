export default class Stamp {
    #name
    #yearPublished
    #isStamped
    #src

    constructor(nameOrObject, yearPublished, isStamped, src) {
        if (typeof nameOrObject === typeof {}) {
            this.#name = nameOrObject.n
            this.#yearPublished = nameOrObject.y
            this.#isStamped = nameOrObject.s
            this.#src = nameOrObject.src
        } else {
            this.#name = nameOrObject
            this.#yearPublished = yearPublished
            this.#isStamped = isStamped
            this.#src = src
        }
    }

    get name()      {return this.#name}
    get published() {return this.#yearPublished}
    get stamped()   {return this.#isStamped}
    get src()       {return this.#src}
}
