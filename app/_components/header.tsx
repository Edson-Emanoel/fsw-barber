import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Header = () => {
  return(
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="Barbearia FSW" src="/logo.png" width={120} height={18} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
}

export default Header