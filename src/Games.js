import Knockout from "./Knockout";

const Games = () => {
    const theTable = {
      titles: [
        {
          title: "Group A",
          teams: ["Netherlands", "Senegal", "Ecuador", "Qatar"]
        },
        {
          title: "Group B",
          teams: ["England", "United States", "Iran", "Wales"]
        },
        {
          title: "Group C",
          teams: ["Argentina", "Poland", "Mexico", "Saudi Arabia"]
        }, 
        {
          title: "Group D",
          teams: ["France", "Australia", "Tunisia", "Denmark"]
        }, 
        {
          title: "Group E",
          teams: ["Japan", "Spain", "Germany", "Costa Rica"]
        }, 
        {
          title: "Group F",
          teams: ["Morocco", "Croatia", "Belgium", "Canada"]
        }, 
        {
          title: "Group G",
          teams: ["Brazil", "Switzerland", "Serbia", "Cameroon"]
        }, 
        {
          title: "Group H",
          teams: ["Portugal", "South Korea", "Uruguay", "Ghana"]
        }
      ]
    };
  
    return (
      <section className="game-section">
        <h1>
          Standings
        </h1>
      <div className="table-container">
        {theTable.titles.map((table, index) => (
          <table key={index} className="groups-data">
            <thead>
              <tr>
                <th>{table.title}</th>
              </tr>
              </thead>
              <tbody>
              {table.teams.map((team, index) => (
                <tr key={index}>
                  <td>{team}</td>
                </tr>
              ))}
              </tbody>
          </table>
        ))}
      </div>
      <div className="knockout-comp">
        <Knockout />
      </div>
      <div className="more-details">
        <h2>CHAMPIONS</h2>
        <img src="https://logodownload.org/wp-content/uploads/2016/11/argentina-national-football-team-logo-5.png" />  
        <p>It's Argentina's 3rd World Cup Trophy!</p> 
      </div>
      </section>
    );
  };

  export default Games;