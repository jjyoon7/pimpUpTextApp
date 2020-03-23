import React, {useState, useEffect} from "react"
import wordFrequency from "./utils/wordFrequency"

const Context = React.createContext()

function ContextProvider(props) {
    const [mostUsedWord, setMostUsedWord] = useState("")
    const [textData, setTextData] = useState([])

    // const [selectedFile, setSelectedFile] = useState({})

    useEffect(() => {
        //take text data and create a data
        fetch('gettext')
        .then(response => response.json())
        .then(data => setTextData(data))
    })

    const exArray = ['Tom','Fluffy','Fluffy','Fluffy','Fluffy','Fluffy','Tom','Bella','Chloe','Tom','Chloe'];
  
    useEffect(() => {
        setMostUsedWord(wordFrequency(exArray))
    }, [mostUsedWord])

    return (
        <ContextProvider value={{textData,
                                mostUsedWord,
                                }}>
            {props.children}
        </ContextProvider>
    )
}

export {ContextProvider, Context}