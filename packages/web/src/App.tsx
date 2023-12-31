import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';

const App = () => {
  return (
    <div className="dark:bg-gray-900 bg-white min-h-screen">
      <Header />
      <main>
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
