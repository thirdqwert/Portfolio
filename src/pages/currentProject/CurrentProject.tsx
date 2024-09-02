import { useNavigate, useParams } from "react-router-dom"
import MainL from "../../layout/main/MainL"
import Load from "../../components/load/Load"
import s from './CurrentProject.module.scss'
import currentImg from "../../utils/currentProjectImg"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules"
import { useTranslation } from "react-i18next"
import { gitRepoStore } from "../../store/githubRepo/gitRepoStore"
import Header from "../../layout/header/Header"
import { FC } from "react"

const CurrentProject: FC = () => {
    let { id } = useParams()
    let navigate = useNavigate()
    let { t } = useTranslation()
    let { reposData, isLoading, error } = gitRepoStore()
    let currentItem = reposData && reposData.find((repo) => repo.name == id)
    if (reposData && !reposData.find((item) => item.name == id)) {
        navigate('/notefound')
    }
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
                headerText={currentItem?.name}
            />
            <MainL>
                <div className={s.project}>
                    <div className="container">
                        <div className={s.project__cnt}>
                            {currentItem ? (
                                <>
                                    {currentImg[currentItem.name] ? (
                                        <Swiper
                                            key={currentItem.id}
                                            modules={[Pagination]}
                                            loop={true}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            spaceBetween={20}
                                            slidesPerView={1}>
                                            {
                                                currentImg[currentItem.name].map((item) => (
                                                    <SwiperSlide>
                                                        <div className={s.project__cnt_img}>
                                                            <img src={item} alt="" />
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                                )}
                                        </Swiper>
                                    ) : <p>{t('ImageNotFound')}</p>}
                                    <p className={s.project__cnt_name}>{currentItem.name}</p>
                                    <p className={s.project__cnt_date}>{t('CreatedAt')}: {currentItem.created_at.split('T')[0]}</p>
                                    <a href={currentItem.homepage} className={s.project__cnt_link}>{t('VisitWebSite')}</a>
                                    <a href={currentItem.html_url} className={s.project__cnt_link}>{t('VisitGitHubProject')}</a>
                                </>
                            ) : <Load />}
                        </div>
                    </div>
                </div>
            </MainL>
        </>
    )
}

export default CurrentProject
