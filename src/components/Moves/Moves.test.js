import React from 'react';
import Moves from './Moves';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe("Moves Component", () => {
  let props;
  beforeEach(() => {
    props = {
      history: [{ 
          squares:Array(9).fill(null), 
          clickIndex:1
      }],
      onClick: jest.fn()
    }
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Moves {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    shallow(<Moves {...props}/>);
  });
  it('should have go to start game button', () => {
    const wrapper = shallow(<Moves {...props}/>);
    const startGameBtn = wrapper.find('button.btn-block').text();
    expect(startGameBtn).toEqual('Go to game start');
  });
  it('should restart game when clicking button start game', () => {
    const wrapper = shallow(<Moves {...props}/>);
    const startGameBtn = wrapper.find('button.btn-block');
    startGameBtn.simulate('click');
    expect(props.onClick).toBeCalledWith(0)
  });
});