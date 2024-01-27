import React from "react"
import "../css/Box.css"

function Box({tries, letters, text, allWords, savedLetters}) {

    return (<div className="boxes">
        <div id="box-1" className="box">
            <div id="square-1" className={allWords.length >= 1 ? (savedLetters[0]["correct"][0] === (allWords[0][0].toUpperCase()) ? "square correct" : (savedLetters[0]["place"][0] === (allWords[0][0].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 1 ? allWords[0][0] : ""}</div>
            <div id="square-2" className={allWords.length >= 1 ? (savedLetters[0]["correct"][1] === (allWords[0][1].toUpperCase()) ? "square correct" : (savedLetters[0]["place"][1] === (allWords[0][1].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 1 ? allWords[0][1] : ""}</div>
            <div id="square-3" className={allWords.length >= 1 ? (savedLetters[0]["correct"][2] === (allWords[0][2].toUpperCase()) ? "square correct" : (savedLetters[0]["place"][2] === (allWords[0][2].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 1 ? allWords[0][2] : ""}</div>
            <div id="square-4" className={allWords.length >= 1 ? (savedLetters[0]["correct"][3] === (allWords[0][3].toUpperCase()) ? "square correct" : (savedLetters[0]["place"][3] === (allWords[0][3].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 1 ? allWords[0][3] : ""}</div>
            <div id="square-5" className={allWords.length >= 1 ? (savedLetters[0]["correct"][4] === (allWords[0][4].toUpperCase()) ? "square correct" : (savedLetters[0]["place"][4] === (allWords[0][4].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 1 ? allWords[0][4] : ""}</div>
        </div>
        <div id="box-2" className="box">
            <div id="square-1" className={allWords.length >= 2 ? (savedLetters[1]["correct"][0] === (allWords[1][0].toUpperCase()) ? "square correct" : (savedLetters[1]["place"][0] === (allWords[1][0].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 2 ? allWords[1][0] : ""}</div>
            <div id="square-2" className={allWords.length >= 2 ? (savedLetters[1]["correct"][1] === (allWords[1][1].toUpperCase()) ? "square correct" : (savedLetters[1]["place"][1] === (allWords[1][1].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 2 ? allWords[1][1] : ""}</div>
            <div id="square-3" className={allWords.length >= 2 ? (savedLetters[1]["correct"][2] === (allWords[1][2].toUpperCase()) ? "square correct" : (savedLetters[1]["place"][2] === (allWords[1][2].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 2 ? allWords[1][2] : ""}</div>
            <div id="square-4" className={allWords.length >= 2 ? (savedLetters[1]["correct"][3] === (allWords[1][3].toUpperCase()) ? "square correct" : (savedLetters[1]["place"][3] === (allWords[1][3].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 2 ? allWords[1][3] : ""}</div>
            <div id="square-5" className={allWords.length >= 2 ? (savedLetters[1]["correct"][4] === (allWords[1][4].toUpperCase()) ? "square correct" : (savedLetters[1]["place"][4] === (allWords[1][4].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 2 ? allWords[1][4] : ""}</div>
        </div>
        <div id="box-3" className="box">
            <div id="square-1" className={allWords.length >= 3 ? (savedLetters[2]["correct"][0] === (allWords[2][0].toUpperCase()) ? "square correct" : (savedLetters[2]["place"][0] === (allWords[2][0].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 3 ? allWords[2][0] : ""}</div>
            <div id="square-2" className={allWords.length >= 3 ? (savedLetters[2]["correct"][1] === (allWords[2][1].toUpperCase()) ? "square correct" : (savedLetters[2]["place"][1] === (allWords[2][1].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 3 ? allWords[2][1] : ""}</div>
            <div id="square-3" className={allWords.length >= 3 ? (savedLetters[2]["correct"][2] === (allWords[2][2].toUpperCase()) ? "square correct" : (savedLetters[2]["place"][2] === (allWords[2][2].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 3 ? allWords[2][2] : ""}</div>
            <div id="square-4" className={allWords.length >= 3 ? (savedLetters[2]["correct"][3] === (allWords[2][3].toUpperCase()) ? "square correct" : (savedLetters[2]["place"][3] === (allWords[2][3].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 3 ? allWords[2][3] : ""}</div>
            <div id="square-5" className={allWords.length >= 3 ? (savedLetters[2]["correct"][4] === (allWords[2][4].toUpperCase()) ? "square correct" : (savedLetters[2]["place"][4] === (allWords[2][4].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 3 ? allWords[2][4] : ""}</div>
        </div>
        <div id="box-4" className="box">
            <div id="square-1" className={allWords.length >= 4 ? (savedLetters[3]["correct"][0] === (allWords[3][0].toUpperCase()) ? "square correct" : (savedLetters[3]["place"][0] === (allWords[3][0].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 4 ? allWords[3][0] : ""}</div>
            <div id="square-2" className={allWords.length >= 4 ? (savedLetters[3]["correct"][1] === (allWords[3][1].toUpperCase()) ? "square correct" : (savedLetters[3]["place"][1] === (allWords[3][1].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 4 ? allWords[3][1] : ""}</div>
            <div id="square-3" className={allWords.length >= 4 ? (savedLetters[3]["correct"][2] === (allWords[3][2].toUpperCase()) ? "square correct" : (savedLetters[3]["place"][2] === (allWords[3][2].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 4 ? allWords[3][2] : ""}</div>
            <div id="square-4" className={allWords.length >= 4 ? (savedLetters[3]["correct"][3] === (allWords[3][3].toUpperCase()) ? "square correct" : (savedLetters[3]["place"][3] === (allWords[3][3].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 4 ? allWords[3][3] : ""}</div>
            <div id="square-5" className={allWords.length >= 4 ? (savedLetters[3]["correct"][4] === (allWords[3][4].toUpperCase()) ? "square correct" : (savedLetters[3]["place"][4] === (allWords[3][4].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 4 ? allWords[3][4] : ""}</div>
        </div>
        <div id="box-5" className="box">
            <div id="square-1" className={allWords.length >= 5 ? (savedLetters[4]["correct"][0] === (allWords[4][0].toUpperCase()) ? "square correct" : (savedLetters[4]["place"][0] === (allWords[4][0].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 5 ? allWords[4][0] : ""}</div>
            <div id="square-2" className={allWords.length >= 5 ? (savedLetters[4]["correct"][1] === (allWords[4][1].toUpperCase()) ? "square correct" : (savedLetters[4]["place"][1] === (allWords[4][1].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 5 ? allWords[4][1] : ""}</div>
            <div id="square-3" className={allWords.length >= 5 ? (savedLetters[4]["correct"][2] === (allWords[4][2].toUpperCase()) ? "square correct" : (savedLetters[4]["place"][2] === (allWords[4][2].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 5 ? allWords[4][2] : ""}</div>
            <div id="square-4" className={allWords.length >= 5 ? (savedLetters[4]["correct"][3] === (allWords[4][3].toUpperCase()) ? "square correct" : (savedLetters[4]["place"][3] === (allWords[4][3].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 5 ? allWords[4][3] : ""}</div>
            <div id="square-5" className={allWords.length >= 5 ? (savedLetters[4]["correct"][4] === (allWords[4][4].toUpperCase()) ? "square correct" : (savedLetters[4]["place"][3] === (allWords[4][4].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 5 ? allWords[4][4] : ""}</div>
        </div>
        <div id="box-6" className="box">
            <div id="square-1" className={allWords.length >= 6 ? (savedLetters[5]["correct"][0] === (allWords[5][0].toUpperCase()) ? "square correct" : (savedLetters[5]["place"][0] === (allWords[5][0].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 6 ? allWords[5][0] : ""}</div>
            <div id="square-2" className={allWords.length >= 6 ? (savedLetters[5]["correct"][1] === (allWords[5][1].toUpperCase()) ? "square correct" : (savedLetters[5]["place"][1] === (allWords[5][1].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 6 ? allWords[5][1] : ""}</div>
            <div id="square-3" className={allWords.length >= 6 ? (savedLetters[5]["correct"][2] === (allWords[5][2].toUpperCase()) ? "square correct" : (savedLetters[5]["place"][2] === (allWords[5][2].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 6 ? allWords[5][2] : ""}</div>
            <div id="square-4" className={allWords.length >= 6 ? (savedLetters[5]["correct"][3] === (allWords[5][3].toUpperCase()) ? "square correct" : (savedLetters[5]["place"][3] === (allWords[5][3].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 6 ? allWords[5][3] : ""}</div>
            <div id="square-5" className={allWords.length >= 6 ? (savedLetters[5]["correct"][4] === (allWords[5][4].toUpperCase()) ? "square correct" : (savedLetters[5]["place"][4] === (allWords[5][4].toUpperCase())) ? "square place" : "square incorrect") : "square"}>{allWords.length >= 6 ? allWords[5][4] : ""}</div>
        </div>
    </div>)
}

export default Box