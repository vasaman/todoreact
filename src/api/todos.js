const count={
    num:4,
}
const todos =[
    {   
        id:1,
        title:"woeek",
        description:"afffgdff"
    },
    {
        id: 2,
        title: "exercise",
        description: "afffgdffsfdgag"
    },
    {
        id: 3,
        title: "cleani",
        description: "faafffgdff"
    },
    {
        id: 4,
        title: "eat",
        description: "faf//fsf;gzfd'';g's"
    },
    
]
export const getTodos = () => {
    return todos;
}

export const addTodo = (todo) => {
    count.num = count.num + 1
    var total = count.num
    var obj ={
        id:total,
        title:todo.title,
        description:todo.description,
        }
    todos.push(obj)
}