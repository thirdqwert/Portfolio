import { FC, useContext } from 'react'
import { aboutME, close, projects, contacts, dark, light } from '../../utils/getIcons.js'
import s from './Sidebar.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { PortfolioContext } from '../../context/portfolioContext.js'
import { useTranslation } from 'react-i18next'
interface ILinks {
    className: string,
    id: number,
    icon: JSX.Element,
    text: string,
    linkPage: string
}
const Sidebar: FC = () => {
    let { setSidebarStatus, sidebarStatus, sideBarClass, changeThemeFn, changeTheme, isLowerMidScreen } = useContext(PortfolioContext)!
    let classLinkText = `${s.nav__list_li_text} ${!sidebarStatus ? s.closed : ''}`
    const links: ILinks[] = [
        { className: s.nav__list_li, id: 1, icon: aboutME, text: "About Me", linkPage: '/' },
        { className: s.nav__list_li, id: 2, icon: projects, text: "Projects", linkPage: '/projects' },
        { className: s.nav__list_li, id: 3, icon: contacts, text: "Contacts", linkPage: '/contacts' },
        { className: s.nav__list_li, id: 4, icon: close, text: "Close", linkPage: '' },
    ]
    let { t } = useTranslation()
    return (
        <>
            <section
                className={`${sideBarClass} ${isLowerMidScreen && sidebarStatus ? s.fullScreen : ''}`}
                onClick={() => isLowerMidScreen && sidebarStatus && setSidebarStatus(false)}
            >
                <nav className={s.nav} onClick={(event) => event.stopPropagation()}>
                    <div className={s.nav__logoAndList}>
                        <Link to='/' className={s.nav__logo}>{sidebarStatus ? 'Portfolio' : 'P'}</Link>
                        <ul className={s.nav__list}>
                            {links.map((item, i) => (
                                !sidebarStatus && item.id == 4 ? null :
                                    <NavLink key={item.id} to={item.linkPage} className={item.id == 4 ?
                                        item.className :
                                        ({ isActive }) => isActive ? `${item.className} ${s.active}` : `${item.className}`}
                                        onClick={() => {
                                            isLowerMidScreen ? setSidebarStatus(false) : item.id == 4 && setSidebarStatus(false)
                                        }
                                        }
                                    >
                                        <div>{item.icon}</div>
                                        <p className={classLinkText}>
                                            {t(item.text)}
                                        </p>
                                    </NavLink>
                            ))}
                        </ul>
                    </div>
                    <div className={s.nav__changeTheme} onClick={() => changeThemeFn()}>{changeTheme == 'light' ? dark : light}</div>
                </nav>
            </section >
        </>
    )
}

export default Sidebar
