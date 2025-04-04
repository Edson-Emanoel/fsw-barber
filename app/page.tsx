import Image from "next/image";
import Header from "./_components/header";
import { FootprintsIcon, SearchIcon } from "lucide-react";

import { db } from "./_lib/prisma";
import { Badge } from "./_components/ui/badge";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { Card, CardContent } from "./_components/ui/card";
import BarbershopItem from "./_components/barbershop-item";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

const Home = async () => {
  // Chamar meu banco de dados
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  })
  
  console.log({barbershops});
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
        <Button className="gap-2" variant="secondary">
          <Image src="/cabelo.svg" alt="Cabelo" width={16} height={16} />
          Cabelo
        </Button>

        <Button className="gap-2" variant="secondary">
          <Image src="/barba.svg" alt="Barba" width={16} height={16} />
          Barba
        </Button>

        <Button className="gap-2" variant="secondary">
          <Image src="/acabamento.svg" alt="Acabamento" width={16} height={16} />
          Acabamento
        </Button>

        <Button className="gap-2" variant="secondary">
          <FootprintsIcon size={16} />
          Pezinho
        </Button>

        <Button className="gap-2" variant="secondary">
          <Image src="/sobrancelha.svg" alt="Sobrancelha" width={16} height={16} />
          Sobrancelha
        </Button>
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
      <h2 className="mt-6 mb-3 ml-1 text-xs font-bold uppercase text-gray-400">
        Agendamentos
      </h2>

      <Card>
        <CardContent className="flex justify-between p-0">
          {/* Esquerda */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de Cabelo</h3>

            <div className="gap-2 flex items-center">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468-a851-bfd2bdde775f-16p.png" />
              </Avatar>

              <p className="text-sm">Barbearia FSW</p>
            </div>
          </div>
          {/* Direita */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Abril</p>
            <p className="text-2xl">04</p>
            <p className="text-sm">15:30</p>
          </div>
        </CardContent>
      </Card>

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

    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">© 2025 Copyright <span className="font-bold">FSW Barber</span></p>
        </CardContent>
      </Card>
    </footer>
  </div>
  )
}

export default Home