import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../api/api";
import { Alert, Button, Spinner } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import SpinnerTheme from "../../components/CustomStyles/SpinnerTheme";

export default function SingleProduct() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setError(null);

      try {
        const response = await api.get(`/products/${params.id}`);

        setProduct(response.data);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading)
    return (
      <section className="flex justify-center items-center h-screen">
        <Spinner theme={SpinnerTheme} size="2xl" />
      </section>
    );

  if (error)
    return (
      <Alert color="failure" icon={HiInformationCircle}>
        <span className="text-lg font-medium">{error}</span>
      </Alert>
    );

  if (product)
    return (
      <section className="flex flex-col md:flex-row gap-7 py-5 px-7">
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-xs rounded-lg shadow-md"
          />
        </div>

        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>

          <p className="text-lg text-gray-700 mb-4">{product.description}</p>

          <p className="text-xl font-semibold mb-2">${product.price}</p>

          <p className="text-md font-medium text-gray-600 mb-2">
            Category: <span className="font-normal">{product.category}</span>
          </p>

          <div className="flex items-center mb-2">
            <span className="text-md font-medium text-gray-600">Rating:</span>

            <div className="flex items-center ml-2">
              <span className="text-md font-semibold mr-2">
                {product.rating.rate}
              </span>

              <span className="text-sm text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          <Button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white">
            <Link to="/products" className="no-underline">
              Back
            </Link>
          </Button>
        </div>
      </section>
    );
}
