import React from "react";
import { Button } from "flowbite-react";
import { CardComponent as Card } from "../../components/Card/Card";

export default function HomePage() {
  return (
    <div>
      <section className="hero text-white py-20 px-8 text-center bg-gradient-to-tr from-indigo-500 via-purple-600 to-cyan-500">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          Welcome to My Website
        </h1>

        <p className="text-lg lg:text-2xl mb-8">
          Discover amazing content and explore our latest features.
        </p>

        <Button
          href="#about"
          color="light"
          className="text-blue-600 bg-white hover:bg-gray-100"
        >
          Learn More
        </Button>
      </section>

      <section id="about" className="about py-16 px-8 bg-gray-100">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">
          About Us
        </h2>

        <p className="text-lg mb-6 text-center text-gray-700">
          We are dedicated to delivering exceptional experiences through our
          innovative solutions and services. Our team is committed to creating
          valuable and impactful content that resonates with our audience.
        </p>

        <Button
          href="#features"
          color="dark"
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Our Services
        </Button>
      </section>

     

      <section
        id="testimonials"
        className="testimonials py-16 px-8 bg-gray-100"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-gray-800">
          What Our Users Say
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <Card className="w-full max-w-sm">
            <p className="text-base mb-4">
              "Amazing experience! The platform is intuitive and easy to use. I
              highly recommend it to everyone."
            </p>

            <h4 className="font-semibold">Jane Doe</h4>

            <p className="text-gray-600">CEO, Company</p>
          </Card>

          <Card className="w-full max-w-sm">
            <p className="text-base mb-4">
              "A game-changer for our business. The features are top-notch and
              customer support is outstanding."
            </p>

            <h4 className="font-semibold">John Smith</h4>

            <p className="text-gray-600">Founder, Startup</p>
          </Card>
        </div>
      </section>

      <section
        id="cta"
        className="cta py-16 px-8 bg-blue-600 text-white text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <p className="text-lg mb-6">
          Join us today and experience the difference. Sign up now and start
          with our free trial!
        </p>

        <Button
          href="/"
          color="light"
          className="bg-white text-blue-600 hover:bg-gray-100"
        >
          Sign Up
        </Button>
      </section>
    </div>
  );
}
