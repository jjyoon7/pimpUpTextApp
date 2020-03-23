
export default function alterText(text, mostUsedWord) {
    //here alter the text with foo and hiq
    text.map(word => {
        if(word === mostUsedWord) {
            mostUsedWord.prepend("foo")
            mostUsedWord.append("bar")
        }
        return word
    })
    console.log(text)
}
