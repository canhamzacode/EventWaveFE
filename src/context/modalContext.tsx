import { createContext } from 'react';

const ModalContext = createContext({
  toggleModal: () => {}
});

export default ModalContext;
