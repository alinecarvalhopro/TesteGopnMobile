import React, {createContext, useState, useContext} from 'react';

export const PlaybookContext = createContext();

export const PlaybookProvider = ({children}) => {
  const [playbooks, setPlaybooks] = useState([
    {
      id: '1',
      name: 'Prototipagem',
      description:
        '1. Reunião com o cliente; 2. Brainstorming; 3. Backlog; 4. Wireframe; 5. Prototipagem',
      category: 'UX Design',
    },
  ]);

  return (
    <PlaybookContext.Provider value={{playbooks}}>
      {children}
    </PlaybookContext.Provider>
  );
};
