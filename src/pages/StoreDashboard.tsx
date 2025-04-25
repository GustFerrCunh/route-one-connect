
import Header from '@/components/Header';
import StoreDashboard from '@/components/store/StoreDashboard';

const StoreDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <StoreDashboard />
      </main>
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Route One Connect. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default StoreDashboardPage;
