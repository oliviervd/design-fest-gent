import {route} from "preact-router"

const Header = (props) => {

    function select(lang) {
        props.setLanguage(lang);
        // reset styles
        let parent = document.getElementById("lang")
        let children = parent.children;
        for (let i = 0; i < children.length; i ++) {
            children[i].classList.remove("selected")
        }
        // style selected item
        let element = document.getElementById(lang)
        element.className="selected"
    }

    let date = {
        // todo: generate based on input CMS
        "en": "March, 20-30; 2025",
        "nl": "20 - 30 maart 2025",
        "fr": "20 - 30 Mars, 2025"
    }

    return(
        <header>
            <h1 onClick={()=>route("/")}>Design Fest Gent</h1>
            <div>
                <h1 onClick={()=>route("/")} className={"main-title"}>All The Small Things</h1>
                <p className={"main-title_sub"}>{date[props.language]}</p>
            </div>
            <nav>
                <h1 onClick={()=>route("/people")}>people</h1>
                <h1 className={"inactive"}>reader</h1>
                <h1 onClick={()=>route("/about")}>about</h1>
                <div id={"lang"}>
                    <h1 onClick={()=> select("nl") } id={"nl"}>nl</h1>
                    <h1 onClick={()=> select("en") } id={"en"} className={"selected"}>en</h1>
                    <h1 onClick={()=> select("fr") } id={"fr"}>fr</h1>
                </div>
            </nav>
        </header>
    )
}

export default Header