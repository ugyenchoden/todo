import type { Todo } from "../types/Todo";

interface TodoPageProps {
    filter: 'all' | 'today' | 'week';
    todoItems: Todo[]
}

function TodoPage({ filter, todoItems }: TodoPageProps) {
    const filteredTodos = todoItems.filter(todo => {
        if (!todo.dueDate) return false;
        
        const today = new Date();
        const dueDate = new Date(todo.dueDate);

        if(filter === 'today') {    
            return dueDate.toDateString() === today.toDateString();
        } else if(filter === 'week') {
            const dayOfWeek = today.getDay();
            const day = today.getDate();

            const startDate = new Date(today);
            startDate.setDate(day - (dayOfWeek === 0 ? 6 : dayOfWeek - 1)); // if Sunday, go back 6 days
            startDate.setHours(0, 0, 0, 0);

            let endDate = new Date(today);
            endDate.setDate(startDate.getDate() + 6);
            console.log( 'dueDate:', dueDate);
            return startDate <= dueDate && dueDate <= endDate;
        }
        return true; 
    });
    return(
    <>
        <h1 style={{paddingLeft: '40px'}}>{filter === "all" ? "Home" : filter === "today" ? "Today" : "Week"}</h1>
        <ul style={{listStyleType: 'none'}}>
            {filteredTodos.map(todo => (
                <li key={todo.id} 
                className={`priority-${todo.priority}  todo-item`}
                onMouseEnter={(e) => (
                    e.currentTarget.style.backgroundColor = '#333', 
                    e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.2) 3px 3px 5px 2px'
                )}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                     <input type="checkbox" checked={todo.completed}></input>
                     <span className={`${todo.completed? 'text-strike': null }`}> {todo.title} - Due: {todo.dueDate}</span>
                    
                     <button style={{alignItems: 'end'}} type="submit">Edit</button>
                     <button style={{alignItems: 'end'}} type="submit">Delete</button>
                </li>
            ))}
        </ul>
    </>
    ) 

}

export default TodoPage;