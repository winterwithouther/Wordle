import React, {useState} from "react"
import Box from "./Box"

function Game() {
    const [text, setText] = useState("")
    const [tries, setTries] = useState(5)

    let words = ["funny", "smart", "soare"]
    let chosenWord = words[0]

    if (tries === 0) {
        console.log("You are out of tries")
    }

    function handleTextChange(e) {
        if (text.length < 5) {
            setText(e.target.value)
        } else {
            console.log("Can't go more than 5")
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (text.length === 5) {
            if (chosenWord === text) {
                console.log("You got the word!")
                setText("")
                setTries(5)
            } else {
                console.log("Thats not the right word")
                setText("")
                setTries(tries - 1)
            }
        } else if (text.length < 5) {
            console.log("Too short. Needs more characters")
        } else if (text.length > 5) {
            console.log("Too long. Needs less characters")
        }
    }

    console.log(text)
    return (
        <div>
            <Box />
            {tries > 0 ? <form>
                <input type="text" placeholder="type here" onChange={handleTextChange} name="text" value={text}></input>
                <input type="submit" onClick={handleSubmit}></input>
            </form> : ""}
        </div>
    )
}

export default Game