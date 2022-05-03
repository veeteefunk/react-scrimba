// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//     return (
//         <h1>I'm Learning React!</h1>
//     )
// }

// ReactDOM.render(

//     <div>
//         <Navbar />
//         <MainContent />
//     </div>

// , document.getElementById("main"))

// const headerOne = document.createElement("h1");
// headerOne.textContent = "Header One";
// const main = document.getElementById("main");
// headerOne.classList.add("header");
// main.appendChild(headerOne);

function Header() { 
    return(
    <header>
        <nav className="nav">
            <img className="nav-logo" src="react-logo.png"></img>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
)
}

function OrderedList() {
    return(
        <ol>
            <li>I love Javascript</li>
            <li>It is powerful</li>
            <li>It will give me a job</li>
            <li>It will allow me to get well paid</li>
        </ol>
    )
}

function Footer() {
    return(
        <footer>
            © 2022 veat media development. All rights reserved.
        </footer>
    )
}

function NewWebsite() {
    return (
    <div>
        <Header />
        <h1>I Love React</h1>
        <OrderedList />
        <Footer />
    </div>
    )
}

ReactDOM.render(<NewWebsite />, document.getElementById("main"))