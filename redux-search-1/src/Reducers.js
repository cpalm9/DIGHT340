import Cards from './data/cards.json'

const initalState = {
  cards: Cards,
  searchTerm: ''
}

const Reducer = (state = initalState, action) => {
  switch(action.type){
    case 'SEARCH_INPUT_CHANGED':
      const {searchTerm} = action.payload;
      return {
        ...state,
        searchTerm: searchTerm,
        cards: searchTerm ? Cards.filter((card) => {
          const cardName = (card.name) ? card.name : '';
          const cardFlavor = (card.flavor) ? card.flavor : '';
          if (cardName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || cardFlavor.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
            return true;
          }
          return false;
        }) : Cards
      };
    default:
      return state;
  }
};
export default Reducer;