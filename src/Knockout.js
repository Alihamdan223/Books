const Knockout = () => {

    const knockoutGames = {
    RoundOf16: [
        {
            teamA: "Netherlands",
            score: "3-1",
            teamB: "United States"
        },
        {
            teamA: "Argentina",
            score: "2-1",
            teamB: "Australia"
        },
        {
            teamA: "Japan",
            score: "(1)1-1(3)",
            teamB: "Croatia"
        },
        {
            teamA: "Brazil",
            score: "4-1",
            teamB: "South Korea"
        },
        {
            teamA: "France",
            score: "3-1",
            teamB: "Poland"
        },
        {
            teamA: "England",
            score: "3-0",
            teamB: "Senegal"
        },
        {
            teamA: "Spain",
            score: "(0)0-0(3)",
            teamB: "Morocco"
        },
        {
            teamA: "Portugal",
            score: "6-1",
            teamB: "Switzerland"
        }
    ], 
    QuarterFinal: [
        {
            teamA: "Netherlands",
            score: "(3)2-2(4)",
            teamB: "Argentina"
        },
        {
            teamA: "Brazil",
            score: "(2)1-1(4)",
            teamB: "Croatia"
        },
        {
            teamA: "England",
            score: "1-2",
            teamB: "France"
        },
        {
            teamA: "Morocco",
            score: "1-0",
            teamB: "Portugal"
        }
    ],
    SemiFinal: [
        {
            teamA: "Argentina",
            score: "3-0",
            teamB: "Croatia"
        },
        {
            teamA: "France",
            score: "2-0",
            teamB: "Morocco"
        }
    ],
    thirdPlace: [
        {
            teamA: "Croatia",
            score: "2-1",
            teamB: "Morocco"
        }
    ],
    Final: [
        {
            teamA: "Argnetina",
            score: "3-3 (4-2)",
            teamB: "France"
        }
    ]
    }

    return (
        <div>
            <h1>The Knockout Stage</h1>
            <h2>Round Of 16</h2>
            <section className="table-knockout">
            {knockoutGames.RoundOf16.map((opponent) => (
                <table className="RoundOf16 table">
                    <tr>
                        <td>{opponent.teamA}</td>
                        <td>{opponent.score}</td>
                        <td>{opponent.teamB}</td>
                    </tr>
                </table>
            ))}
            <h2>QuarterFinal</h2>
            {knockoutGames.QuarterFinal.map((opponent) => (
                <table className="QuarterFinal table">
                    <tr>
                        <td>{opponent.teamA}</td>
                        <td>{opponent.score}</td>
                        <td>{opponent.teamB}</td>
                    </tr>
                </table>
            ))}
            <h2>SemiFinal</h2>
            {knockoutGames.SemiFinal.map((opponent) => (
                <table className="SemiFinal table">
                    <tr>
                        <td>{opponent.teamA}</td>
                        <td>{opponent.score}</td>
                        <td>{opponent.teamB}</td>
                    </tr>
                </table>
            ))}
            <h2>Final</h2>
            {knockoutGames.Final.map((opponent) => (
                <table className="final table">
                    <tr>
                        <td>{opponent.teamA}</td>
                        <td>{opponent.score}</td>
                        <td>{opponent.teamB}</td>
                    </tr>
                </table>
            ))}
            </section>
        </div>
    )
}

export default Knockout; 