import React from 'react';
import Board from './Board';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';

configure({adapter: new Adapter()});

describe("Board Component", () => {
  let props;
  beforeEach(() => {
    props = {
      cells: [0,1,2,3,4,5,6,7,8],
      squares: Array(9).fill(null)
    }
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<Board {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without crashing', () => {
    shallow(<Board {...props}/>);
  });

it('should call onClick event on click of a board square', () =>{
    const onClick = jest.fn();
    let wrapper = mount(<Board onClick={onClick} {...props}/>);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalledWith(0)
  });
});