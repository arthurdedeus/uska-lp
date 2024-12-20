import { Button } from "../Button";
import { Input } from "../Input";

export function ThirdFoldCTA() {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-row gap-1">
        <p className="text-paragraph">
          Bora fazer parte do futuro dos leilões online?
        </p>
        <p className="text-paragraph-alt1">Cadastre-se já!</p>
      </div>
      <div className="flex flex-row gap-4 mt-12">
        <Input placeholder="Seu melhor email.." />
        <Button>Cadastrar</Button>
      </div>
    </div>
  );
}
