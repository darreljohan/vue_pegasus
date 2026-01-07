export default (store) => {
    const selectPage = page => {
        store.pagination.page = page
        store.refreshGrid();
    }

    const firstPage = () => selectPage(1);
    const lastPage = () => selectPage(store.pagination.totalPages);
   
    return {
        selectPage,
        firstPage,
        lastPage,
    };
}