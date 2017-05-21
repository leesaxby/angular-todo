export default function todoService() {

    const getTodos = () => {
        return [
            { id: 1, text: "Item 1", selected: false },
            { id: 2, text: "Item 2", selected: false },
            { id: 3, text: "Item 3", selected: false },
            { id: 4, text: "Item 4", selected: false },
            { id: 5, text: "Item 5", selected: false },
        ];
    }

    return {
        getTodos
    };
}