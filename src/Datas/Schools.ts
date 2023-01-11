

const schools = {
    op: {
        logo: '/op.svg',
        title: 'Front-end Developer (React)',
        name: 'OpencClassroom',
        link: 'https://www.francecompetences.fr/recherche/rncp/35976/',
        dos: new Date('2021-11-23').toLocaleDateString(),
        doe: new Date('2022-12-23').toLocaleDateString(),
        technos: [{name: 'React',img: '/react.svg'}, {name: 'Redux.svg', img: '/redux.svg'},{name: 'Js', img: '/logos_javascript.svg'},{name: 'Html', img: '/html.svg'},{name: 'Css', img: '/css.svg'},{name: 'Figma', img: '/figma.svg'},{name: 'Jest', img: '/jest.svg'}],
        summary: ['Framework front-end','React','Sass','Redux','Html','Css']
    },
    thp: {
            logo: '/thp1.png',
            title: 'Developpeur Web',
            name: 'THP',
            link: 'https://www.thehackingproject.org/parcours/developpeur-web-fullstack',
            dos: new Date('2019-09-01').toLocaleDateString(),
            doe: new Date('2019-12-19').toLocaleDateString(),
            technos: [{name: 'Html',img: '/html.svg'}, {name: 'Css', img: '/css.svg'},{name: 'Ruby', img: '/ruby.svg'},{name: 'Ruby on rails', img: '/rubyOnRails.svg'}],
            summary: ['Découverte de la programmation','html','css','ruby','méthode agile','git','github']
    },
    moi: {
        logo: '/moi2.png',
        title: 'Developper front-end',
        name: 'ByMyself inc',
        link:'https://github.com/laurent-martinez',
        dos: new Date('2019-08-1').toLocaleDateString(),
        doe: '...',
        technos: [{name: 'Tailwind',img: '/tailwind.svg'}, {name: 'Docker', img: '/docker.svg'},{name: 'Next', img: '/next1.svg'},{name: 'TypeScript', img: '/ts.svg'},{name: 'StoryBook', img: '/Storybook.svg'}],
        summary: ['Framework front-end','React','Sass','Redux','Html','Css','TypeScript']
    }
}

export default schools;