import React from 'react';
import { Container, ToastItem } from './styled';


const ToastList = ({ toasts }) => (
  <Container>
    {toasts.map(toast => (
      <ToastItem key={toast.id}>
        {toast.message}
      </ToastItem>
    ))}
  </Container>
);

export default ToastList;