export default function todoService() {
    
    let todos = [
            { id: 1, text: "Item 1", selected: false },
            { id: 2, text: "Item 2", selected: false },
            { id: 3, text: "Item 3", selected: false },
            { id: 4, text: "Item 4", selected: false },
            { id: 5, text: "Item 5", selected: false },
            { id: 6, text: "Item 6", selected: true },
            { id: 7, text: "Item 7", selected: true },
            { id: 8, text: "Item 8", selected: true },
            { id: 9, text: "Item 9", selected: true },
            { id: 10, text: "Item 10", selected: true },
    ];
    
    const getTodos = () => todos;
    
    const setTodos = (newTodos) => {
      console.log(newTodos)
      todos = newTodos
    };
  
    return {
        getTodos,
        setTodos
    };
}