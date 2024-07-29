import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Viktor's Application</h1>
      </header>
      
      <main className="flex-grow p-4">
        <h2 className="text-xl mb-4">Welcome to My Application</h2>
        <p className="mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <Button>Get Started</Button>
      </main>
      
      <footer className="bg-muted p-4 text-center">
        <p>&copy; 2024 Viktor's Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
