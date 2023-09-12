import { Todo } from '../TodoList/Todo';

export class TodoList {
    //lista privada para todo
    private todos: Todo[] = [];

    //generador de id para cada elemento de la lista
    generadorDeId() {
        //traigo la lista
        const id = this.todos.map(e => e.todoId);
            //si no tiene id le agrego una
            if (!id.length) {
                id.push(0);
            }
        return Math.max(...id) + 1; 
    }

    //agregar una nueva tarea a la lista
    addTodoList(DefaultTodo: Todo) {
        this.todos.push(DefaultTodo);
    }

    //llamo la lista completa
    getTodosList() {
        return this.todos;
    }

    //elimino un elemento de la lista por el id
    deleteTodoList(id: number) {
        this.todos = this.todos.filter(e => e.todoId !== id);
    }

    //marco completo un el elemento de la lista
    completoTodoList(id: number) {
        this.todos = this.todos.map(e => {
        if (e.todoId === id) {
            e.isCompleted = true;
        }
        return e;
    });
  }
}

const Lista = new TodoList();

//creo tareauno
const TodoUno: Todo = {
    todoId: Lista.generadorDeId(),
    todoTitle: 'Primero',
    isCompleted: false,
    todoDate: '2018-09-12',
};

//agrego a la lista
Lista.addTodoList(TodoUno);

//creo tareados
const TodoDos: Todo = {
    todoId: Lista.generadorDeId(),
    todoTitle: 'Segundo',
    isCompleted: false,
    todoDate: '2018-09-12',
};

//agrego a la lista
Lista.addTodoList(TodoDos);

console.log(Lista.getTodosList());

//elimino la tarea de id 2
Lista.deleteTodoList(2);

console.log(Lista.getTodosList());

//marco como completo el elemento de id 1
Lista.completoTodoList(1);

console.log(Lista.getTodosList());
