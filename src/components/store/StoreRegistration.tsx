
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { MapPin } from 'lucide-react';

const StoreRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cadastro recebido com sucesso!",
        description: "Seu cadastro foi enviado para análise. Você receberá uma notificação quando for aprovado.",
      });
      navigate('/registration-success');
    }, 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Cadastro de Loja</CardTitle>
        <CardDescription>
          Preencha os dados abaixo para cadastrar sua loja no Route One.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="store-name">Nome Social da Loja</Label>
              <Input id="store-name" placeholder="Ex: Restaurante Sabor Brasileiro" required />
            </div>
            
            <div>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" placeholder="00.000.000/0000-00" required />
            </div>

            <div>
              <Label htmlFor="owner-name">Nome do Proprietário</Label>
              <Input id="owner-name" placeholder="Nome completo" required />
            </div>
            
            <div className="space-y-4">
              <Label>Endereço da Loja</Label>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-routeone-blue" />
                <span className="text-sm text-muted-foreground">Utilizaremos sua localização atual</span>
              </div>
              <Input id="street" placeholder="Rua, número" required />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input id="neighborhood" placeholder="Bairro" required />
                </div>
                <div>
                  <Input id="city" placeholder="Cidade" required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input id="state" placeholder="Estado" required />
                </div>
                <div>
                  <Input id="postal-code" placeholder="CEP" required />
                </div>
              </div>
              <div>
                <Label htmlFor="complement">Complemento</Label>
                <Input id="complement" placeholder="Complemento (opcional)" />
              </div>
            </div>

            <div>
              <Label htmlFor="business-hours">Horário de Funcionamento</Label>
              <Textarea id="business-hours" placeholder="Ex: Segunda a Sexta: 08h às 18h, Sábado: 09h às 13h" required />
            </div>

            <div>
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input id="phone" placeholder="(00) 00000-0000" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nome@loja.com" required />
            </div>

            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirmar Senha</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="rounded border-gray-300" required />
            <Label htmlFor="terms" className="text-sm">
              Concordo com os <a href="#" className="text-primary hover:underline">Termos de Serviço</a> e <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Cadastrar Loja"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Já possui cadastro?{" "}
          <a 
            href="/login" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
            className="text-primary hover:underline"
          >
            Entrar
          </a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default StoreRegistration;
