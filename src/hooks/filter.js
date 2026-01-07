export default (store) => {
    const selectPage = page => {
        store.setPage(page);
        store.refreshGrid();
    }
    const firstPage = () => selectPage(1);
    const lastPage = () => selectPage(store.totalPages);
    const searchBy = (event, property) => {
        store[property] = event.target.value;
        store.setPage(1);
        store.refreshGrid();
    }
    return {
        pagination:{
            firstPage,
            lastPage,
            searchBy,
        },
        filter:{
            searchBy
        }
    };
}