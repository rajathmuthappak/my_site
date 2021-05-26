import React, { useEffect } from 'react';


function GotoTop() {

    useEffect(() => {
        window.onscroll = () => {
            scrollFunction()
        }
    }, []);

    window.onScroll = () => { scrollFunction() };
    const scrollFunction = () => {
        if (document.getElementById("myBtn") && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button onClick={topFunction} id="myBtn" title="Go to top">Top</button>
    )
}

export default GotoTop;