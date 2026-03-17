


export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return{
                ...state,
                allProducts: action.payload,
                filteredProducts: action.payload
            }
        case 'FILTER_BY_CATEGORY':
            if (!action.payload) {
        // Show all products if no category selected
        return { ...state, filteredProducts: state.allProducts };
      }
      return {
        ...state,
        filteredProducts: state.allProducts.filter(
          (item) => item.category === action.payload
        ),
      };
            case 'SET_SEARCH_TERM':
                return{
                    ...state,
                    filteredProducts: state.allProducts.filter((item) =>
                    item.title.toLowerCase().includes(action.payload.toLowerCase())
                  ),
                }
        default:
            return state
    }

   
};