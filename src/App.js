import './App.css';
import { useState } from "react"; 
import { ContextOne } from "./Context.js";
import SideBar from "./SideBar";
import TheCollection from "./TheCollection";

const firstSet = [
  {
    id: 1,
    title: "Sapiens: A Brief History Of Humankind",
    cover: "https://m.media-amazon.com/images/I/716E6dQ4BXL._AC_UF1000,1000_QL80_.jpg",
    author: "Yuval Noah Harari",
    discription: "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.” One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?"
  },
  {
    id: 2,
    title: "Guns, Germs, And Steel: The Fates Of Human Societies",
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1453215833i/1842.jpg",
    author: "Jared Diamond",
    discription: "In this 'artful, informative, and delightful' (William H. McNeill, New York Review of Books) book, Jared Diamond convincingly argues that geographical and environmental factors shaped the modern world. Societies that had a head start in food production advanced beyond the hunter-gatherer stage, and then developed writing, technology, government, and organized religion—as well as nasty germs and potent weapons of war—and adventured on sea and land to conquer and decimate preliterate cultures. A major advance in our understanding of human societies, Guns, Germs, and Steel chronicles the way that the modern world came to be and stunningly dismantles racially based theories of human history."
  },
  {
    id: 3,
    title: "The Ancestor's Tale",
    cover: "https://m.media-amazon.com/images/I/71qqpJruhvL._AC_UF894,1000_QL80_.jpg",
    author: "Richard Dawkins",
    discription: "The renowned biologist and thinker Richard Dawkins presents his most expansive work yet: a comprehensive look at evolution, ranging from the latest developments in the field to his own provocative views. Loosely based on the form of Chaucer's Canterbury Tales, Dawkins's Tale takes us modern humans back through four billion years of life on our planet. As the pilgrimage progresses, we join with other organisms at the forty 'rendezvous points' where we find a common ancestor. The band of pilgrims swells into a vast crowd as we join first with other primates, then with other mammals, and so on back to the first primordial organism."
  },
  {
    id: 4,
    title: "The Third Chimpanzee",
    cover: "https://m.media-amazon.com/images/I/71lR8fclgcL._AC_UF1000,1000_QL80_.jpg",
    author: "Jared Diamond",
    discription: "At some point during the last 100,000 years, humans began exhibiting traits and behavior that distinguished us from other animals, eventually creating language, art, religion, bicycles, spacecraft, and nuclear weapons—all within a heartbeat of evolutionary time. Now, faced with the threat of nuclear weapons and the effects of climate change, it seems our innate tendencies for violence and invention have led us to a crucial fork in our road. Where did these traits come from? Are they part of our species immutable destiny? Or is there hope for our species’ future if we change?"
  },
  {
    id: 5,
    title: "The Origin Of Species",
    cover: "https://m.media-amazon.com/images/I/71UtlN4QfUL._AC_UF1000,1000_QL80_.jpg",
    author: "Charles Darwin",
    discription: "Darwin's theory of natural selection issued a profound challenge to orthodox thought and belief: no being or species has been specifically created; all are locked into a pitiless struggle for existence, with extinction looming for those not fitted for the task."
  }
];

const secondSet = [
  {
    id: 6, 
    title: "Beyond Good And Evil",
    cover: "https://m.media-amazon.com/images/I/81Kr+YIWjCL._AC_UF1000,1000_QL80_.jpg",
    author: "Friedrich Nietzsche",
    discription: "A caustic criticism of nearly every philosophic predecessor and a challenge of traditionally held views on right and wrong, Friedrich Nietzsche’s Beyond Good and Evil paved the way for modern philosophical thought. Through nearly three hundred transformative aphorisms, Nietzsche presents a worldview in which neither truth nor morality are absolutes, and where good and evil are not opposites but counterparts that stem from the same desires."
  },
  {
    id: 7,
    title: "Nicomachaen Ethics",
    cover: "https://m.media-amazon.com/images/I/61OL0IoKMxL._AC_UF1000,1000_QL80_.jpg",
    author: "Aristotle",
    discription: "The Nicomachaen Ethics is Aristotle's best-known work on ethics: the science of the good for human life, that which is the goal or end at which all our actions aim. It consists of ten subsections, referred to as books or scrolls, and is closely related to Aristotle's Eudemian Ethics. The work plays a pre-eminent role in explaining Aristotelian ethics."
  },
  {
    id: 8,
    title: "Discourse On Methods",
    cover: "https://cdn.kobo.com/book-images/24cdd364-5019-442b-9d6c-baac317bb6c6/1200/1200/False/discourse-on-method-2.jpg",
    author: "Rene Descartes",
    discription: "Discourse on Method introduces the scientific method that Descartes invented, explains how his views came about, and describes why he has been so hesitant to publish. In addition to its insight into Descartes's philosophy and method, it also gives us insight into the intellectual climate of his time."
  },
  {
    id: 9,
    title: "On Certainty",
    cover: "https://m.media-amazon.com/images/I/711VQiuITML._AC_UF1000,1000_QL80_.jpg",
    author: "Ludwig Wittgenstein",
    discription: "On Certainty is a series of notes Wittgenstein took toward the end of his life on matters related to knowledge, doubt, skepticism, and certainty. Although the notes are not organized into any coherent whole, certain themes and preoccupations recur throughout."
  },
  {
    id: 10,
    title: "Meditations",
    cover: "https://booksondemand.ma/cdn/shop/products/81cxa034DJL-min.jpg?v=1653911545",
    author: "Marcus Aurelius",
    discription: "What is Meditations about? Meditations (170-180 AD) is a journey through the mind of the great Roman emperor, Marcus Aurelius. These blinks offer philosophical ruminations on the meaning of death and justice, the nature of the world and why things happen the way they do."
  }
]

function App() {

  const [index, setIndex] = useState(0);
  const [selectedBook, setSelectedBook] = useState(null);

  const collection = [firstSet, secondSet];

  function handleNext() {
    setIndex(prevIndex => prevIndex === collection.length - 1 ? 0 : prevIndex + 1);
    setSelectedBook(null);
  }

  function handlePrev() {
    setIndex(prevIndox => prevIndox === 0 ? collection.length - 1 : prevIndox - 1); 
    setSelectedBook(null);
  }

  function handleToggle(book) {
    setSelectedBook(prevSelect => prevSelect === book ? null : book);
  }

  return (
    <div>
      <div className="wrapper">
      <SideBar />
      <ContextOne.Provider value={{collection, index, handleNext, handlePrev, selectedBook, handleToggle}}>
        <TheCollection />
      </ContextOne.Provider>
      </div>
      </div>
  );
}

export default App;
