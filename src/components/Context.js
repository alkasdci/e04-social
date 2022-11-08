import { createContext, useReducer } from "react";

export const AppContext = createContext()

export default function ContentProvider({children}) {

    function reducer(state, action) {

        switch (action.type) {
            case 'insertUser':
                
                return {
                    ...state,
                    user: {...action.payload}
                }
            case 'addPosts':


            return {
                ...state,
                posts: [...action.payload]
            }
        
            case 'logout':

                return {
                    user: {},
                    posts: []
                }

            case 'userUpdated':

                return {
                    ...state,
                    user: {...action.payload}
                }
            default:
                return;
        }

    }

    const [state, dispatch] = useReducer(reducer, {
        user: {},
        posts: []
    })

    return (  
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>

    );
}