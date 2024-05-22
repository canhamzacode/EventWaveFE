import { createContext } from 'react';

const ModalContext = createContext({
  toggleModal: () => {},
  toggleLogout: () => {}
});

export default ModalContext;
