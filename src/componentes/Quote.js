import React,{useEffect,useState} from 'react';

export function Quote({text, author}){

    const handleRandomQuote = () =>{
         
    }

    return (
        <div id="quote-box">
            <div className="quote-text">
                <i className="fa-solid fa-quote-left"></i><span id="text">{text}</span><i className="fa-solid fa-quote-right"></i>
            </div>
            <div className="quote-author">
                <span id="author">-{author}</span>
            </div>
            <div className="quote-footer">
            <a href='#' id="tweet-quote"><i className="fa-brands fa-twitter-square"></i></a>
            <button id="new-quote" onClick={handleRandomQuote}>New Quote</button>
            </div>
        </div>
    );
}