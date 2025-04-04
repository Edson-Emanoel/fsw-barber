import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

// TODO: receber agendamento como prop
const BookingItem = () => {
    return ( 
        <div>
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
        </div>
    );
}
 
export default BookingItem;