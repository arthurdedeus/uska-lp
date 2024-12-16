import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FooterSocialIconEnum } from "./components/Footer/FooterSocialIcon";
import { FirstFold } from "./components/FirstFold";
import { SecondFold } from "./components/SecondFold";

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
      <SecondFold.Root>
        <SecondFold.ContentRoot>
          <SecondFold.Image src="auctions.svg" alt="auctions" />
          <SecondFold.Copy
            title="Leilões ao vivo!"
            text="Participe da emoção dos leilões em tempo real!
            Conecte-se com a sua comunidade e descubra itens incríveis com total transparência."
          />
        </SecondFold.ContentRoot>
        <SecondFold.ContentRoot>
          <SecondFold.Copy
            title="100% Seguro"
            text="Compre e venda com tranquilidade!
            Garantimos a sua proteção em cada transação, porque sua segurança é a nossa prioridade."
          />
          <SecondFold.Image src="safe.svg" alt="safe" />
        </SecondFold.ContentRoot>
        <SecondFold.ContentRoot>
          <SecondFold.Image src="exclusive.svg" alt="exclusive" />
          <SecondFold.Copy
            title="Itens Exclusivos!"
            text="Descubra tesouros únicos e colecionáveis raros que você só encontra aqui e receba no conforto de sua casa.
            Não perca a chance de garantir algo verdadeiramente especial!"
          />
        </SecondFold.ContentRoot>
      </SecondFold.Root>
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
