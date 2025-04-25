
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Store, UserCheck } from 'lucide-react';

type UserType = 'store' | 'courier';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<UserType>('store');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // Redirect based on user type
      if (email && password) {
        if (userType === 'store') {
          navigate('/store/dashboard');
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo de volta à sua loja.",
          });
        } else {
          navigate('/courier/dashboard');
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo de volta, entregador.",
          });
        }
      } else {
        toast({
          title: "Erro ao fazer login",
          description: "Por favor, verifique seus dados e tente novamente.",
          variant: "destructive",
        });
      }
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Faça login para acessar sua conta.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="store" onValueChange={(value) => setUserType(value as UserType)}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="store">
              <Store className="h-4 w-4 mr-2" />
              Loja
            </TabsTrigger>
            <TabsTrigger value="courier">
              <UserCheck className="h-4 w-4 mr-2" />
              Entregador
            </TabsTrigger>
          </TabsList>

          <TabsContent value="store">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@loja.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="courier">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="courier-email">Email</Label>
                <Input
                  id="courier-email"
                  type="email"
                  placeholder="nome@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="courier-password">Senha</Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    Esqueceu a senha?
                  </a>
                </div>
                <Input
                  id="courier-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm">
          Não tem uma conta ainda?{" "}
          <a 
            href="/register" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/register');
            }}
            className="text-primary hover:underline"
          >
            Cadastre-se
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
