let book = {
    name: 'Clean Code',
    author: 'Robert',
    replaceString: element => {
        return element.replace('a', 4);
    }
};

console.log(book.replaceString(book.name));

