export default {
    getListByBoard: (state) => (boardId) => {
        return Object.values(state.lists)
            .filter(list => list.board === boardId);
    },

    getTaskFromList: (state) => (listId) => {
        return Object.values(state.tasks)
            .filter(task => task.list === listId);
    }
}