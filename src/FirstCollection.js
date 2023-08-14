import {ContextOne} from "./Context";
import {useContext} from "react";
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';

const FirstCollection = () => {

    const {books, headers, handlePrev, handleNext, selectedBook, handleToggle} = useContext(ContextOne);
    return (
        <div className="main-div">
             <h1>{headers}</h1>
             <div className="first-section">
            {books.map((book) => {
                return <ul key={book.id} className="the-list">
                    <li><img src={book.cover} onClick={() => handleToggle(book)} alt={book.title} /></li>
                    <li>{book.author}</li>
                </ul>
            })}
            </div>
            <div className="buttons">
                <div>
                <FaArrowCircleLeft onClick={handlePrev} />
                </div>
                <div>
                <FaArrowCircleRight onClick={handleNext} />
                </div>
            </div>
            {selectedBook && (
          <div className="title-details">
            <h3>{selectedBook.title}</h3>
            <p>{selectedBook.discription}</p>
          </div>
            )}  
        </div>
    )
}

export default FirstCollection;