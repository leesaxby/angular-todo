export default function todoService() {

    const getTodos = () => {
        return [
            { id: 1, name: "Item 1" },
            { id: 1, name: "Item 2" },
            { id: 1, name: "Item 3" },
            { id: 1, name: "Item 4" },
            { id: 1, name: "Item 5" },
        ];
    }

    return {
        getTodos
    };
}