import React,{useState} from 'react';
import '../style/Quote.css'

export function Quote({text, author, arr}){
    const [rquote, setrquote] = useState()
    const [rauthor, setrauthor] = useState()
    
    function rQuotes(){
        let random = arr.quotes[Math.round(Math.random()*arr.quotes.length)];
        text = random.quote;
        author = random.author;
        setrquote(text);
        setrauthor(author);
    }

    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa-solid fa-quote-left"></i><span id="text"> {rquote === undefined ? text : rquote} </span><i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="quote-author">
                <span id="author">-{rauthor === undefined ? author : rauthor}</span>
            </div>
            <div className="quote-footer">
            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'+ (rquote === undefined ? text : rquote) + '" ' + (rauthor === undefined ? author : rauthor)} id="tweet-quote" target="_blank"><i className="fa-brands fa-twitter-square"></i></a>
            <button id="new-quote" onClick={rQuotes}>New Quote</button>
            </div>
        </div>
    );
}