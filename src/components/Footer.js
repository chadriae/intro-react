import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Footer = () => {
    const [quote, findQuote] = useState("");

    useEffect(() => {
        setQuote();
    },[])

    // random number generator for API request
    const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min; // You can remove the Math.floor if you don't want it to be an integer
    }

    // get inspirational quote
    const setQuote = () => {
        Axios.get("https://type.fit/api/quotes").then((response) => {
            let result = response.data[randomNumber(0, 1643)]
            console.log(result);
            findQuote('"' + result.text + '"' + " - " + result.author);
        });
    }

    return (
        <div className="footer">
            <footer>{quote}</footer>
        </div>
    )
}

export default Footer;