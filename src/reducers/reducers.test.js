import { urls } from '../reducers/urls';

describe('todosReducer', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = urls(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});
