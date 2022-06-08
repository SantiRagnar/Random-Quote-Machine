import React from 'react';
import '../style/Quote.css'

export function Quote({text, author, randomQuotes}){

    function getRamdomQuote(){
        const button = document.getElementById("new-quote");
    }

    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa-solid fa-quote-left"></i><span id="text"> {text} </span><i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="quote-author">
                <span id="author">-{author}</span>
            </div>
            <div className="quote-footer">
            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'+ text  + '" ' + author} id="tweet-quote" target="_blank"><i className="fa-brands fa-twitter-square"></i></a>
            <button id="new-quote" >New Quote</button>
            </div>
        </div>
    );
}