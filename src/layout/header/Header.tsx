import s from './Header.module.scss'
import { bars } from '../../utils/getIcons'
import { FC, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PortfolioContext } from '../../context/portfolioContext'
interface IProps {
  headerText?: string
}
const Header: FC<IProps> = ({ headerText }) => {
  let { setSidebarStatus, sidebarStatus } = useContext(PortfolioContext)!
  const [langText, setLangText] = useState(localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en')
  let { i18n, t } = useTranslation()
  const changeLangFn = () => {
    let newLang = langText == 'en' ? 'ru' : 'en'
    setLangText(newLang)
    localStorage.setItem('lang', newLang)
    i18n.changeLanguage(newLang)
  }
  useEffect(() => {
    if (localStorage.getItem('lang')) {
      i18n.changeLanguage(localStorage.getItem('lang')!)
    }
  }, [])
  return (
    <>
      <header className={s.header} >
        <nav className={s.nav}>
          <div className={s.nav__btnMenu} onClick={() => setSidebarStatus(!sidebarStatus)}>{bars}</div>
          <p className={s.nav__pageName}>{t(`${headerText ? headerText : ''}`)}</p>
          <p className={s.nav__changeLang} onClick={() => changeLangFn()}>{langText}</p>
        </nav>
      </header>
    </>
  )
}
export default Header
