import React, { useState, useEffect } from 'react';
import ScrollTrigger from './react-scroll-trigger.js';
import './style.css';

let containerStyle = {
    height: '400px',
    overflow: 'scroll',
    border: '1px dashed black'
}

let fakePageStyle = {
    height: '300px',
    width: '300px',
    border: '2px solid blue'
}

const TOTAL_FAKE_PAGES = 6;


export default function AppScrollTrigger() {
    const [visible, setVisible] = useState([]);
    const [progress, setProgress] = useState({});
    const [regularEnter, setRegularEnter] = useState();
    const [regularProgress, setRegularProgress] = useState();
    const [myRef, setMyRef] = useState();

    useEffect(() => {
        INIT_SCROLL();
    }, [])

    const handleOnEnter = index => event => {
        let newVisible = [...visible, index].sort();
        setVisible(newVisible);
    }

    const handleOnExit = index => event => {
        let newVisible = visible.filter(v => v !== index);
        newVisible.sort();
        setVisible(newVisible);
    }

    const handleOnProgress = index => event => {
        let name = `Panel_${[index]}`;
        setProgress({
            ...progress,
            [name]: event
        });
    }

    const handleRegularEnter = message => _ => {
        setRegularEnter("Setting message...");
        setTimeout(() => { setRegularEnter(message) }, 1200)
    }

    const handleRegularProgress = event => {
        setRegularProgress(event);
    }

    return (
        <>
            <div ref={r => setMyRef(r)} style={containerStyle} >
                <div id="placeholder_for_scroll_top"></div> {/* YOU CAN IGNORE THIS */}

                <div className="sticky">
                    <pre>VisiblePanels: {JSON.stringify(visible, null, 2)}</pre>
                    <pre>ProgressData: {JSON.stringify(progress, null, 2)}</pre>
                </div>

                {Array.from(new Array(TOTAL_FAKE_PAGES), (el, index) => (
                    <ScrollTrigger
                        containerRef={myRef}
                        onEnter={handleOnEnter(index)}
                        onExit={handleOnExit(index)}
                        onProgress={handleOnProgress(index)} >
                        <div style={fakePageStyle}>
                            Panel_{index}
                        </div>
                    </ScrollTrigger>
                ))}

                <div id="placeholder_for_scroll_bottom"></div> {/* YOU CAN IGNORE THIS */}
            </div>
            <div className="ta-center">
                <h2>
                    I wanted a way to be able to key on nested <code>div</code>'s within a <code>div</code>, which was not possible before.
                </h2>
                <h2>
                    I made this demo to show how you can track <code>div</code>'s within a scrollable <code>div</code>, while still keeping the original functionality in tact.  
                </h2>
                <h2>
                    If you scroll to the *very* bottom of this page, you can test out "regular" functionality. 
                </h2>
                <h2>
                    You can find the code for this demo <a rel="noopener noreferrer" target="_blank" href="https://github.com/oze4/react-scroll-trigger-container">at the following location...</a>
                </h2>
            </div>
            {Array.from(new Array(50), (el, index) => (
                <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque, lectus in pharetra blandit, augue mauris pulvinar erat, ut euismod nibh lectus sed diam. Nulla fringilla ultrices ligula. Aliquam vitae felis metus. Maecenas lacinia bibendum accumsan. Curabitur lobortis convallis purus non imperdiet. Morbi ut vulputate mauris. Curabitur lacinia faucibus volutpat. Nulla elit tortor, rhoncus ut luctus eget, blandit in risus. Integer accumsan ullamcorper lorem id porttitor. Aliquam vitae libero eget magna mollis gravida.</p>
            ))}
            <ScrollTrigger onEnter={handleRegularEnter('HIII')} onProgress={handleRegularProgress}>
                <div style={{ height: '100vh' }}>
                    <h1>HIIIII</h1>
                    <pre>onEnter('{regularEnter}')</pre>
                    <pre>{JSON.stringify(regularProgress, null, 2)}</pre>
                </div>
            </ScrollTrigger>
        </>
    );
}


function INIT_SCROLL() {
    let b = document.getElementById("placeholder_for_scroll_bottom");
    let t = document.getElementById("placeholder_for_scroll_top");
    let to = 800;
    setTimeout(() => { b.scrollIntoView() }, to);
    setTimeout(() => { t.scrollIntoView() }, to + 200)
}