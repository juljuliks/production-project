import { Suspense } from "react"
import { Link } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"

export const App = () => {
  const {theme, toggleTheme} = useTheme()

  return <div className={classNames('app', {}, [theme])}>
    <button onClick={toggleTheme}>change theme</button>
    <br />
    <Link to={'/about'}>About</Link>
    <Link to={'/'}>Main</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/about" element={<AboutPageAsync/>} />
            <Route path="/" element={<MainPageAsync/>} />
        </Routes>
      </Suspense>

    <Counter/>
  </div>
}
