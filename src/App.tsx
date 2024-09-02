import { FC, useEffect, useState } from "react"
import s from './layout/sidebar/Sidebar.module.scss'
import m from './layout/main/MainL.module.scss'
import clsx from "clsx"
import { PortfolioContext } from "./context/portfolioContext"
import { RouterProvider } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { getGitData } from "./api/getGitData"
import { gitRepoStore } from "./store/githubRepo/gitRepoStore"
import { route } from "./routes/routes"
const App: FC = () => {
  let { data, isLoading: LoadingStatus, error } = getGitData()
  let { setReposData, setIsLoading, setError } = gitRepoStore()

  useEffect(() => {
    if (data) {
      setReposData(data)
    }
    if (error) {
      setError(error)
    }
    setIsLoading(LoadingStatus)
  }, [data, LoadingStatus, error])

  let isLowerMidScreen = useMediaQuery({ query: '(max-width: 1199.98px)' })
  const [sidebarStatus, setSidebarStatus] = useState(isLowerMidScreen ? false : true)
  const [changeTheme, setChangeTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  let sideBarClass = clsx(`${s.sidebar}`, { [`${s.small}`]: !sidebarStatus })
  let mainSize = clsx(`${m.main}`, { [`${m.small}`]: !sidebarStatus })

  const changeThemeFn = () => {
    const newTheme = changeTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setChangeTheme(localStorage.getItem('theme'));
  }
  return (
    <>
      <PortfolioContext.Provider value={{
        sideBarClass,
        setSidebarStatus,
        sidebarStatus,
        mainSize,
        changeThemeFn,
        changeTheme,
        isLowerMidScreen,
      }}>
        <div className={`wrapper ${isLowerMidScreen && sidebarStatus ? 'disable' : ''}`}>
          <div className={`back ${changeTheme}`}></div>
          <RouterProvider router={route} />
        </div>
      </PortfolioContext.Provider>
    </>
  )
}

export default App
