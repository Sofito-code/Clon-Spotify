import React from "react";

interface SofiProps {
  name: string;
  lastName: string;
  email: string;
  age: number;
}

const Sofi = ({ name, lastName, email, age }: SofiProps) => {
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Apellido: {lastName}</p>
      <p>Correo: {email}</p>
      <p>Edad: {age}</p>
    </div>
  );
};

interface Sofi2Props{
  children: JSX.Element;
}

const Sofi2 = ({children}:Sofi2Props) => {
  return <div>
    {children}
  </div>
}

export { Sofi, Sofi2 };
