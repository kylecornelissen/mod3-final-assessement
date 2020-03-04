import { UrlContainer, mapStateToProps, mapDispatchToProps } from './UrlContainer';
import { setUrls } from '../../actions';

describe('URL Container', () => {
  const urls = [
    {
      id: 2,
      long_url: "https://images.unsplash.com/photo...",
      short_url: "http://localhost:3001/useshorturl/2",
      title: 'Awesome photo'
    },
    {
      id: 4,
      long_url: "https://videos.splash.com/video...",
      short_url: "http://localhost:3001/useshorturl/4",
      title: 'Awesome video'
    }
  ]
  describe('mapStateToProps', () => {
    it('should return an object with the urls array', () => {
      // Setup
      const mockState = {
        urls
      };

      // Execution
      const mappedProps = mapStateToProps(mockState);

      // Expectation
      expect(mappedProps).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addTodo action when handleSubmit is called', () => {
      // Setup
      const mockDispatch = jest.fn();
      const actionToDispatch = setUrls(urls);

      // Execution
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setUrls(urls);

      // Expectaion
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
