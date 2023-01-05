const schools = {
    op: {
        logo: '/op.svg',
        title: 'Developpeur d\'application',
        name: 'OpencClassroom',
        dos: new Date('2021-11-23').toLocaleDateString(),
        doe: new Date('2022-12-23').toLocaleDateString(),
        technos: [{name: 'React',img: '/react.svg'}, {name: 'Redux.svg', img: '/redux.svg'},{name: 'Js', img: '/logos_javascript.svg'}],
        summary: ['Maitrise d\'un framework front-end','React','Sass','Redux','Html','Css']
    },
    thp: {
            logo: '/thp1.png',
            title: 'Developpeur Web',
            name: 'THP',
            dos: new Date('2019-09-01').toLocaleDateString(),
            doe: new Date('2019-12-19').toLocaleDateString(),
            technos: [{name: 'React',img: '/react.svg'}, {name: 'Redux.svg', img: '/redux.svg'},{name: 'Js', img: '/logos_javascript.svg'}],
            summary: ['Découverte de la programmation','html','css','ruby','méthode agile','git','github']
    }
}

export default schools;