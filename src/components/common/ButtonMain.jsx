import Button from 'react-bootstrap/Button';
import './button.css';

function ButtonMain(
    {
        BtnName,
        className
    }
) {
  return (
    <>
      <Button className={`buttonStyle ${className}`} variant="primary">{BtnName}</Button>
    </>
  );
}

export default ButtonMain;