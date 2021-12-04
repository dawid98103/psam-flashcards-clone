import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

/**
 * flashcard:
 * {
 *      title: "Słówka",
 *      content: [
 *          {pl: test, ang: test},
 *          {pl: test1, ang: test1}
 *      ]
 * }
 */

const initialState = {
    flashcardsLessons: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for changing state

    function addFlashcardsLesson(lesson) {
        const lastLessonId = state.flashcardsLessons.length === 0 ? 0 : state.flashcardsLessons.sort((a, b) => a.id - b.id)[0].id;

        dispatch({
            type: 'ADD_LESSON',
            payload: { ...lesson, id: lastLessonId + 1 }
        });
    }

    function findByLessonId(id) {
        return state.flashcardsLessons.filter(lesson => parseInt(lesson.id) === parseInt(id))[0]
    }

    return (
        <GlobalContext.Provider value={{ flashcardsLessons: state.flashcardsLessons, addFlashcardsLesson, findByLessonId }}>
            {children}
        </GlobalContext.Provider>
    )
}