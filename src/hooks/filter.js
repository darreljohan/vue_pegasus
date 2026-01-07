export default (store) => {
    const searchBy = (event, property) => {
        store[property] = event.target.value;
        store.setPage(1);
        store.refreshGrid();
    }
    return {
        searchBy
    };
}