import { useState } from "react";
import "./App.css";
import Layout from "./layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout></Layout>
      </QueryClientProvider>
    </>
  );
}

export default App;
