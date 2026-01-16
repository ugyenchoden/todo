interface TodoPageProps {
    filter: 'all' | 'today' | 'week';
}

const todoItems = [
    { id: 1, title: 'Buy groceries', dueDate: new Date().toISOString().split('T')[0] },
    { id: 2, title: 'Walk the dog', dueDate: '2024-06-11' },
    { id: 3, title: 'Read a book', dueDate: '2024-06-15' },
];

function TodoPage({ filter }: TodoPageProps) {

    const filteredTodos = todoItems.filter(todo => {
    const today = new Date();
    const dueDate = new Date(todo.dueDate);

    if(filter === 'today') {    
        return dueDate.toDateString() === today.toDateString();
    } else if(filter === 'week') {
        const weekFromNow = new Date();
        weekFromNow.setDate(today.getDate() + 7);
        return dueDate >= today && dueDate <= weekFromNow;
    }
    return true; 
    });

    return(
        <>
              <h1>{filter === "all" ? "Home" : filter === "today" ? "Today" : "Week"}</h1>
   <ul>
        {filteredTodos.map(todo => (
            <li key={todo.id}>{todo.title} - Due: {todo.dueDate}</li>
        ))}
    </ul>
        </>
 
    )

}

export default TodoPage;