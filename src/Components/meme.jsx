import React from "react"

//Defines and exports the Meme component as the default export of this module

export default function Meme() {
    const [meme, setMeme] = React.useState({
        //Define the state variabkes for meme and allMemes using the useState hook.
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" //Added a default image
    })
    const [allMemes, setAllMemes] = React.useState([]) //Initialize allMemes as an empty array
    
   //useEffect hook to fetch meme data from Api when the component mounts
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) 
            .then(data => setAllMemes(data.data.memes)) // Store fetched meme data
    }, [])// Empty dependency array which meanst this effect runs once on mount
    //Function to retrieve a random meme image from the allMemes array
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length) //Generates a random index within the range of allMemes
        const url = allMemes[randomNumber].url // Extraxts the URL of the randomly selected meme
        setMeme(prevMeme => ({
            ...prevMeme, //Preserve the existing meem state
            randomImage: url //Update the randomImage state with the new URL
        }))
        
    }
    //Function to handle changes in the input field
    function handleChange(event) {
        const {name, value} = event.target //Extract the name and value from the event target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value //Updates the corresponding field with the new value
        }))
    }
    
    return (
        <main>
            <div className="form">
                {/*Input fiels for the top text of the meme*/}
                <label>Top Text
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText} //Associate the value with the topText state
                    onChange={handleChange} //Call handleChange when the input changes
                />
                </label>
                <label> Bottom Text
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText} // Associate the value with the bottom text state
                    onChange={handleChange}
                />
                </label>
                {/* Button to fetch a new random meme image */}
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                {/* Display the randomly selected meme image */}
                <img src={meme.randomImage} className="meme--image" />
                 {/* Display the top text on the meme image */}
                <h2 className="meme--text top">{meme.topText}</h2>
                {/* Display the bottom text on the meme image */}
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}