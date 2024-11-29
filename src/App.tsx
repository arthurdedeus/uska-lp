import React from "react";
import { Header } from "./components/Header";

enum HeaderLinks {
  ABOUT,
  HOW_IT_WORKS,
  PRODUCTS,
  BENEFITS,
  FAQ,
}

function App() {
  const [selectedHeaderLink, setSelectedHeaderLink] = React.useState(0);
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-primary to-dark-blue w-full min-h-screen overflow-hidden flex flex-col items-center"
    >
      <Header.Root>
        <Header.Logo />
        <Header.Navbar>
          <Header.Link
            isSelected={selectedHeaderLink === HeaderLinks.ABOUT}
            onClick={() => setSelectedHeaderLink(HeaderLinks.ABOUT)}
            href="#about"
          >
            Sobre
          </Header.Link>
          <Header.Link
            isSelected={selectedHeaderLink === HeaderLinks.HOW_IT_WORKS}
            onClick={() => setSelectedHeaderLink(HeaderLinks.HOW_IT_WORKS)}
            href="#how-it-works"
          >
            Como funciona
          </Header.Link>
          <Header.Link
            isSelected={selectedHeaderLink === HeaderLinks.PRODUCTS}
            onClick={() => setSelectedHeaderLink(HeaderLinks.PRODUCTS)}
            href="#products"
          >
            Produtos
          </Header.Link>
          <Header.Link
            isSelected={selectedHeaderLink === HeaderLinks.BENEFITS}
            onClick={() => setSelectedHeaderLink(HeaderLinks.BENEFITS)}
            href="#products"
          >
            Benefícios
          </Header.Link>
          <Header.Link
            isSelected={selectedHeaderLink === HeaderLinks.FAQ}
            onClick={() => setSelectedHeaderLink(HeaderLinks.FAQ)}
            href="#products"
          >
            FAQ
          </Header.Link>
        </Header.Navbar>
      </Header.Root>
      <div className="primeira-dobra h-[calc(100vh-8rem)] px-[350px] mt-4 flex flex-col justify-between">
        <div className="flex flex-row">
          <div>
            <h1 className="font-poppins text-h1 text-white">
              Encontre os maiores tesouros geek!
            </h1>
            <p className="font-poppins text-paragraph text-white">
              Leilões ao vivo para comprar, vender e descobrir itens raros da
              cultura pop - com total segurança!
            </p>
          </div>
          <div className="bg-secondary min-h-[480px] min-w-[480px]">Imagem</div>
        </div>
        <div className="bg-error flex justify-center">Saber mais </div>
      </div>
      <div
        id="how-it-works"
        className="segunda-dobra bg-white w-full h-screen flex flex-col items-center justify-center"
      >
        <div className="flex flex-col">
          <div className="image"></div>
          <div className="text">Leilões ao vivo!</div>
        </div>
        <div className="flex flex-col">
          <div className="text">100% Seguro!</div>
          <div className="image"></div>
        </div>
        <div className="flex flex-col">
          <div className="image"></div>
          <div className="text">Itens Exclusivos!</div>
        </div>
      </div>
      <div
        id="products"
        className="terceira-dobra text-white h-screen flex flex-col items-center justify-center"
      >
        <div>Produtos Disponíveis</div>
        <div>Categorias</div>
        <div>Mais Motivos Para Fazer Parte</div>
        <div>Motivos</div>
        <div>Perguntas Frequentes</div>
        <div> CTA + Input </div>
      </div>
      <div className="footer text-white bg-secondary w-full h-24 bottom-0 flex flex-col items-center justify-center">
        Footer
      </div>
    </div>
  );
}

export default App;
