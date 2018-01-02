const filtersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export default function(state = filtersDefaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
