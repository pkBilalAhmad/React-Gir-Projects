const addAction = (text) => {
    console.log("from action appear", text)
    return {
        type: "ADD",
        text,
        id : Date.now()
    }
}
export default addAction