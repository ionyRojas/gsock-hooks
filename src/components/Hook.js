import React, { useState, useEffect, useRef } from 'react';
// import { TweenLite, TimelineLite } from "gsap/TweenLite";
// import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";
// import TweenLite from "gsap/TweenLite";
import { TweenLite, TimelineLite } from "gsap";




// useImperativeHandle(ref, createHandle, [deps])


function Hook () {
    const [count, setCount] = useState(0);
    const buttonRef = useRef(null);
    let myTween = null;

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        debugger
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        // TweenLite.to(buttonRef.current, 10, { x: 100, y: 100 });

        myTween = new TimelineLite({ paused: true })
            .to(buttonRef.current, 0.5, { x: 100, opacity: 0 })
            .to(buttonRef.current, 0.5, { y: 100, rotation: 180, opacity: 1 })
            .play();
    });

    debugger;
    return (
        <div ref={buttonRef}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

export default Hook;