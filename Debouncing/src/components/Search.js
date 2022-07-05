import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);
        
        return () => {
            clearTimeout(timer);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
          const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
              action: "query",
              list: "search",
              origin: "*",
              format: "json",
              srsearch: debouncedTerm,
            },
          });
    
          setResults(data.query.search);
        };
        if (debouncedTerm) {
          search();
        }
      }, [debouncedTerm]);
   

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        rel="noreferrer"
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label>
                    Enter for Search Term
                </label>
                <input
                    value={term}
                    className="input"
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}

export default Search