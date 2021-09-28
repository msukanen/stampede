export default class Stamp {
    #name
    #yearPublished
    #isStamped

    constructor(name, yearPublished, isStamped) {
        if (typeof name === typeof {}) {
            this.#name = name.n
            this.#yearPublished = name.y
            this.#isStamped = name.s
        } else {
            this.#name = name
            this.#yearPublished = yearPublished
            this.#isStamped = isStamped
        }
    }

    get name()      {return this.#name}
    get published() {return this.#yearPublished}
    get stamped()   {return this.#isStamped}
}
