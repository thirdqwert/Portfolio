import { FC, FormEvent, useRef, useState } from 'react'
import MainL from '../../layout/main/MainL'
import s from './Contacts.module.scss'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { instagram, telegram } from '../../utils/getIcons'
import { useTranslation } from 'react-i18next'
import Header from '../../layout/header/Header';
const Contacts:FC = () => {
  let { t } = useTranslation()
  const [errorSend, setErrorSend] = useState('')
  const form = useRef(null);
  const {
    register,
    reset,
    formState: {
      errors,
      isValid,

    }
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (form.current) {
      emailjs
        .sendForm('service_io8fo4x', 'template_yj49z41', form.current, {
          publicKey: 'ewd8imt3MeeSnB7SB',
        })
        .then(
          () => {
            setErrorSend('')
            reset()
          },
          (error) => {
            setErrorSend(error)
          },
        );
    }
  }

  return (
    <>
      <Header
        headerText='Contacts'
      />
      <MainL>
        <div className={s.contacts}>
          <div className="container">
            <div className={s.contacts__title}>{t('HowToContactMe')}</div>
            <div className={s.contacts__cnt}>
              <form className={s.contacts__cnt_form} ref={form} onSubmit={(event) => onSubmit(event)}>
                <div className={s.contacts__cnt_form_emailAndName}>
                  <input
                    type="text"
                    placeholder={t('Name')}
                    {...register('name', {
                      required: true
                    })}
                  />
                  <input
                    type='text'
                    placeholder={t('Mail')}
                    {...register('email', {
                      required: true
                    })}
                  />
                </div>
                <textarea
                  className={s.contacts__cnt_form_message}
                  placeholder={t('Message')}
                  {...register('message', {
                    required: true
                  })}
                />
                {errors.name && <p>{t('TheNameFieldIsRequired')}</p>}
                {errors.email && <p>{t('TheMailFieldIsRequired')}</p>}
                {errors.message && <p>{t('TheMessageFieldIsRequired')}</p>}
                {errorSend && <p>{t('ErrorRefreshThePageAndTryAgain')}</p>}
                <button disabled={!isValid}>{t('send')}</button>
              </form>
              <div className={s.contacts__cnt_links}>
                <a className={s.link} href='https://www.instagram.com/lorem123331'><img src={instagram} alt="" /></a>
                <div className={s.link}><a href='https://telegram.me/sghshhjd'>{telegram}</a></div>
              </div>
            </div>
          </div>
        </div>
      </MainL>
    </>
  )
}

export default Contacts
