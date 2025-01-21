import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  subject,
  message,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <h2>{subject}</h2>
    <p>{message}</p>
  </div>
);
