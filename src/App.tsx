import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FooterSocialIconEnum } from "./components/Footer/FooterSocialIcon";
import { FirstFold } from "./components/FirstFold";

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
      <FirstFold.Root>
        <FirstFold.ContentRoot>
          <FirstFold.CopyRoot>
            <FirstFold.CopyHeading text="Encontre os maiores tesouros geek!" />
            <FirstFold.CopyText text="Leilões ao vivo para comprar, vender e descobrir itens raros da cultura pop - com total segurança!" />
            <FirstFold.CTARoot>
              <FirstFold.Input placeholder="Seu melhor email..." />
              <FirstFold.Button>Cadastrar</FirstFold.Button>
            </FirstFold.CTARoot>
          </FirstFold.CopyRoot>
          <FirstFold.Image />
        </FirstFold.ContentRoot>
        <FirstFold.LearnMore href="#how-it-works" />
      </FirstFold.Root>
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
      <Footer.Root>
        <Footer.Logo className="h-10" />
        <Footer.Navbar>
          <Footer.Link href="#">Termos e condições</Footer.Link>
          <Footer.Link href="#">Privacidade</Footer.Link>
          <Footer.Link href="#">Cookies</Footer.Link>
        </Footer.Navbar>
        <Footer.SocialMedia>
          <Footer.SocialIcon icon={FooterSocialIconEnum.X} />
          <Footer.SocialIcon icon={FooterSocialIconEnum.INSTAGRAM} />
          <Footer.SocialIcon icon={FooterSocialIconEnum.TIKTOK} />
          <Footer.SocialIcon icon={FooterSocialIconEnum.YOUTUBE} />
        </Footer.SocialMedia>
      </Footer.Root>
    </div>
  );
}

export default App;
