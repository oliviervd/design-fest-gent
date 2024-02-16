import Header from "../components/header";
import {fetchPayload} from "../utils/utils";
import {useEffect, useState} from "preact/hooks";
import circularText from "../components/circularText";
import CircularText from "../components/circularText";
const People = () => {

    // todo: fetch people
    const baseURI:string = "https://p01--admin-cms--qbt6mytl828m.code.run";
    const [people, setPeople] = useState([])
    const [language, setLanguage] = useState("en")

    console.log(people)

    useEffect(() => {
        fetchPayload(baseURI, "agents", 100, "en").then((data)=>{
            setPeople(data["docs"])
        })
    }, []);

    return (
        <div>
            <Header setLanguage={setLanguage} language={language}/>
            <p className={"people_intro"}>gathering many people doing small things...</p>
            {people.map((p, index)=>{
                let name = p.firstName + " " + p.familyName
                const [isHovered, setIsHovered] = useState(false); // Local state to manage hover
                return(
                    <div key={index} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={"personal-space"}>
                        <CircularText text={p.firstName} radius={30}/>
                        <p className={isHovered ? "visible" : "hidden"}>{name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default People;