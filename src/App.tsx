import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
