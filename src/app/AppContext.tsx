"use client";

import React from "react";

interface AppContextProps {

}

const AppContext = React.createContext<AppContextProps>({} as any);

export default function AppContextProvider({ children }: any) {

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return React.useContext(AppContext);
}