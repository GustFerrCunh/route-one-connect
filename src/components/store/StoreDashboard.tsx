
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { PlusCircle, Upload, Package } from 'lucide-react';
import DeliveryCard from '../shared/DeliveryCard';

// Sample data for deliveries
const sampleDeliveries = [
  {
    id: '1',
    productImage: 'https://images.unsplash.com/photo-1575218823253-9db705e6a38e?q=80&w=500',
    storeAddress: 'Avenida Paulista, 1000, São Paulo',
    customerAddress: 'Rua Augusta, 1500, São Paulo',
    status: 'pending' as const
  },
  {
    id: '2',
    productImage: 'https://images.unsplash.com/photo-1595246140625-063027677e0f?q=80&w=500',
    storeAddress: 'Avenida Paulista, 1000, São Paulo',
    customerAddress: 'Avenida Brigadeiro Faria Lima, 3500, São Paulo',
    status: 'in_progress' as const
  },
  {
    id: '3',
    productImage: 'https://images.unsplash.com/photo-1594179047519-f347310d3322?q=80&w=500',
    storeAddress: 'Avenida Paulista, 1000, São Paulo',
    customerAddress: 'Rua Oscar Freire, 700, São Paulo',
    status: 'delivered' as const
  }
];

const StoreDashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const { toast } = useToast();
  
  const handleCreateDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(false);
    
    toast({
      title: "Entrega criada com sucesso!",
      description: "Aguardando um entregador aceitar sua entrega.",
    });
  };

  // Filter deliveries based on active tab
  const filteredDeliveries = activeTab === 'all' 
    ? sampleDeliveries
    : sampleDeliveries.filter(delivery => delivery.status === activeTab);

  return (
    <div className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard da Loja</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2" />
              Nova Entrega
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Criar Nova Entrega</DialogTitle>
              <DialogDescription>
                Adicione os detalhes da entrega para encontrar um entregador disponível.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateDelivery} className="space-y-4">
              <div className="space-y-2">
                <Label>Foto do Produto</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <div className="text-sm text-center text-muted-foreground">
                    Clique para fazer upload de uma foto do produto
                  </div>
                  <label htmlFor="product-upload" className="cursor-pointer">
                    <Button variant="outline" size="sm" className="mt-2">
                      <Upload className="h-4 w-4 mr-2" />
                      Selecionar Imagem
                    </Button>
                    <input id="product-upload" type="file" accept="image/*" className="hidden" required />
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="customer-address">Endereço do Cliente</Label>
                <Textarea 
                  id="customer-address" 
                  placeholder="Digite o endereço completo de entrega" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="delivery-notes">Observações (opcional)</Label>
                <Textarea 
                  id="delivery-notes" 
                  placeholder="Instruções especiais para a entrega"
                />
              </div>
              
              <div className="flex justify-end space-x-2 mt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button type="submit">Criar Entrega</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-routeone-blue" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Entregas Pendentes</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Em Entrega</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-3 rounded-full">
                <Package className="h-6 w-6 text-routeone-green" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Entregas Realizadas</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="pending">Pendentes</TabsTrigger>
            <TabsTrigger value="in_progress">Em Entrega</TabsTrigger>
            <TabsTrigger value="delivered">Entregues</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab}>
            {filteredDeliveries.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDeliveries.map((delivery) => (
                  <DeliveryCard
                    key={delivery.id}
                    id={delivery.id}
                    productImage={delivery.productImage}
                    storeAddress={delivery.storeAddress}
                    customerAddress={delivery.customerAddress}
                    status={delivery.status}
                    userType="store"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <Package className="h-16 w-16 mx-auto text-muted-foreground opacity-50" />
                <h3 className="mt-4 text-lg font-medium">Nenhuma entrega encontrada</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Não há entregas para exibir nesta categoria.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StoreDashboard;
