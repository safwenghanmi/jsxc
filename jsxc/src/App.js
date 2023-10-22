import './App.css';
import Description from './Description';
import Image from './Image';
import Name from './Name';
import Price from './Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     

      <Card style={{ width: '18rem' }}>
      <Image /> 
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
      <Description/>
        </Card.Text>
        <Card.Text><h2>
      <Price/>
      </h2>
        </Card.Text>
        <Button variant="primary">Add item</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

const firstname = (name) => {
  return name === 'safwen'
    ? (
        <>
          Hello, {name}
          <img className='pth' src='https://www.soundguys.com/wp-content/uploads/2021/12/JBL-Flip-6-Stones-e1640208549815.jpg' alt='Profile' />
        </>
      )
    : 'Hello there';
};

export default App;




