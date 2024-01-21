import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

export const GlobalContext = React.createContext({
    restrictions: [] as string[],
    setRestrictions: (restrictions: string[]) => {},
});

const Layout: React.FC = () => {
    const [restrictions, setRestrictions] = useState<string[]>([]);

    return (
        <GlobalContext.Provider value={{
            restrictions,
            setRestrictions,
        }}>
            <Outlet />
        </GlobalContext.Provider>
    );
};

export default Layout;