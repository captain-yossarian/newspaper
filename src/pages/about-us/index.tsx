import React from 'react'
import { PERSONS } from '@/constants/persons';
import { PersonCard } from '@/components/person-card'; 

export const AboutUsPage = () => {
  return (
       <div className="w-full">
       <div className="flex flex-col gap-3">
       {PERSONS.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
       </div>
    
      </div>
   );
};