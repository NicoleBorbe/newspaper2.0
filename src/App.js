import './App.css';
import Navbar from "./components/Header/Navbar";
import H1 from "./components/Header/H1";
import H2 from "./components/Main/H2";
import Footer from "./components/Footer/Footer";
import Div1 from './components/Main/Div1';
import Div2 from './components/Main/Div2';
import Div3 from './components/Main/Div3';
import Div4 from './components/Main/Div4';
import Div5 from './components/Main/Div5';
import Div6 from './components/Main/Div6';
import Art1 from './components/Main/Art1';
import Art2 from './components/Main/Art2';


function App() {
  return (
    <div className="App">
      <header>
        <H1 />
        <Navbar />
      </header>
      <main className="Main">
        <section className="Section1">
          <H2 />
        </section>
        <section className="Section2">
          <article className="Article1">
              <Div1 />
              <Div3 />
              <Div5 />
          </article>
          <article className="Article1">
              <Div2 />
              <Div4 />
              <Div6 />
          </article>
          <figure>
              <img src={require("./img/kitchen.jpg")} alt="kitchen"/>
              <figcaption>A kitchen is a dangerous place!</figcaption>
          </figure>
          <aside>
              <h5>Visit our Sponsors</h5>
              <Art1 />
              <Art2 />
              <article>
                  <img src={require("./img/ikea-logo.png")} alt="ikea"/>
              </article>
          </aside>
        </section>
        
       
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
