import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
import { IGitRepos } from "../../types/types"
import { useTranslation } from "react-i18next"
interface IProps {
    s: CSSModuleClasses,
    repo: IGitRepos,
    imgLogic: ReactNode
}
const GridProjects: FC<IProps> = ({ s, repo, imgLogic }) => {
    let { t } = useTranslation()
    return (
        <>
            <div className={s.projects__content_item} >
                <div className={s.projects__content_item_img}>{imgLogic}</div>
                <p className={s.projects__content_item_name}>{repo.name}</p>
                <p className={s.projects__content_item_date}>{t('CreatedAt')}: {repo.created_at.split('T')[0]}</p>
                <a href={repo.homepage} className={s.projects__content_item_link}>{t('VisitWebSite')}</a>
                <a href={repo.html_url} className={s.projects__content_item_link}>{t('VisitGitHubProject')}</a>
                <Link to={`/project/${repo.name}`} className={s.projects__content_item_link}>{t('moreAboutProject')}</Link>
            </div>
        </>
    )
}

export default GridProjects
