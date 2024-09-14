import { create } from "zustand";
import { AnimationsHW, burgerJs, clockJs, EcoHubGit, firstNike, gitFinder, htmlAndCss, javaScript, OkuHW, opppenheimerTest, Portfolio, reactAndSass, reactNotes, reactrouterhw, secondDiplom, StarFallYellow, totemboHW, typeScript } from "../../utils/getImg"
interface ISkill {
    id: number,
    name: string,
    img: string,
    reposName?: {
        [key: string]: string | undefined,
    }
}
interface IUseDataSkills {
    data: ISkill[]
}


export let useDataSkills = create<IUseDataSkills>(() => ({
    data: [{
        id: 1,
        name: 'Html and Css',
        img: htmlAndCss,
        reposName: {
            'OkuHW': OkuHW,
            'totemboHW': totemboHW,
            'firstNike': firstNike,
            'AnimationsHW': AnimationsHW,
            'StarFallYellow': StarFallYellow,
            'opppenheimerTest': opppenheimerTest,
            'EcoHubGit': EcoHubGit,
        }

    },
    {
        id: 2,
        name: 'JavaScript',
        img: javaScript,
        reposName: {
            'burgerJs': burgerJs,
            'clockJs': clockJs,
        }
    },
    {
        id: 3,
        name: 'React and Sass',
        img: reactAndSass,
        reposName: {
            'react-notes': reactNotes,
            'git-finder': gitFinder,
            'react-router-hw': reactrouterhw,
            'Portfolio': Portfolio,
            'secondDiplom': secondDiplom,
        }
    },
    {
        id: 4,
        name: 'TypeScript',
        img: typeScript,
        reposName: {
            'Portfolio': Portfolio,
            'secondDiplom': secondDiplom,
        }
    }],
}))

