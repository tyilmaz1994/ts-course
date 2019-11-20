import axios from "axios";

const firsTodoUrl = "https://jsonplaceholder.typicode.com/todos/1";

// struct of data
interface Todo{

    id: number;
    title: string;
    completed: boolean;

}

axios.get(firsTodoUrl).then(response => {
    
    const data = response.data as Todo;

    logTodo(data.id, data.title, data.completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    
    console.log(`
        The Id of T.O.D.O. is ${id}
        The title of T.O.D.O. is ${title}
        The result of T.O.D.O. is ${completed}
    `);

};
