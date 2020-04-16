import React, { useReducer, useEffect } from 'react';

const useRequest = (url, method, initalData=null) => {

    useEffect(() => {
        dispatch({type: method, data: initalData});
    }, []);

    const methodReducer = (state, action) => {
        switch (action.type) {
            case "GET":
                return fetch(url);
            case "POST":
                return fetch(url, {
                    method: 'POST',
                    headers: new Headers().append("Content-Type", "application/json"),
                    body: action.data
                })
            case "PUT":
                return fetch(url, {
                    method: 'PUT',
                    headers: new Headers().append("Content-Type", "application/json"),
                    body: action.data
                })
            case "DELETE":
                return fetch(url, {
                    method: 'DELETE',
                })
            default:
                return new Error(`Method name ${method} not supported`)
        }
    }

    const initalState = {}

    const [state, dispatch] = useReducer(methodReducer, initalState)

    return state
}

export default useRequest;