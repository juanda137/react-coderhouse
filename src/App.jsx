
//const msj = "Exportando una variable";
//export {msj};
import ProfileCard from "./ProfileCard";
import AlexaImg from "./img/alexa.png";
import CortanaImg from "./img/cortana.png";
import SiriImg from "./img/siri.png";

import "bulma/css/bulma.css";

function App(){


    //console.log(AlexaImg);
    //console.log(CortanaImg);
    //console.log(SiriImg);

    return (

        <div class="container">
            <section className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard titulo="Alexa" handle="@Alexa01" url={AlexaImg}/>
                    </div>  
                    <div className="column is-4">
                        <ProfileCard titulo="Siri" handle="@Siri99" url={SiriImg}/>
                    </div>    
                    <div className="column is-4">
                        <ProfileCard titulo="Cortana" handle="@Cortana54" url={CortanaImg}/> 
                    </div>
                </div>
            </section>     
        </div>

    )
}


export default App;