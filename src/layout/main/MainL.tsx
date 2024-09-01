import { FC, ReactNode, useContext } from 'react'
import s from './MainL.module.scss'
import { PortfolioContext } from '../../context/portfolioContext'
import Sidebar from '../sidebar/Sidebar'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'
interface IProps {
    children:ReactNode
}
const MainL:FC<IProps> = ({children}) => {
    let {mainSize} = useContext(PortfolioContext)!
    return (
        <>
        <ScrollToTop/>
            <main className={mainSize}>
                <Sidebar/>
                {children}
            </main>
        </>
    )
}

export default MainL
