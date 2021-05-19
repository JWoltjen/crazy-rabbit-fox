export default (quotes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL': 
                return action.payload
        case 'FETCH_RANDOM':
                return [...quotes, action.payload]; 
        case 'CREATE':
            return [...quotes, action.payload]
        default: 
            return quotes
            break; 
    }
}