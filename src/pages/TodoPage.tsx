interface TodoPageProps {
    filter: 'all' | 'today' | 'week';
}

const todoItems = [
    { id: 1, title: 'Buy groceries', dueDate: new Date().toISOString().split('T')[0], completed: false },
    { id: 2, title: 'Walk the dog', dueDate: '2024-06-11', completed: true },
    { id: 3, title: 'Read a book', dueDate: '2024-06-15', completed: true },
    { id: 4, title: 'testing', dueDate: '2026-01-14', completed: false }
];

function TodoPage({ filter }: TodoPageProps) {

    const filteredTodos = todoItems.filter(todo => {
    const today = new Date();
    const dueDate = new Date(todo.dueDate);

    if(filter === 'today') {    
        return dueDate.toDateString() === today.toDateString();
    } else if(filter === 'week') {
        const dayOfWeek = today.getDay();
        const numDay = today.getDate();

        let startDate = new Date(today);
        startDate.setDate(numDay- dayOfWeek);
        startDate.setHours(0,0,0,0);

        let endDate = new Date(today);
        endDate.setDate(numDay + (7-dayOfWeek));
        endDate.setHours(0,0,0,0);
        
        return startDate <= dueDate && dueDate <= endDate;
    }
    return true; 
    });

    return(
    <>
        <h1>{filter === "all" ? "Home" : filter === "today" ? "Today" : "Week"}</h1>
        <ul style={{listStyleType: 'none'}}>
            {filteredTodos.map(todo => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.completed}></input>
                    {todo.title} - Due: {todo.dueDate}
                </li>
            ))}
        </ul>
    </>
    ) 

}

export default TodoPage;