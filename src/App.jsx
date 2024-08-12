import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import LineGraph from "./pages/LineChart/LineChart";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  const navLink = [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id: 2,
      title: "Line-Chart",
      href: "/line-chart",
    },
    {
      id: 3,
      title: "Products",
      href: "/products",
    },
  ];

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header navLink={navLink} />

        <main className="flex-grow px-4 md:px-8 mt-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/line-chart" element={<LineGraph />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
