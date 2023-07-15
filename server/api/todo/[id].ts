import { db } from "../../db";
import { sendError  } from "h3";

export default defineEventHandler ((e)=> {
    const method= e.node.req.method;
    const context= e.context;
    
    const findTodoById= (todoId: string) => {    
        let index;
        const todo= db.todos.find((task, i)=> {
            if(task.id == todoId) {
                index= i;
                return true
            }
            return false
        })
        if(!todo) {
            const TaskNotFound= createError({
                statusCode: 404,
                statusMessage: 'Task Not Found',
                data: {}
            })
            sendError(e,TaskNotFound)
        }
        return { todo, index }
    }

    if(method === "PUT") {
        if (context.params) {
            let  id  = context.params.id
        
            const { todo, index }= findTodoById(id)
            
            const updateTodo= {
                ...todo,
                completed: !todo?.completed
            }
            db.todos[index]= updateTodo;
            

            return updateTodo
        }
    }

    if(method === "DELETE") {
        if (context.params) {
            let  id  = context.params.id
        
            const { index }= findTodoById(id);

            db.todos.splice(index, 1)

            return {
                message: "item deleted"
            }
        }
    }
})