export default {
    user: null,
    fetchingData: true, // Flag para mostrar u ocultar información mientras se piden datos de una petición async.
    error: null,

    boards: {/*
        id: {
            id,
            owner,
            name
        }
    */},
    lists: {/*
        id: {
            id,
            board,
            name
        }
    */},
    tasks: {/*
        id: {
            id,
            list,
            title,
            completed
        }
    */}
}