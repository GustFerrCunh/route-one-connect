
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation } from 'lucide-react';

export interface DeliveryCardProps {
  id: string;
  productImage: string;
  storeAddress: string;
  customerAddress: string;
  distance?: string;
  estimatedTime?: string;
  status: 'pending' | 'accepted' | 'in_progress' | 'delivered';
  userType: 'store' | 'courier';
  onAccept?: (id: string) => void;
  onStartDelivery?: (id: string) => void;
  onCompleteDelivery?: (id: string) => void;
  storeName?: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({
  id,
  productImage,
  storeAddress,
  customerAddress,
  distance = '3.2 km',
  estimatedTime = '15 min',
  status,
  userType,
  onAccept,
  onStartDelivery,
  onCompleteDelivery,
  storeName
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'pending':
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pendente</Badge>;
      case 'accepted':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">Aceito</Badge>;
      case 'in_progress':
        return <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">Em entrega</Badge>;
      case 'delivered':
        return <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Entregue</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40">
        <img 
          src={productImage} 
          alt="Produto para entrega" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          {getStatusBadge()}
        </div>
        {userType === 'courier' && storeName && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
            <p className="text-white text-sm font-medium">{storeName}</p>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-routeone-blue flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-muted-foreground">Retirada:</p>
              <p className="text-sm">{storeAddress}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-routeone-green flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs text-muted-foreground">Entrega:</p>
              <p className="text-sm">{customerAddress}</p>
            </div>
          </div>
          {userType === 'courier' && (
            <div className="flex justify-between mt-2">
              <div className="text-xs">
                <span className="font-medium">Distância:</span> {distance}
              </div>
              <div className="text-xs">
                <span className="font-medium">Tempo est.:</span> {estimatedTime}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex">
        {userType === 'courier' ? (
          <>
            {status === 'pending' && (
              <Button 
                className="w-full" 
                onClick={() => onAccept?.(id)}
              >
                Aceitar entrega
              </Button>
            )}
            {status === 'accepted' && (
              <Button 
                className="w-full" 
                variant="secondary"
                onClick={() => onStartDelivery?.(id)}
              >
                Iniciar entrega
              </Button>
            )}
            {status === 'in_progress' && (
              <Button 
                className="w-full" 
                variant="secondary"
                onClick={() => onCompleteDelivery?.(id)}
              >
                Finalizar entrega
              </Button>
            )}
          </>
        ) : (
          <>
            {status === 'pending' && (
              <p className="text-sm text-muted-foreground w-full text-center">
                Aguardando entregador...
              </p>
            )}
            {(status === 'accepted' || status === 'in_progress') && (
              <Button className="w-full" variant="outline">
                <Navigation className="h-4 w-4 mr-2" />
                Acompanhar entregador
              </Button>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default DeliveryCard;
