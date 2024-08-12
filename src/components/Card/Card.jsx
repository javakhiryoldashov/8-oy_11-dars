import React from "react";
import { Card } from "flowbite-react";

export function CardComponent({ children, className }) {
  return (
    <Card
      className={`${className} cursor-pointer hover:scale-105 transition-transform`}
    >
      {children}
    </Card>
  );
}
