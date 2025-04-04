import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { quickSearchOptions } from "../_constants/search";

const SidebarSheet = () => {
    return (
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        {/* Avatar  */}
        <div className="py-5 gap-3 border-b border-solid flex items-center">
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </Avatar>

          <div className="flex flex-col ml-3">
            <p className="font-bold">Edson Emanoel</p>
            <p className="text-gray-500 text-xs">edson.emanoel@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-5 border-b border-solid">
          <SheetClose asChild>
            <Button className="justify-start gap-2" variant="ghost" asChild>
              <Link href="/">
                <HomeIcon size={18} />
                Início
              </Link>
            </Button>
          </SheetClose>

          <Button className="justify-start gap-2" variant="ghost">
            <CalendarIcon size={18} />
            Agendamentos
          </Button>              
        </div>

        <div className="flex flex-col gap-2 py-5 border-b border-solid">
          {quickSearchOptions.map((option) => (
            <Button className="justify-start gap-2" variant="ghost">
              <Image alt={option.title} src={option.imageUrl} width={18} height={18} />
              {option.title}
            </Button>
          ))}       
        </div>

        <div className="flex flex-col gap-2 py-5">
          <Button variant="ghost" className="justify-start gap-2">
            <LogOutIcon size={18} />
            Sair da Conta
          </Button>
        </div>
      </SheetContent>
    );
}
 
export default SidebarSheet;