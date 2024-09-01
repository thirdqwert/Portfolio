import { createHashRouter } from "react-router-dom";
import AboutMe from "../pages/aboutMe/AboutMe";
import Projects from "../pages/projects/Projects";
import Contacts from "../pages/contacts/Contacts";
import MySkill from "../pages/mySkill/MySkill";
import CurrentProject from "../pages/currentProject/CurrentProject";
import NoteFoundPage from "../pages/noteFoundPage/NoteFoundPage";

export const route = createHashRouter([
    { path: '/', element: <AboutMe /> },
    { path: '/projects', element: <Projects /> },
    { path: '/contacts', element: <Contacts /> },
    { path: '/myskill/:id', element: <MySkill /> },
    { path: '/project/:id', element: <CurrentProject /> },
    { path: '*', element: <NoteFoundPage /> },
])