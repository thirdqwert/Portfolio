import { FC, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import s from './MySkill.module.scss'
import MainL from '../../layout/main/MainL'
import { useDataSkills } from '../../store/data/dataMySkills'
import { PortfolioContext } from '../../context/portfolioContext'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'
import GridProjects from '../../layout/gridProjects/GridProjects'
import SwipeProjects from '../../layout/swipeProjects/SwipeProjects'
import { gitRepoStore } from '../../store/githubRepo/gitRepoStore'
import Header from '../../layout/header/Header'
import Load from '../../components/load/Load'

const MySkill:FC = () => {
  let { setSidebarStatus } = useContext(PortfolioContext)!
  let navigate = useNavigate()
  let { id } = useParams();
  let { data: validPath } = useDataSkills()
  if (!validPath.find(item => item.name.split(' ').join('').toLocaleLowerCase() == id)) {
    navigate('/notefound')
  }
  let { reposData, isLoading, error } = gitRepoStore()
  let { data: skillsData } = useDataSkills()
  let { t } = useTranslation()
  const [swiperOrGrid, setSwiperOrGrid] = useState(false)
  const currentSkill = skillsData.find((skill) => skill.name.toLowerCase().split(' ').join('') == id); // получаю нужный объект в котором хранятся данные об нужных репозиториях
  useEffect(() => {
    setSidebarStatus(false)
  }, [])
  if (isLoading) {
    return (
      <>
        <Header />
        <MainL>
          <Load />
        </MainL>
      </>
    )
  }
  if (error) {
    return (
      <>
        <Header />
        <MainL>
          <h2>{t('ErrorRefreshThePageAndTryAgain')}</h2>
        </MainL>
      </>
    )
  }
  return (
    <>
      <Header
        headerText={currentSkill?.name}
      />
      <MainL>
        <section className={s.projects}>
          <div className="container">
            <div className={s.projects__content}>
              <h2 className={s.projects__content_title}>{t('MyProjectsOn')} {t(`${currentSkill?.name}`)}</h2>
              <div className={s.projects__content_changeMode} onClick={() => setSwiperOrGrid(!swiperOrGrid)}>{t(swiperOrGrid ? 'Grid' : 'Swipe')}</div>
              {swiperOrGrid ? ( //нужно для смены режимов вида репозиториев
                <Swiper
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                >
                  {reposData && reposData.map((repo) => (
                    currentSkill?.reposName && repo.name in currentSkill.reposName ? ( //подбираю нужный репозиторий по объекту{currentSkill} с ключом {reposName} в объекте с данными о нужных репозиториях
                      <SwiperSlide className={s.projects__content_item} key={repo.id}>
                        <SwipeProjects
                          s={s}
                          imgLogic={currentSkill.reposName[repo.name] ? <img src={currentSkill.reposName[repo.name]} alt="" /> : <p>{t('ImageNotFound')}</p>}
                          repo={repo}
                        />
                      </SwiperSlide>
                    ) : (null) // что бы сделать так что бы на странице в которой нет репозиториев был текст об этом  можно создать стейт в которм будет храниться данные о том точ есть или нет репозиторий true / false
                  ))}
                </Swiper>
              ) : (
                <>
                  <div className={s.projects__content_list}>
                    {reposData && reposData.map((repo) => (
                      currentSkill?.reposName && repo.name in currentSkill.reposName ? ( //подбираю нужный репозиторий по объекту{currentSkill} с ключом {reposName} в объекте с данными о нужных репозиториях
                        <GridProjects key={repo.id}
                          s={s}
                          repo={repo}
                          imgLogic={currentSkill.reposName[repo.name] ? <img src={currentSkill.reposName[repo.name]} alt="" /> : <p>{t('ImageNotFound')}</p>}
                        />
                      ) : (null) // что бы сделать так что бы на странице в которой нет репозиториев был текст об этом  можно создать стейт в которм будет храниться данные о том точ есть или нет репозиторий true / false
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </MainL>
    </>
  )
}

export default MySkill
