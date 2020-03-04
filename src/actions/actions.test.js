import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of ADD_TODO', () => {
    // Setup
    const urls = "www.test-site.com";
    const expectedAction = {
      type: 'SET_URLS',
      urls
    };

    // Execution
    const result = actions.setUrls(urls);

    // Expectation
    expect(result).toEqual(expectedAction);
  });
});
