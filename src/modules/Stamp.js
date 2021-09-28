export default class Stamp {
    #name
    #yearPublished
    #isStamped

    constructor(name, yearPublished, isStamped) {
        this.#name = name
        this.#yearPublished = yearPublished
        this.#isStamped = isStamped
    }

    get name()      {return this.#name}
    get published() {return this.#yearPublished}
    get stamped()   {return this.#isStamped}
}
