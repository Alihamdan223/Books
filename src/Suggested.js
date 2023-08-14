import {useState} from "react"; 
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const hottestTakes = [
    {
        id: 1, 
        title: "The Fountainhead",
        author: "Ayn Rand",
        cover: "https://cdn2.penguin.com.au/covers/original/9780141188621.jpg",
        details:"The Fountainhead celebrates the heroism of the “men who took first steps down new roads armed with nothing but their own vision.” A core tenet of Ayn Rand's philosophy, Objectivism, is the importance of a central, productive purpose in an individual's life.",
        reviews: [
            "The book is refreshing because most or all people today run through life following the standards created by others. Setting one's own standards and staying true to them means being on an island that will get lonely quick. Build connections as the workers who are connected have more opportunities to move up in the world. Build that web which goes against every thing Rand believes. Once the web comes alive, moving up loses the requirements of being good at what one does. Having been a high school teacher for 32 years at seven different school districts, the teachers who truly make a difference, the best teachers, the teachers who have set their own standards, the teachers who go against the grain, the teachers who win most influential teacher awards have zero friends in the administration buildings of school districts.",
            "Never a reader, a friend loaned me this book in 1976.  It transformed me into an avid reader.  I must read it again.  If I can recall, it digs deep into the emotions ... someone struggling against conformity and his heart.  I still consider it one of the best books I've ever read",
            "I absolutely loved it but I can see why people hate it as well. It's a bit hyper in sticking to ones standard/ideal but I also understand that being very stubborn to one's ideal is probably the only way to be true to oneself. However in the book, the extreme adherence which Howard sticks to , seems too impractical for a real world. But I wish few people like him do exist and someday I get to meet one.",
            "A thrilling, intriguing novel with exciting characters and plot. The story took a direction I didn't quite expect, which only made the read more enjoyable. It gives a clear understanding of Rand's perspective and an introduction to her philosophy."
        ],
        stars: "4.7 Stars"
    },
    {
        id: 2, 
        title: "21 Lessons For The 21st Century",
        author: "Yuval Noah Harari",
        cover: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SRQ33NWLEYI6REQP3VJODLSFOA.jpg&w=1440",
        details: "21 Lessons for the 21st Century Summary. 21 Lessons is an exploration of what it means to be human in an age of bewilderment How can we protect ourselves from nuclear war, ecological cataclysms and technological disruptions? What can we do about the epidemic of fake news or the threat of terrorism?",
        reviews: [
            "There's a lot to unpack here. Harari goes through almost every topic you can name as controversial. Be it Black-White, Straight-Gay, Muslim-Christian, America-Russia, Facebook-Nuclear Missiles, or humanity itself, Harari goes through all. There are gems in this book here and there, but there are also problems with the writing. For instance, Harari makes some assumptions on the part of how people feel about certain things whereas the reality would be completely different.",
            "Pretty good book. My singular contention is in his descriptions of the deaths of ideologies. He describes the end of Fascism, Communism, and even Liberalism, but doesnt substantiate these claims. Is fascism truely dead? There are no fascist govts. However, there weren't facist governments before the rise of the axis powers, and i still would not claim that it was dead or prior to its birth. Fashism exists as a human virus. Our lesser instincts towards deference to power, rhetoric, tribalism, and stories of rebirth resurge in radical communities when not adequately and constantly countered. Fascism, communism, and liberalism are still alive. The fight for a better world and the march of history does not end.",
            "This book is one of my favorites. The author described all controversial points whether AI or terrorist. In this book, you will get to know about geo polity that can help you to understand the world better. And if you are a youth you must read this book. This book is all about liberty, Nationalism, religion, and secularism.",
            "It is the best book as per the time. Superb and a mind-blowing book, it opens your mind and broadens your horizon. Must read because it covers almost all the topics."
        ]
    },
    {
        id: 3,
        title: "Sell Like Crazy",
        author: "Sabri Suby",
        cover: "https://m.media-amazon.com/images/I/411CVWFm92L.jpg",
        details: "Sell Like Crazy reveals an 8-phase selling system for generating absurd amounts of leads, sales and profit for any business in any marketing with digital marketing!",
        reviews: [
            "I bought this book out of curiosity I had heard good things about it. I am still in the planning stages of my business but found this book to be insightful. It breaks down the very simple to understand sales process that Sabri uses himself. It is a step by step walkthrough of a system that has brought Sabri and his clients millions of dollars in revenue. Even if like me you are a newbie to sales, funnels, and understanding the customers journey, this book will clarify what you need to do to build consistent revenue in the right way. I would not hesitate to buy this book.",
            "Suby is Crazy for giving this book away for free. Only paid for shipping, giving away so many resources. Having finished reading the book, His strategy is risky but it works, I have invested so much to not want more. This book is only for those who really want it. i am currently going through each action point and completing and if it pays off imma join their advanced programs. Thank you Genius for sharing the trenches and cutting the learning curves for us coming up.",
            "I'm superbly dumbfounded with the discoveries in this book. I'll forever be indebted to Sabri. Ofcourse, I'm still left in awe why a man will decide to release these ground-breaking truths and principles of sales in such a simplified manner. I will recommend it over again. I haven't even finished my second reading and I'm already seeing interesting changes. If you are truly serious about making sales, GET SABRI'S ''SELL LIKE CRAZY'",
            "Incredible! In this book, I found countless ideas beyond my current mindset. This is the only book I have read twice cover-to-cover within the same week."
        ]
    }
];

const Suggested = () => {

    const [newIndex, setNewIndex] = useState(0); 

    function handleNextIndex() {
        setNewIndex(prevNewIndex => prevNewIndex === hottestTakes.length - 1 ? 0 : prevNewIndex + 1); 
    }

    function handlePrevIndex() {
        setNewIndex(prevNewIndex => prevNewIndex === 0 ? hottestTakes.length - 1 : prevNewIndex - 1); 
    }

    const { id, title, author, cover, details, reviews } = hottestTakes[newIndex];

    return (
        <section className="suggested">
            <div className="suggest-header">
            <h1>The Hottest Books Of The Month</h1>
            <h4>Check Out The Hottest Books Of The Month According To Our Users</h4>
            </div>
            <div className="buttons">
                <div>
                <FaArrowCircleLeft onClick={handlePrevIndex} />
                </div>
                <div>
                <FaArrowCircleRight onClick={handleNextIndex} />
                </div>
                </div>
            <div className="hottest-takes">
                <h3 className="id-h3">{id}</h3>
                <div className="hottest-header">
                <h1>{title}</h1>
                <h3 className="author-h3">{author}</h3>
                </div>
                <img src={cover} />
                <p>{details}</p> 
                <h2>What Did The Readers Think About This Book?</h2>
                {reviews.map((review) => {
                    return <ul className="reviews-list" key={review}>
                        <li>{review}</li>
                    </ul>
                })}
            </div>
        </section>
    )
}

export default Suggested;