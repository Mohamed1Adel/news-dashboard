import 'bootstrap/dist/css/bootstrap.min.css';  
import { Button, Container, Offcanvas } from 'react-bootstrap';  
import {useState} from 'react'  
function Sidebar() {  
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  
  return (  
    <>  
    <Container className='p-4'>  
      <Button variant="primary" onClick={showSidebar}>  
        Launch Sidebar  
      </Button>  
      <Offcanvas placement='end' show={show} onHide={closeSidebar}>  
        <Offcanvas.Header closeButton>  
          <Offcanvas.Title>Sidebar Title</Offcanvas.Title>  
        </Offcanvas.Header>  
        <Offcanvas.Body>  
          Some dummy text, we can have any text or element at this place.  
        </Offcanvas.Body>  
      </Offcanvas>  
      </Container>  
    </>  
  );  
}  
export default Sidebar;  