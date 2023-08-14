const SideBar = () => {

    const newReleases = {
        theBooks: [
            "Tom Lake: A Novel",
            "Everyone Here Is Lying",
            "The King Of Late Night",
            "Like A River",
            "Not That Duke",
            "I Will Greet The Sun Again",
            "Crook Manifesto"
        ]
    };

    return (
        <nav className="side-bar">
            <h3>New Releases</h3>
            <div className="side-bar-container">
            <ul className="side-items">
                {newReleases.theBooks.map((books) => {
                    return <li key={books}>{books}</li>
                })}
            </ul>
            </div>
        </nav>
    )
}

export default SideBar;