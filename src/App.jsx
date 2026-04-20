import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';

// Layout
import Layout from './components/site/Layout';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Solutions from './pages/Solutions';
import WhyNow from './pages/WhyNow';
import About from './pages/About';
import RequestDemo from './pages/RequestDemo';
import InteractiveDemo from './pages/InteractiveDemo';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/why-now" element={<WhyNow />} />
              <Route path="/about" element={<About />} />
              <Route path="/request-demo" element={<RequestDemo />} />
              <Route path="/demo" element={<InteractiveDemo />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
