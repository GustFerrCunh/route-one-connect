
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const RegistrationSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 bg-gray-50 flex items-center">
        <div className="container max-w-md mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-10 w-10 text-routeone-green" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Cadastro Realizado!</h1>
              <p className="text-muted-foreground mb-6">
                Seu cadastro foi recebido com sucesso e está em análise. Você receberá uma notificação assim que for aprovado.
              </p>
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/login')} 
                  className="w-full"
                >
                  Ir para o Login
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/')}
                  className="w-full"
                >
                  Voltar para a Página Inicial
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Route One Connect. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default RegistrationSuccess;
