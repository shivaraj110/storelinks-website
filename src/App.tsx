import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { CategoryList } from "./components/categories/CategoryList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-200 to-violet-400">
      <header className="container mx-auto px-4 py-16 md:py-24">
        <Navigation />
        <Hero />
      </header>
      <Features />
      <CategoryList />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
