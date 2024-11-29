function App() {
  return (
    <div className="bg-gradient-to-b from-primary to-dark-blue w-full min-h-screen overflow-hidden flex flex-col items-center">
      <div className="header bg-secondary w-full top-0 h-24 flex justify-center">
        Header
      </div>
      <div className="primeira-dobra h-[calc(100vh-7rem)] px-[350px] mt-4 flex flex-col justify-between">
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
      <div className="segunda-dobra bg-white w-full h-screen flex flex-col items-center justify-center">
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
      <div className="terceira-dobra text-white h-screen flex flex-col items-center justify-center">
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
