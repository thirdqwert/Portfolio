import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './NoteFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
const NoteFoundPage:FC = () => {
  let { t,i18n } = useTranslation()

  
  useEffect(() => {
    if (localStorage.getItem('lang')) {
      i18n.changeLanguage(localStorage.getItem('lang')!)
    }
  }, [])
  return (
    <div style={{ padding: '71px 20px 20px', }}>
      <h2 className={s.errorText}>{t('error')}</h2>
      <Link className={s.errorLink} to='/'>{t('BackToMainPage')}</Link>
    </div>
  )
}

export default NoteFoundPage
