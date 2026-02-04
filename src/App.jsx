import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Riya Rana</h1>

      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl border border-slate-900 shadow-md" onClick={() => setCount((count) => count + 5)}>
        <Timer className="mr-2 h-4 w-4" />
        Count is {count}
      </Button>
    </div>
  );
}

export default App;
/*import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}*/

