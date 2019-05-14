import React from 'react';
import Square from './Square';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe("Square Component", () => {
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
    const wrapper = shallow(<Square {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    shallow(<Square {...props}/>);
  });
});