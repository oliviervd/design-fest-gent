import {useEffect, useState} from "preact/hooks";
import {fetchPayload, serialize} from "../utils/utils";
import Header from "../components/header";

const About = () => {
    const [about, setAbout] = useState([])
    const [statement, setStatement] = useState([])
    const [language, setLanguage] = useState("en")

    console.log(language)

    // todo: move to env
    const baseURI:string = "https://p01--admin-cms--qbt6mytl828m.code.run";
    // fetch data
    useEffect(() => {
        fetchPayload(baseURI, "texts", 10, language).then((data)=>{
            const _unserializedText = data["docs"]
            for (let i = 0; i < data["docs"].length; i++) {
                if (data["docs"][i]["id"]=="about_fest") {
                    const _serializedText = serialize(data["docs"][i]["text"][0])
                    setAbout(_serializedText);
                }
                if (data["docs"][i]["id"] == "curatorial_statement") {
                    let _serializedText = ""; // Reset the _serializedText for the curatorial statement
                    // Iterate over all text children and append them
                    data["docs"][i]["text"].forEach((textChild, index) => {
                        _serializedText += serialize(textChild);
                        // Add an escape character or separator if it's not the last item
                        if (index < data["docs"][i]["text"].length - 1) {
                            _serializedText += "<br/><br/>"; // Add a space or your desired separator
                        }
                    });
                    setStatement(_serializedText);
                }
            }

        })
    }, [language]);

    return (
        <div>
            <Header setLanguage={setLanguage} language={language}/>
            <section>
                <div className={"about"}>
                    <p dangerouslySetInnerHTML={{__html: about}}></p>
                    <p dangerouslySetInnerHTML={{__html: statement}}></p>
                </div>
            </section>
            <section>
                <div className={"partners_container"}>
                    <h1 className={"about"}>partners</h1>
                </div>
            </section>
        </div>
    );
}

export default About