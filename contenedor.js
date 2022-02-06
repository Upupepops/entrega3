const fs = require('fs').promises;

class Contenedor {
    constructor(path) {
        this.path = path;
        this.list = []
    }
// get all books in stock
    async getAll() {
        const bookStock = await fs.readFile(this.path, 'utf8')
        const books = JSON.parse(bookStock)
        console.log(books);
        this.list.push(books)
        return this.list[0]
    }
// get random book in stock
    async getRandomBook() {
        const bookStock = await fs.readFile(this.path, 'utf8')
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min)) + min
        }
        const info = await fs.readFile(this.path, 'utf8')
        .then ( info => {
        const data = JSON.parse(info)
        const selectedBook = data[getRandomArbitrary(0, data.length)]
        bookStock = JSON.stringify(selectedBook)
        })
        .catch(err => {
            console.log('This is an error' + err)
        })
        return bookStock
    }
}
module.exports = Contenedor