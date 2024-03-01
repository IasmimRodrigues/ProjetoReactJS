import "./index.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Lanches from "./components/Lanches";
import Sobremesas from "./components/Sobremesas";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
// import Section from "./components/Section";
// import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <Header />

      <Banner/>

      <Lanches/>
      <Sobremesas/>

      <Delivery/>
      <Footer/>

      {/* <main>
        <Section title="Meus Jogos" subtitle="Games que mais curto">
          <ListItem
            url="https://www.twitch.tv/directory/game/League%20of%20Legends"
            imageUrl="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            alt="Imagem do jogo League of Legends"
          />
        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões"
        />
      </main> */}
    </div>
  );
}

export default App;
