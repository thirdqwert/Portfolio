import s from './AboutMe.module.scss'
import avatar from '../../assets/img/aboutMe.png'
import Skills from '../../components/skills/Skills'
import MainL from '../../layout/main/MainL'
import { useTranslation } from 'react-i18next'
import Header from '../../layout/header/Header'
import { FC } from 'react'
const AboutMe:FC = () => {
  let { t } = useTranslation()
  return (
    <>
    <Header
    headerText={'About Me'}
    />
      <MainL>
        <section className={s.aboutMeSection}>
          <div className={s.aboutMe}>
            <div className="container">
              <div className={s.aboutMe__title}>{t('About Me')}</div>
              <div className={s.aboutMe__cnt}>
                <div className={s.aboutMe__cnt_box}>
                  <div className={s.aboutMe__cnt_box_top}>
                    <img className={s.aboutMe__cnt_avt} src={avatar} alt="" />
                    <div className={s.aboutMe__cnt_inf}>
                      <p className={s.aboutMe__cnt_inf_text}>{t('FirstAndSecondName')}: <span>{t('MyFirstAndSecondName')}</span></p>
                      <p className={s.aboutMe__cnt_inf_text}>{t('Age')}: <span>15 {t('year')}</span></p>
                      <p className={s.aboutMe__cnt_inf_text}>{t('CountryandCity')}: <span>Uzbekistan,Tashkent</span></p>
                      <p className={s.aboutMe__cnt_inf_text}>{t('Experience')}: <span>0 {t('year')}</span></p>
                    </div>
                  </div>
                  <div className={s.aboutMe__cnt_box_bottom}>
                    <p className={s.aboutMe__cnt_descp}>{t('aboutMeDescb')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.skills}>
            <h2 className={s.skills__title}>{t('mySkills')}</h2>
            <div className={s.skills__box}>
              <Skills />
            </div>
          </div>
        </section>
      </MainL>

    </>
  )
}

export default AboutMe
