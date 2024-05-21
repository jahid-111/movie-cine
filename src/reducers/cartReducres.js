


const initialState = {
  cartData: [],
};

const cartReducers = function (state, action) {
  switch (action.type) {
    case "Add_To_Cart":
        // console.log(state)
        return {
          cartData: [...state.cartData, action.payload],
        };
        
        case "Remove_Cart":
            return {
                ...state,
                cartData: state.cartData.filter(
                    (item) => item.id !== action.payload.id
                ),
      };

    default:
      return state;
  }
};

export { initialState, cartReducers };
