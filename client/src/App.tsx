import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard/Dashboard";
import { Toast } from "@heroui/react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toast.Provider />
      <main className="flex bg-radial from-pink-400 from-40% to-fuchsia-700 w-[100vw] h-[100vh]">
        <Dashboard />
      </main>
    </QueryClientProvider>
  );
}

export default App;
