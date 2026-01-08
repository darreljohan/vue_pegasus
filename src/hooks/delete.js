export default ({store, closeLink, router})=>{
    const deleteHandler = async(id)=>{
        debugger
        await store.deleteById({...id})
        await store.refreshGrid()
        router?router.push(closeLink):""
    }
    return{
        deleteHandler
    }
}