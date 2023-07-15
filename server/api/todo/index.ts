import { db } from "../../db"
import { v4 as uuid } from 'uuid'
export default defineEventHandler(async (e)=> {
    const method= e.node.req.method;

    if(method === "GET") {
        return db.todos
    }

    if(method === "POST") {
        const body= await readBody(e);
        const newTodo= {
            id: uuid(),
            item: body.item,
            completed:  false,
        }
        db.todos.push(newTodo)
        return newTodo
    }


    // return db.todos;
})