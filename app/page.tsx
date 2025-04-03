import Image from "next/image";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";

const Home = () => {
  return <div>
    {/* Header */}
    <Header />
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Edson!</h2>
      <p>Segunda-feira, 05 de agosto.</p>

      <div className="mt-6 flex items-center gap-2">
        <Input placeholder="Faça sua busca..."/>
        
        <Button>
          <SearchIcon />
        </Button>
      </div>

      <div className="relative mt-6 h-[150px] w-full">
        <Image
          alt="Agende nos melhores com FSW Barber"
          src="/banner-01.png"
          fill
          className="rounded-xl object-fill"
        />
      </div>
    </div>
  </div>;
}

export default Home