import React, { useEffect } from "react";
import "./StylesPages/Team.css"

function Team() {
    useEffect(() => {
        document.body.classList.add("team-body");
        return () => {
            document.body.classList.remove("team-body");
        };
    }, []);

    return (
        <div className="team-background">
            <div className="void" id="void">
                <div className="crop">
                    <ul id="card-list">
                        <li className="list-ind"><div className="card"><h2 className="model-name">Lorraine</h2><p className="text-pa">A un regard toujours curieux, aiguisé</p></div></li>
                        <li className="list-ind"><div className="card"><h2 className="model-name">Egle</h2><p className="text-pa">Garde son sang-froid en toutes circonstances</p></div></li>
                        <li className="list-ind"><div className="card"><h2 className="model-name">Gibril</h2><p className="text-pa">S’adapte aux situations, que ce soit par vents favorables ou courants contraires</p></div></li>
                        <li className="list-ind"><div className="card"><h2 className="model-name">Daniela</h2><p className="text-pa">Dispose d’un solide sens de l’humour</p></div></li>
                        <li className="list-ind"><div className="card"><h2 className="model-name">Gregori</h2><p className="text-pa">S’accroche toujours pour atteindre son but</p></div></li>
                        <li className="list-ind"><div className="card"><h2 className="model-name">Sabrina</h2><p className="text-pa">N'a pas peur d’échouer, de tomber et de se relever</p></div></li>
                    </ul>
                    <div className="circle"></div>
                </div>
                <div className="mask"></div>
            </div>
        </div>
    );
}

export default Team;