import Header from "../components/header";
import {fetchPayload} from "../utils/utils";
import {useEffect, useState} from "preact/hooks";
import circularText from "../components/circularText";
import CircularText from "../components/circularText";
const People = () => {

    // todo: fetch people
    const baseURI:string = "https://p01--admin-cms--qbt6mytl828m.code.run";
    const [people, setPeople] = useState([])
    console.log(people)

    useEffect(() => {
        fetchPayload(baseURI, "agents", 100, "en").then((data)=>{
            setPeople(data["docs"])
        })
    }, []);

    return (
        <div>
            <Header/>
            <p className={"people_intro"}>gathering many people doing small things...</p>
            {people.map((p)=>{
                let name = p.firstName + " " + p.familyName
                return(
                    <div className={"personal-space"}>
                       <CircularText text={p.firstName} radius={20}/>
                        <p>{name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default People;