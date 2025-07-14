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
  const hasEmail = contact.email && contact.email.trim() !== "";
  const hasPhone = contact.phone && contact.phone.trim() !== "";
  const hasName = contact.name && contact.name.trim() !== "";

  return (
    <div style={{ padding: "8px" }}>
      <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "600" }}>
        Contact Summary
      </h3>
      
      {hasName && (
        <div style={{ marginBottom: "8px" }}>
          <strong>Name:</strong> {contact.name}
        </div>
      )}
      
      {hasEmail && (
        <div style={{ marginBottom: "8px" }}>
          <strong>Email:</strong> {contact.email}
        </div>
      )}
      
      {hasPhone && (
        <div style={{ marginBottom: "8px" }}>
          <strong>Phone:</strong> {contact.phone}
        </div>
      )}
      
      {!hasName && !hasEmail && !hasPhone && (
        <div style={{ fontStyle: "italic", color: "#666" }}>
          No contact information available
        </div>
      )}
    </div>
  );
};
