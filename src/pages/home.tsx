import Header from "../components/header";
import {useState} from "preact/hooks";
import CircularText from "../components/circularText";
const Home = () => {

    const [language, setLanguage] = useState("en")

    let placeholder = {
        "en": "We are currently gathering All the Small Things..",
        "nl": "We rapen momenteel alle kleine beetjes bij elkaar..",
        "fr": "Nous rassemblons actuellement tous les petits détails.."
    }

    return (
        <div>
            <Header setLanguage={setLanguage} language={language}/>
            <div className={"hero_placeholder"}>
                <CircularText text={"Gathering All The Small Things "} radius={200}/>
            </div>
        </div>
    );

}

export default Home;