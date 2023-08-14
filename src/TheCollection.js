import {ContextOne} from "./Context";
import {useContext} from "react";
import FirstCollection from "./FirstCollection";
import Suggested from "./Suggested";


const TheCollection = () => {

    const {collection, index, handleNext, handlePrev, handleToggle, selectedBook} = useContext(ContextOne);

    const books = collection[index];
    const headers = ["History", "Philosophy"][index];

    return (
        <div>
            <ContextOne.Provider value={{books, headers, handleNext, handlePrev, selectedBook, handleToggle}}>
                <FirstCollection />
            </ContextOne.Provider>
            <Suggested />
        </div>
    )
}

export default TheCollection;