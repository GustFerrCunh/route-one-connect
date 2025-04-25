
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Route, MapPin } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Route className="h-8 w-8 text-routeone-blue" />
          <div className="hidden md:flex flex-col">
            <h1 className="text-xl font-bold text-routeone-blue flex items-center">
              Route One <span className="ml-1 text-xs bg-routeone-blue text-white px-1 rounded">Beta</span>
            </h1>
            <p className="text-xs text-muted-foreground">Conectando lojas e entregadores</p>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" onClick={() => navigateTo('/')}>Início</Button>
          <Button variant="ghost" onClick={() => navigateTo('/login')}>Entrar</Button>
          <Button variant="default" onClick={() => navigateTo('/register')}>Cadastre-se</Button>
        </nav>

        {/* Mobile navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%]">
            <div className="flex items-center gap-2">
              <Route className="h-6 w-6 text-routeone-blue" />
              <h1 className="text-lg font-bold text-routeone-blue">Route One</h1>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Fechar</span>
              </button>
            </div>
            <Separator className="my-4" />
            <nav className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start" onClick={() => navigateTo('/')}>
                Início
              </Button>
              <Button variant="ghost" className="justify-start" onClick={() => navigateTo('/login')}>
                Entrar
              </Button>
              <Button variant="default" className="justify-start mt-2" onClick={() => navigateTo('/register')}>
                Cadastre-se
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
