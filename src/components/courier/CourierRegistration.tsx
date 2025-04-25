
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Upload, Camera } from 'lucide-react';

const CourierRegistration = () => {
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
        <CardTitle className="text-2xl font-bold">Cadastro de Entregador</CardTitle>
        <CardDescription>
          Preencha os dados abaixo para se cadastrar como entregador no Route One.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="full-name">Nome Completo</Label>
              <Input id="full-name" placeholder="Seu nome completo" required />
            </div>
            
            <div>
              <Label htmlFor="cpf">CPF</Label>
              <Input id="cpf" placeholder="000.000.000-00" required />
            </div>

            <div className="space-y-2">
              <Label>Foto de Perfil (Selfie)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <Camera className="h-10 w-10 text-gray-400 mb-2" />
                <div className="text-sm text-center text-muted-foreground mb-2">
                  Tire uma selfie ou faça upload de uma foto sua
                </div>
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  Tirar Selfie
                </Button>
                <div className="text-xs text-muted-foreground mt-2">ou</div>
                <label htmlFor="selfie-upload" className="cursor-pointer">
                  <div className="text-xs text-primary hover:underline mt-1">
                    Fazer upload de arquivo
                  </div>
                  <input id="selfie-upload" type="file" accept="image/*" className="hidden" />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label>CNH (frente e verso)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <div className="text-sm text-center text-muted-foreground">
                  Clique para fazer upload da sua CNH (frente e verso)
                </div>
                <label htmlFor="cnh-upload" className="cursor-pointer">
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Selecionar Arquivos
                  </Button>
                  <input id="cnh-upload" type="file" accept="image/*" multiple className="hidden" required />
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label>RG (frente e verso)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <div className="text-sm text-center text-muted-foreground">
                  Clique para fazer upload do seu RG (frente e verso)
                </div>
                <label htmlFor="rg-upload" className="cursor-pointer">
                  <Button variant="outline" size="sm" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Selecionar Arquivos
                  </Button>
                  <input id="rg-upload" type="file" accept="image/*" multiple className="hidden" required />
                </label>
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Telefone / WhatsApp</Label>
              <Input id="phone" placeholder="(00) 00000-0000" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu.nome@email.com" required />
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
            {isLoading ? "Enviando..." : "Cadastrar como Entregador"}
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

export default CourierRegistration;
