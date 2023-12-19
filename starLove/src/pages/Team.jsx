import "./StylesPages/Team.css"



function Team() {
    return (
        <div className="void" id="void">
            <div className="crop">
                <ul id="card-list">
                    <li><div className="card"><h1 className="model-name">Lorraine</h1><p>A un regard toujours curieux, aiguisé</p></div></li>
                    <li><div className="card"><h1 className="model-name">Egle</h1><p>Garde son sang-froid en toutes circonstances</p></div></li>
                    <li><div className="card"><h1 className="model-name">Gibril</h1><p>S’adapte aux situations, que ce soit par vents favorables ou courants contraires</p></div></li>
                    <li><div className="card"><h1 className="model-name">Daniela</h1><p>Dispose d’un solide sens de l’humour</p></div></li>
                    <li><div className="card"><h1 className="model-name">Gregory</h1><p>S’accroche toujours pour atteindre son but</p></div></li>
                    <li><div className="card"><h1 className="model-name">Sabrina</h1><p>N'a pas peur d’échouer, de tomber et de se relever</p></div></li>
                </ul>
                <div className="circle"></div>
            </div>
            <div className="mask"></div>
        </div>
    );
}

export default Team;