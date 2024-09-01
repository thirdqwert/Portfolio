import { Swiper, SwiperSlide } from 'swiper/react'
import MainL from "../../layout/main/MainL"
import { FC, useEffect, useState } from "react"
import s from './Projects.module.scss'
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules"
import { getAllRepoImg } from "../../utils/getAllRepoImg"
import { useTranslation } from 'react-i18next'
import GridProjects from '../../layout/gridProjects/GridProjects'
import SwipeProjects from '../../layout/swipeProjects/SwipeProjects'
import { gitRepoStore } from '../../store/githubRepo/gitRepoStore'
import Header from '../../layout/header/Header'
import Load from '../../components/load/Load'
const Projects: FC = () => {
  const [swiperOrGrid, setSwiperOrGrid] = useState(false)
  let { t } = useTranslation()
  let { reposData, isLoading, error } = gitRepoStore()

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
        headerText='Projects'
      />
      <MainL>
        <div className={s.projects}>
          <div className="container">
            <div className={s.projects__content}>
              <h2 className={s.projects__content_title}>{t('MyProjects')}</h2>
              <div className={s.projects__content_changeMode} onClick={() => setSwiperOrGrid(!swiperOrGrid)}>{t(swiperOrGrid ? 'Grid' : 'Swipe')}</div>
              {swiperOrGrid ? (
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
                    <SwiperSlide className={s.projects__content_item} key={repo.id}>
                      <SwipeProjects
                        s={s}
                        imgLogic={getAllRepoImg[repo.name] ? <img src={getAllRepoImg[repo.name]} alt="" /> : <p>{t('ImageNotFound')}</p>}
                        repo={repo}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <>
                  <div className={s.projects__content_list}>
                    {reposData && reposData.map((repo) =>
                    (
                      <GridProjects key={repo.id}
                        s={s}
                        repo={repo}
                        imgLogic={getAllRepoImg[repo.name] ? <img src={getAllRepoImg[repo.name]} alt="" /> : <p>{t('ImageNotFound')}</p>}
                      />
                    )
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </MainL>
    </>
  )
}

export default Projects
