import Image from "next/image";
import Header from "./_components/header";
import { SearchIcon } from "lucide-react";

import { db } from "./_lib/prisma";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import BookingItem from "./_components/booking-item";
import { quickSearchOptions } from "./_constants/search";
import { Card, CardContent } from "./_components/ui/card";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  // Chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  })
  
  // console.log({barbershops});
  return ( 
  <div>
    {/* Header */}
    <Header />
    <div className="p-5">
      {/* Texto */}
      <h2 className="text-xl font-bold">Olá, Edson!</h2>
      <p>Segunda-feira, 05 de agosto.</p>

      {/* Busca */}
      <div className="mt-6 flex items-center gap-2">
        <Input placeholder="Faça sua busca..."/>
        
        <Button>
          <SearchIcon />
        </Button>
      </div>

      {/* Busca Rápida */}
      <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {quickSearchOptions.map((option) => (
          <Button key={option.title} className="gap-2" variant="secondary">
            <Image src={option.imageUrl} alt={option.title} width={16} height={16} />
            {option.title}
          </Button>
        ))}
      </div>

      {/* Imagem */}
      <div className="relative mt-6 h-[150px] w-full">
        <Image
          alt="Agende nos melhores com FSW Barber"
          src="/banner-01.png"
          fill
          className="rounded-xl object-fill"
        />
      </div>

      {/* Agendamento */}
      <BookingItem />

      <h2 className="mt-6 mb-3 ml-1 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      <h2 className="mt-6 mb-3 ml-1 text-xs font-bold uppercase text-gray-400">
        Populares
      </h2>

      <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
        {popularBarbershops.map((barbershop) => (
          <BarbershopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Home