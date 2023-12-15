import BackgroundImage from "./BackgroundImage";


export default function Header() {
    return (
        <header>
            <BackgroundImage />
            <h1 className="first-heading">Word <span className="first-heading--thin">Counter</span></h1>
        </header>
    )
}
