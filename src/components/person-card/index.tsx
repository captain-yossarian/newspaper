import React from "react";

interface PersonCardProps {
  name: string;
  role:string;
  description: string;
}

export const PersonCard = ({ name, description,role }:PersonCardProps) => {
  return (
    <section className="flex flex-col gap-2">
      <header>
        <p><span className="font-semibold">{name}</span> - {role}</p>
      </header>
      <div>
        <p className="text-justify">{description}</p>
      </div>
    </section>
  );
};
