
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Package, Navigation, CheckCircle2 } from 'lucide-react';
import DeliveryCard from '../shared/DeliveryCard';

// Sample data for deliveries
const availableDeliveries = [
  {
    id: '1',
    productImage: 'https://images.unsplash.com/photo-1575218823253-9db705e6a38e?q=80&w=500',
    storeAddress: 'Avenida Paulista, 1000, São Paulo',
    customerAddress: 'Rua Augusta, 1500, São Paulo',
    distance: '2.1 km',
    estimatedTime: '15 min',
    status: 'pending' as const,
    storeName: 'Restaurante Sabor Brasileiro'
  },
  {
    id: '2',
    productImage: 'https://images.unsplash.com/photo-1595246140625-063027677e0f?q=80&w=500',
    storeAddress: 'Rua Haddock Lobo, 595, São Paulo',
    customerAddress: 'Avenida Brigadeiro Faria Lima, 3500, São Paulo',
    distance: '4.3 km',
    estimatedTime: '22 min',
    status: 'pending' as const,
    storeName: 'Padaria Bom Pão'
  }
];

const myDeliveries = [
  {
    id: '3',
    productImage: 'https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=500',
    storeAddress: 'Rua Oscar Freire, 700, São Paulo',
    customerAddress: 'Avenida Rebouças, 3000, São Paulo',
    distance: '3.7 km',
    estimatedTime: '18 min',
    status: 'accepted' as const,
    storeName: 'Farmácia Saúde'
  }
];

const CourierDashboard = () => {
  const [activeDeliveries, setActiveDeliveries] = useState(availableDeliveries);
  const [myActiveDeliveries, setMyActiveDeliveries] = useState(myDeliveries);
  const [activeTab, setActiveTab] = useState('available');
  const { toast } = useToast();
  
  const handleAcceptDelivery = (id: string) => {
    // Find the delivery from available deliveries
    const delivery = activeDeliveries.find(d => d.id === id);
    if (!delivery) return;
    
    // Update status and move to my deliveries
    const updatedDelivery = { ...delivery, status: 'accepted' as const };
    
    // Remove from available deliveries
    setActiveDeliveries(activeDeliveries.filter(d => d.id !== id));
    
    // Add to my deliveries
    setMyActiveDeliveries([...myActiveDeliveries, updatedDelivery]);
    
    // Show toast notification
    toast({
      title: "Entrega aceita!",
      description: `Você aceitou a entrega para ${updatedDelivery.storeName}.`,
    });
    
    // Switch to my deliveries tab
    setActiveTab('my_deliveries');
  };
  
  const handleStartDelivery = (id: string) => {
    // Update status to in_progress
    const updatedDeliveries = myActiveDeliveries.map(delivery => 
      delivery.id === id ? { ...delivery, status: 'in_progress' as const } : delivery
    );
    
    setMyActiveDeliveries(updatedDeliveries);
    
    toast({
      title: "Entrega iniciada!",
      description: "A loja foi notificada e está acompanhando sua localização.",
    });
  };
  
  const handleCompleteDelivery = (id: string) => {
    // Update status to delivered
    const updatedDeliveries = myActiveDeliveries.map(delivery => 
      delivery.id === id ? { ...delivery, status: 'delivered' as const } : delivery
    );
    
    setMyActiveDeliveries(updatedDeliveries);
    
    toast({
      title: "Entrega concluída!",
      description: "Parabéns! Você concluiu esta entrega com sucesso.",
    });
  };

  return (
    <div className="container py-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard do Entregador</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-routeone-blue" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Entregas Disponíveis</p>
                <p className="text-2xl font-bold">{activeDeliveries.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-3 rounded-full">
                <Navigation className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Minhas Entregas Atuais</p>
                <p className="text-2xl font-bold">
                  {myActiveDeliveries.filter(d => d.status !== 'delivered').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="h-6 w-6 text-routeone-green" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Entregas Concluídas</p>
                <p className="text-2xl font-bold">
                  {myActiveDeliveries.filter(d => d.status === 'delivered').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Tabs defaultValue="available" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="available">Entregas Disponíveis</TabsTrigger>
            <TabsTrigger value="my_deliveries">Minhas Entregas</TabsTrigger>
          </TabsList>
          <TabsContent value="available">
            {activeDeliveries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeDeliveries.map((delivery) => (
                  <DeliveryCard
                    key={delivery.id}
                    id={delivery.id}
                    productImage={delivery.productImage}
                    storeAddress={delivery.storeAddress}
                    customerAddress={delivery.customerAddress}
                    distance={delivery.distance}
                    estimatedTime={delivery.estimatedTime}
                    status={delivery.status}
                    userType="courier"
                    onAccept={handleAcceptDelivery}
                    storeName={delivery.storeName}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <Package className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Nenhuma entrega disponível</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Não há entregas disponíveis no momento. Verifique novamente mais tarde.
                </p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="my_deliveries">
            {myActiveDeliveries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myActiveDeliveries.map((delivery) => (
                  <DeliveryCard
                    key={delivery.id}
                    id={delivery.id}
                    productImage={delivery.productImage}
                    storeAddress={delivery.storeAddress}
                    customerAddress={delivery.customerAddress}
                    distance={delivery.distance}
                    estimatedTime={delivery.estimatedTime}
                    status={delivery.status}
                    userType="courier"
                    onStartDelivery={handleStartDelivery}
                    onCompleteDelivery={handleCompleteDelivery}
                    storeName={delivery.storeName}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <Navigation className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Nenhuma entrega ativa</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Você não tem entregas ativas no momento. Aceite entregas disponíveis para começar.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourierDashboard;
