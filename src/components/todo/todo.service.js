export default function todoService($q) {
    let todos = [];
    let ws = new WebSocket( "ws://178.62.117.150:8888", "echo-protocol" );
    let updateHandler;
    
    let updateTodos = ( data ) => {
        todos = data;
        ws.send( JSON.stringify(todos) )
    };

    let onUpdate = (callback) => updateHandler = callback;

    let getTodos = () => todos;
  
    ws.addEventListener("message", msg => {
        todos = JSON.parse(msg.data);
        updateHandler(todos);
    });
    
    return {
        getTodos,
        onUpdate,
        updateTodos,
    };
  
}