import React from "react";
import { Button } from "flowbite-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">404</h1>

        <p className="text-lg mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        <p className="mb-8">
          It might have been moved or deleted. Please check the URL or return to
          the homepage.
        </p>

        <Button
          href="/"
          color="dark"
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Go Back to Home
        </Button>
      </div>
    </div>
  );
}
