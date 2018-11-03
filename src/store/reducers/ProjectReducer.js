const initState = {
    projects: [
        {id: 1, title: 'help me find peach', content: 'bla bla bla'},
        {id: 2, title: 'collect all the start', content: 'bla bla bla'},
        {id: 3, title: 'egg hunt with yoshi', content: 'bla bla bla'},
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
    }
    return state
}

export default ProjectReducer