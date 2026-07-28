import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./components/Dashboard/Dashboard";
import { Toast } from "@heroui/react";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toast.Provider />
      <main className="w-full min-h-screen">
        <Dashboard />
      </main>
    </QueryClientProvider>
  );
}

export default App;
