import * as React from "react";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IContactSummaryProps {
  contact: IContact;
}

export const ContactSummary: React.FC<IContactSummaryProps> = ({ contact }) => {
  const passage = `Meet ${contact.name}, who can be reached at ${contact.email} and ${contact.phone}. If you need to get in touch, feel free to contact them using these details.`;

  return (
    <div>
      <h3>Contact Summary</h3>
      <p>{passage}</p>
    </div>
  );
};
