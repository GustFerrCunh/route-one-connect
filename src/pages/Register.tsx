
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StoreRegistration from '@/components/store/StoreRegistration';
import CourierRegistration from '@/components/courier/CourierRegistration';

const Register = () => {
  const [userType, setUserType] = useState<'store' | 'courier'>('store');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">Cadastre-se no Route One</h1>
            <p className="text-center text-muted-foreground">
              Preencha o formulário abaixo para criar sua conta.
            </p>
          </div>
          
          <Tabs defaultValue="store" value={userType} onValueChange={(value) => setUserType(value as 'store' | 'courier')}>
            <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="store">Sou uma Loja</TabsTrigger>
              <TabsTrigger value="courier">Sou Entregador</TabsTrigger>
            </TabsList>
            <TabsContent value="store">
              <StoreRegistration />
            </TabsContent>
            <TabsContent value="courier">
              <CourierRegistration />
            </TabsContent>
          </Tabs>
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

export default Register;
