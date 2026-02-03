import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import MerchantRegister from "./pages/register/MerchantRegister";
import CustomerRegister from "./pages/register/CustomerRegister";

import MerchantLayout from "./layouts/MerchantLayout";
import MerchantDashboard from "./dashboards/merchant/MerchantDashboard";
import Products from "./dashboards/merchant/Products";
import Invoices from "./dashboards/merchant/Invoices";
import Transactions from "./dashboards/merchant/Transactions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/merchant" element={<MerchantRegister />} />
        <Route path="/register/customer" element={<CustomerRegister />} />
<Route path="/merchant/invoices" element={<Invoices />} />

        {/* Merchant Routes */}
        <Route path="/merchant" element={<MerchantLayout />}>
          <Route path="dashboard" element={<MerchantDashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
