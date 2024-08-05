import { children, createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
    <GlobalContextProvider value="User Information">
        {children}
    </GlobalContextProvider>
}
