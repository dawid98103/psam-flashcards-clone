export default (state, action) => {
    switch (action.type) {
        case "ADD_LESSON":
            console.log(action.payload);
            return {
                ...state,
                flashcardsLessons: [...state.flashcardsLessons, action.payload]
            }
        default:
            return state;
    }
}