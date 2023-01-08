import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Product from "./pages/Product";
import { Products } from "./pages/Products";


function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 2 * 60 * 1000, // 2 minutes
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainLayout />}> */}
            <Route path="/profiles" element={<Product/>} />
            <Route path="/product/:id" element={<Products/>}/>
            <Route path="/" element={<Navigate to={"/profiles"} />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
