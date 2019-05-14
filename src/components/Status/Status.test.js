import React from 'react';
import Status from './Status';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe("Status Component", () => {
  let props;
  beforeEach(() => {
    props = {
        squares:Array(9).fill(null),
        xIsNext: true
    }
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Status {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Status {...props}/>);
  });
  it('should prompt for next player when no winner and not a tie', () => {
    const wrapper = mount(<Status {...props}/>);
    const firstPlayer = wrapper.find('.game-info__status').children().first().text();
    expect(firstPlayer).toEqual('Next player is: x');
  });
  it('should prompt when match is a tie', () => {
      props = {
        squares:Array(9).fill(null),
        isTie: true
      }
    const wrapper = mount(<Status {...props}/>);
    const firstPlayer = wrapper.find('.game-info__status').children().first().text();
    expect(firstPlayer).toEqual('Match is a Tie');
  });
  it('should propmt winner when player wins', () => {
      props = {
        squares: ["o", null, "x", null, "o", "x", null, "x", "o"]
      }
    const wrapper = mount(<Status {...props}/>);
    const firstPlayer = wrapper.find('.game-info__status').children().first().text();
    expect(firstPlayer).toEqual('Winner is: o');
  })
});