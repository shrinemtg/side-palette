import React from 'react';
import styled from 'styled-components';

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <h2>お問い合わせ</h2>
      <ContactForm>
        <StyledInput type="text" placeholder="お名前" />
        <StyledInput type="email" placeholder="メールアドレス" />
        <StyledTextarea placeholder="メッセージ" rows={4} />
        <SubmitButton type="submit">送信</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f9fafb;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

export default Contact;