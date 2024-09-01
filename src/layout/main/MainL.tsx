import { FC, ReactNode, useContext } from 'react'
import s from './MainL.module.scss'
import { PortfolioContext } from '../../context/portfolioContext'
import Sidebar from '../sidebar/Sidebar'
interface IProps {
    children:ReactNode
}
const MainL:FC<IProps> = ({children}) => {
    let {mainSize} = useContext(PortfolioContext)!
    return (
        <>
            <main className={mainSize}>
                <Sidebar/>
                {children}
            </main>
        </>
    )
}

export default MainL
