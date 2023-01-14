import ShortSurvey from "./ShortSurvey";
import "./CSS Files/MainElement.css";
import PageIntro from "./PageIntro";

function MainElement () {

    return (
        <main>
            <PageIntro />
            <ShortSurvey /> 
        </main>
    )
}

export default MainElement;