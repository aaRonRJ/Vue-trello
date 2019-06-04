import * as types from './mutations-types';
import API from '@/api';

export default {
    // Fetch vía ajax de los paneles del usuario
    fetchBoards({ commit }, { user }) {
        commit(types.FETCH_BOARD_REQUEST);

        API.getBoardsByUser(user)
            .then(snap => commit(types.FETCH_BOARD_SUCCESS, { boards: snap.val() }))
            .catch(error => commit(types.FETCH_BOARD_FAILURE, { error }));
    },

    // Fetch vía AJAX de las listas asociadas a un panel
    fetchLists({ commit }, { board }) {
        commit(types.FETCH_LISTS_REQUEST);

        API.getListsFromBoard(board)
            .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
            .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }));
    },

    // Fetch vía AJAX de las tareas de una lista
    fetchTasks({ commit }, { list}) {
        commit(types.FETCH_TASKS_REQUEST);

        API.getTasksFromList(list)
            .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
            .catch(error => commit(types.FETCH_TASKS_FAILURE, { error }));
    },

    // Añadir un nuevo panel
    addBoard({ commit }, { name }) {
        API.postBoard(name)
            .then(board => commit(types.ADD_BOARD, { board }));
    },

    // Añadir una nueva lista
    addColumn({ commit }, { board, name }) {
        API.postList(board, name)
            .then(column => commit(types.ADD_COLUMN, { column }));
    },

    // Añadir una nueva tarea
    addTask({ commit }, { list, name }) {
        API.postTask(list, name)
            .then(task => commit(types.ADD_TASK, { task }));
    },

    // ELiminar una tarea
    deleteTask({ commit }, { taskId }) {
        API.deleteTask(taskId)
            then(() => commit(types.DELETE_TASK, { taskId }));
    },

    // Marcar tarea como completada
    maskAsCompleted({ commit }, { task }) {
        API.completedTask(task.id)
            .then(() => commit(types.MARK_AS_COMPLETED, { task }));
    }
}