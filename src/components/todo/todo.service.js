export default function todoService() {

    const getTodos = () => {
        return [
            { text: "Item 1" },
            { text: "Item 2" },
            { text: "Item 3" },
            { text: "Item 4" },
            { text: "Item 5" },
        ];
    }

    return {
        getTodos
    };
}