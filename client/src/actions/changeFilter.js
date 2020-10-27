const CHANGE_FILTER = 'CHANGE_FILTER';

const ChangeFilter = completion => (
  {
    type: CHANGE_FILTER,
    completion,
  }
);

export {
  ChangeFilter,
  CHANGE_FILTER,
};
