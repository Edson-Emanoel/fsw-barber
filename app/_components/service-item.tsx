import Image from "next/image";
import { BarbershopService } from "@prisma/client";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps {
    service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
    return (
        <Card>
            <CardContent className="flex items-center gap-3 p-3">
                {/* Imagem */}
                <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                    <Image src={service.imageUrl} alt={`Imagem do Serviço: ${service.name}`} fill className="rounded-lg object-cover" />
                </div>

                {/* Direita */}
                <div className="space-y-2">
                    <h3 className="text-sm font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                    
                    {/* Preço e Botão */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-primary">
                            {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            }).format(Number(service.price))}
                        </p>

                        <Button variant="secondary" size="sm">
                            Reservar
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
 
export default ServiceItem;