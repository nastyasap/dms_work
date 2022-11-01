import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import DeleteButtonModal from './DeleteButtonModal';

const ModalsContext = React.createContext({
  setDeleteTableRow: (value: null | string) => {},
});
export const useModals = () => useContext(ModalsContext);

interface Props {
  children: React.ReactNode;
}
export const ModalsProvider: React.FC<Props> = ({ children }) => {
  const [deleteTableRow, setDeleteTableRow] = useState<null | string>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDeleteTableRow(null);
      }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  return (
    <ModalsContext.Provider value={{ setDeleteTableRow }}>
      <>
        {ReactDOM.createPortal(
          <>
            <DeleteButtonModal rowId={deleteTableRow} onClose={() => setDeleteTableRow(null)} />
          </>,
          document.body,
        )}
        {children}
      </>
    </ModalsContext.Provider>
  );
};
