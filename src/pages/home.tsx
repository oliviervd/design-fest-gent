import Header from "../components/header";
import {useState} from "preact/hooks";
const Home = () => {

    const [language, setLanguage] = useState("en")

    return (
        <div>
            <Header setLanguage={setLanguage} language={language}/>
        </div>
    );

}

export default Home;