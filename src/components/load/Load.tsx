import { FC } from 'react'
import s from './Load.module.scss'
const Load:FC = () => {
    return (
        <>
        <div className={s.loader__wrapper}>
            <div className={s.loader}>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
                <div className={s.circle}></div>
            </div>
        </div>
        </>
    )
}

export default Load
