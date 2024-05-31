import React from "react"

// Defines and exports the Header component as the default export of this module
export default function Header () {
        return (
                <header className="header">
                  {/* Display the troll face image */}
                 <img 
                 src="./images/troll-face.png"
                 className="header--image" />
                 {/* Display the title of the meme generator */}
                 <h2 className="header--title">Meme generator</h2>
                 {/* Display the project information */}
                 <h4 className="header--project">React Course - Project 3</h4>
                </header>
                
        )

}

         