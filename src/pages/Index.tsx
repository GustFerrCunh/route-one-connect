
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Route, UserCheck } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 gradient-background overflow-hidden">
          <div className="absolute inset-0 route-map-bg"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-routeone-blue to-routeone-green bg-clip-text text-transparent">
                Conectando lojas e entregadores
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                Uma plataforma simples e direta para lojas encontrarem entregadores e para entregadores encontrarem oportunidades de entrega sem burocracia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/register')} 
                  size="lg"
                  className="bg-routeone-blue hover:bg-routeone-dark-blue text-white"
                >
                  Comece Agora
                </Button>
                <Button 
                  onClick={() => navigate('/login')} 
                  variant="outline" 
                  size="lg"
                >
                  Já tenho uma conta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm">
                <div className="w-16 h-16 bg-routeone-blue/10 rounded-full flex items-center justify-center mb-6">
                  <Route className="h-8 w-8 text-routeone-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Para Lojas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="bg-routeone-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Cadastre sua loja com informações básicas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-routeone-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Crie entregas com apenas uma foto e o endereço de destino</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-routeone-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Acompanhe em tempo real o entregador até o destino final</span>
                  </li>
                </ul>
                <Button 
                  onClick={() => navigate('/register')}
                  className="mt-6 w-full"
                >
                  Cadastrar minha loja
                </Button>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm">
                <div className="w-16 h-16 bg-routeone-green/10 rounded-full flex items-center justify-center mb-6">
                  <UserCheck className="h-8 w-8 text-routeone-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Para Entregadores</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="bg-routeone-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Cadastre-se com seus documentos e informações pessoais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-routeone-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Veja as entregas disponíveis próximas a você</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-routeone-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Aceite entregas e receba o pagamento diretamente na loja</span>
                  </li>
                </ul>
                <Button 
                  variant="secondary"
                  onClick={() => navigate('/register')}
                  className="mt-6 w-full bg-routeone-green hover:bg-routeone-green/90 text-white"
                >
                  Cadastrar como entregador
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que usar o Route One?</h2>
              <p className="text-gray-600">
                Uma plataforma simples e direta que elimina burocracias e conecta quem precisa com quem entrega.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-routeone-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-routeone-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Rapidez</h3>
                <p className="text-gray-600">
                  Cadastro rápido e encontre um entregador em minutos para suas entregas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-routeone-green/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-routeone-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Segurança</h3>
                <p className="text-gray-600">
                  Todos os entregadores são verificados e validados antes de acessarem a plataforma.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-routeone-blue/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-routeone-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Sem Taxas</h3>
                <p className="text-gray-600">
                  Sem comissões ou taxas abusivas. O pagamento é feito diretamente ao entregador.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-routeone-blue/90 to-routeone-green/90 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Cadastre-se agora e simplifique seu processo de entregas ou comece a trabalhar como entregador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                onClick={() => navigate('/register')}
                size="lg"
                className="bg-white text-routeone-blue hover:bg-gray-100"
              >
                Cadastrar minha loja
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/register')}
                size="lg"
                className="bg-white text-routeone-green hover:bg-gray-100"
              >
                Cadastrar como entregador
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Route className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">Route One</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Route One Connect. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
