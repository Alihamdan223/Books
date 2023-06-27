import Games from "./Games";

const Main = () => {
    return (
        <main>
            <header className="header-main">
                <img src="https://logos-world.net/wp-content/uploads/2022/11/2022-FIFA-World-Cup-logo.png" />
            </header>
        <div className="main-head">
            <div className="champions"></div>
        </div>
        <section>
            <Games />
        </section>
        </main>
    )
}

export default Main;