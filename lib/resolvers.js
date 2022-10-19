const courses = [
    {
        _id: 'lol',
        title: 'Matematicas',
        teacher: 'Jose David',
        description: 'Materia de numeros',
        topic: '2'
    },
    {
        _id: 'test',
        title: 'Matematicas 2',
        teacher: 'Jose David',
        description: 'Materia de numeros',
        topic: 'Dia'
    },
    {
        _id: 'lol',
        title: 'Matematicas 3',
        teacher: 'Jose David',
        description: 'Materia de numeros',
        topic: 'Noche'
    }
]

module.exports = {

    hello: () => {
        return 'Hola mundo'
    },

    name: () => {
        return 'Jose'
    },

    getCourses: () =>{
        return courses
    }

}