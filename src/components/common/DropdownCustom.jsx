import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import './dropdownCustom.css';

function ButtonCustomExample() {
  return (
    <>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className="dropdownBody" id="dropdown-custom-1"> 
        Roberson
        
        <svg className="svgIcon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33398 1.66669L6.00065 6.33335L10.6673 1.66669" stroke="#000929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors">
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>{' '}
    </>
  );
}

export default ButtonCustomExample;