export default {
    saveUser: async ({username, email, password}) => {
        return fetch(process.env.REACT_APP_API_URL+"/sign-up", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });
    }
};