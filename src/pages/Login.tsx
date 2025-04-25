
import Header from '@/components/Header';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 bg-gray-50">
        <div className="container max-w-md mx-auto">
          <LoginForm />
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

export default Login;
