import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import TransactionHistory from "./Pages/TransactionHistory/TransactionHistory";
import Balance from "./Pages/Balance/Balance";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="balance" element={<Balance />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
