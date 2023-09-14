import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import './app.css'

export default function App() {

  return (
    <>
      <div className="app__container">
        <header>
          <Header/>
        </header>
        <main>
          <Main/>
        </main>
        <nav>
          <Nav/>
        </nav>
      </div>
    </>
  )
}