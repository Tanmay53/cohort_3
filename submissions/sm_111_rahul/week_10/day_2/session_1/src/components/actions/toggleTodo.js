export const TOGGLE_ITEM = "TOGGLE_ITEM";

const toggleItem = item => {
    return {
      type: TOGGLE_ITEM,
      payload: item
    };
  };
  
  export {toggleItem}  
