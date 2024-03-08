import Header from "../components/header";
import Footer from "../components/footer";
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
            <div className={"open-call_container clickable"}>
                <h1 className={"heavy"}>OPEN CALL</h1>
                <h1 className={""}>Designers in Residence Kortrijk 2024</h1>
            </div>
            <Footer/>
        </div>
    );

}

export default Home;