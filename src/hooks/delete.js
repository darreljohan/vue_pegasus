export default ({store, id, closeLink, router})=>{
    const deleteHandler = async()=>{
        await store.deleteById(id)
        await store.refreshGrid()
        router.push(closeLink)
    }
    return{
        deleteHandler
    }
}