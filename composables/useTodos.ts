const useTodos= ()=> {
    const { data: todos, refresh }= useAsyncData("todo", async()=> {
        return $fetch("/api/todo")
    })
    
    async function  addTodo(item) {
        await $fetch('/api/todo/', {
            method: 'POST',
            body: {
                item
            }
        })        
        refresh()
    }
    
    async function updateTodo(id) {
        await $fetch(`/api/todo/${id}`, {
            method: "PUT"
        })
        refresh()
    }
    
    async function deleteTodo(id) {
        await $fetch(`/api/todo/${id}`, {
            method: "DELETE"
        })
        refresh()
    }

    return { todos, addTodo, updateTodo, deleteTodo }
}

export default useTodos