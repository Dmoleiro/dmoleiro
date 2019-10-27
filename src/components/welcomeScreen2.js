import React, {Component} from 'react';
import '../styles/welcomeScreen2.css';

class WelcomeScreen2 extends Component {
    componentDidMount() {
        setTimeout(() => {
            let doc = window.document;
            if (doc !== null && doc !== undefined) {
                doc.body.style.overflowY = 'auto'
            }
        }, 3600);
    }

    render() {
        return (
            <div className='welcomeContainer'>
                <div className='welcomeInnerContainer'>
                    <div className="codeLine"><mark className="blueText">{"<!DOCTYPE"}</mark><mark className="yellowText">{" html"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine"><mark className="blueText">{"<"}</mark><mark className="pinkText">{"html"}</mark><mark className="yellowText">{" lang="}</mark><mark className="greenText">{"\"en\""}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;<mark className="blueText">{"<"}</mark><mark className="pinkText">{"head"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark className="blueText">{"<"}</mark><mark className="pinkText">{"title"}</mark><mark className="blueText">{">"}</mark><mark className="whiteText">{"Daniel Ferreira"}</mark><mark className="blueText">{"</"}</mark><mark className="pinkText">{"title"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;<mark className="blueText">{"</"}</mark><mark className="pinkText">{"head"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;<mark className="blueText">{"<"}</mark><mark className="pinkText">{"body"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark className="blueText">{"<"}</mark><mark className="pinkText">{"h1"}</mark><mark className="blueText">{">"}</mark><mark className="whiteText">{" Hey There I'm Daniel "}</mark><mark className="blueText">{"</"}</mark><mark className="pinkText">{"h1"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark className="blueText">{"<"}</mark><mark className="pinkText">{"h2"}</mark><mark className="blueText">{">"}</mark><mark className="whiteText">{" and this is my personal website "}</mark><mark className="blueText">{"</"}</mark><mark className="pinkText">{"h2"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark className="blueText">{"<"}</mark><mark className="pinkText">{"h3"}</mark><mark className="blueText">{">"}</mark><mark className="whiteText">{" scroll down for more... "}</mark><mark className="blueText">{"</"}</mark><mark className="pinkText">{"h3"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine">&nbsp;&nbsp;<mark className="blueText">{"</"}</mark><mark className="pinkText">{"body"}</mark><mark className="blueText">{">"}</mark></div>
                    <div className="codeLine"><mark className="blueText">{"</"}</mark><mark className="pinkText">{"html"}</mark><mark className="blueText">{">"}</mark></div>
                    &nbsp;&nbsp;<span className="cursor">|</span>
                </div>
            </div>
        );
    }
}

export default WelcomeScreen2;

/*
<p>{"<!DOCTYPE html>"}</p>
<p>{"<html lang="en">"}</p>
  <p>{"<head>"}</p>
    <p>{"<title>Daniel Ferreira</title>"}</p>
  <p>{"</head>"}</p>
  <p>{"<body>"}</p>
    <p>{"<p>Hey There I'm Daniel</p>"}</p>
	<p>{"<p>And this is my personal website</p>"}</p>
	<p>{"<p>Scroll down for more...</p>"}</p>
  <p>{"</body>"}</p>
<p>{"</html>"}</p>
 */