import s from './Skills.module.scss'
import { Link } from "react-router-dom"
import { useDataSkills } from "../../store/data/dataMySkills"
import { useTranslation } from 'react-i18next'
import { FC } from 'react'
const Skills:FC = ({ }) => {
    let { data } = useDataSkills()
    let { t } = useTranslation()
    let pathToSkillPage = data.map(item => ({
        ...item,
        path: item.name.toLowerCase().split(' ').join(''),
    }));

    return (
        <>
            {pathToSkillPage.map((item, i) => (
                <Link to={`/myskill/${item.path}`} className={s.skills__item} key={item.id}>
                    <img src={item.img} className={s.skills__item_img} />
                    <p className={s.skills__item_title}>{t(item.name)}</p>
                    <p className={s.skills__item_text}>{t('more')}</p>
                </Link>
            ))}
        </>
    )
}

export default Skills