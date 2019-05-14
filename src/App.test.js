import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe("Game", () => {
  let props;
  beforeEach(() => {
    props = {
      history: [{ 
          squares:Array(9).fill(null), 
          clickIndex:null  
      }]
    }
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    shallow(<App {...props}/>);
  });
  it('should play game and decide winner', () => {
    const wrapper = mount(<App {...props}/>);
    const firstPlayer = wrapper.find('.game-info__status').children().first().text()
    expect(firstPlayer).toEqual('Next player is: x');
    const button = wrapper.find('button.square').first();
    button.simulate('click');
    const secondPlayer = wrapper.find('.game-info__status').children().first().text();
    expect(secondPlayer).toEqual('Next player is: o');
    // player 2
    const turn2 = wrapper.find('button.square').at(1);
    turn2.simulate('click');
    // player 1
    const turn3 = wrapper.find('button.square').at(4);
    turn3.simulate('click');
    // player 2
    const turn4 = wrapper.find('button.square').at(5);
    turn4.simulate('click');
    // player 1
    const turn5 = wrapper.find('button.square').at(8);
    turn5.simulate('click');
    const winner = wrapper.find('div.game-info').children().first().text();
    expect(winner).toEqual('Winner is: x');
  })
});