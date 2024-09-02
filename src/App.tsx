import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

// i18n
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

// Routes and Layout
import GlobalLayout from "@/layout/global";
import HomePage from "@/routes/HomePage";
import AboutPage from "@/routes/AboutPage";
import NotFound from "@/routes/NotFound";

// React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router basename={import.meta.env.BASE_URL || ""}>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
