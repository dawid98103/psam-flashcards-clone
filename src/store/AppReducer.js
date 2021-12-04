export default (state, action) => {
    switch (action.type) {
        case "ADD_LESSON":
            console.log(action.payload);
            return {
                ...state,
                flashcardsLessons: [...state.flashcardsLessons, action.payload]
            }
        case "DELETE_LESSON":
            return {
                ...state,
                flashcardsLessons: state.flashcardsLessons.filter(lesson => lesson.id !== action.payload)
            }
        default:
            return state;
    }
}