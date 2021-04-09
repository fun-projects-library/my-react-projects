import emojipedia from "../emojipedia"
import Entry from "./Entry"



export default function App() {
    
    return (
        <div>
            <h1>Emoji Library</h1>
        <div className="dictionary">
            {emojipedia.map((element,index) => (
                <Entry emojiId={element.id} emojiPic={element.emoji} emojiName={element.name} emojiMean={element.meaning} key={index}/>
    ))}
        </div>
        </div>
    )
}




