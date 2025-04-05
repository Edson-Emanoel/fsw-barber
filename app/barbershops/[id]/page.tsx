import Link from "next/link";
import Image from "next/image";
import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import PhoneItem from "@/app/_components/phone-item";
import ServiceItem from "@/app/_components/service-item";

import {
    StarIcon,
    MenuIcon,
    MapPinIcon,
    ChevronLeftIcon,
} from "lucide-react";

interface BarbershopPageProps {
    params: {
      id: string;
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })

    if(!barbershop){
        return notFound();
    }

    return (
        <div>
            {/* Imagem */}
            <div className="relative w-full h-[250px]">
                <Image
                    src={barbershop!.imageUrl}
                    alt={barbershop!.name}
                    fill
                    className="object-cover"
                />

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-4 top-4"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon />
                    </Link>
                </Button>

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-4 top-4"
                >
                    <Link href="/">
                        <MenuIcon />
                    </Link>
                </Button>
            </div>

            {/* Título */}
            <div className="border-b border-solid p-5">
                <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
                
                <div className="mb-1 flex items-center gap-2">
                    <MapPinIcon className="text-primary" size={18} />
                    <p className="text-sm">{barbershop?.address}</p>
                </div>
                
                <div className="flex items-center gap-2">
                    <StarIcon className="fill-primary text-primary" size={18} />
                    <p className="text-sm">5,0 (524 avaliações)</p>
                </div>
            </div>

            {/* Descrição */}
            <div className="space-y-2 border-b border-solid p-5">
                <h2 className="text-sm font-bold uppercase text-gray-400">Sobre Nós</h2>
                <p className="text-justify text-sm">{barbershop?.description}</p>
            </div>

            {/* Serviços */}
            <div className="space-y-3 border-b border-solid p-5">
                <h2 className="text-xs font-bold uppercase text-gray-400 mb-3">Serviços</h2>

                <div className="space-y-3">
                    {barbershop.services.map((service) =>  <ServiceItem key={service.id} service={service} />)}
                </div>
            </div>

            {/* Contato */}
            <div className="space-y-3 p-5">
                {barbershop.phones.map((phone) => (
                    <PhoneItem key={phone} phone={phone} />
                ))}
            </div>
        </div>
    );
}
 
export default BarbershopPage;
