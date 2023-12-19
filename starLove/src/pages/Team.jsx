import "./StylesPages/Team.css"



function Team() {
    return (
        <div className="void" id="void">
            <div className="crop">
                <ul id="card-list">
                    <li><div className="card"><h1 className="model-name">Lorraine</h1><p>Model for generating highly dimensional, mostly numeric, tabular data</p></div></li>
                    <li><div className="card"><h1 className="model-name">Egle</h1><p>Model for generating highly dimensional, mostly numeric, tabular data</p></div></li>
                    <li><div className="card"><h1 className="model-name">Gibril</h1><p>Model for generating highly dimensional, mostly numeric, tabular data</p></div></li>
                    <li><div className="card"><h1 className="model-name">Daniela</h1><p>Model for generating highly dimensional, mostly numeric, tabular data</p></div></li>
                    <li><div className="card"><h1 className="model-name">Gregory</h1><p>Model for generating highly dimensional, mostly numeric, tabular data</p></div></li>
                    <li><div className="card"><h1 className="model-name">Sabrina</h1><p>Model for generating highly dimensional, mostly numeric, tabular data</p></div></li>
                </ul>
                <div className="last-circle"></div>
                <div className="second-circle"></div>
            </div>
            <div className="mask"></div>
            <div className="center-circle"></div>
        </div>
    );
}

export default Team;