import { createContext } from "react";
interface IContext {
    sideBarClass: string,
    setSidebarStatus: (status: boolean) => void,
    sidebarStatus: boolean,
    mainSize: string,
    changeThemeFn: () => void,
    changeTheme: string | null,
    isLowerMidScreen: boolean,
}
export const PortfolioContext = createContext<IContext | undefined>(undefined)