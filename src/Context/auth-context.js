import React from "react";

// create context object to keep track of current month displayed for expenses list
const AuthContext = React.createContext({
    currMonth: 'Jan'
});

export default AuthContext;