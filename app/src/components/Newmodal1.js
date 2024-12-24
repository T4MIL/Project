import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { clearCart } from './cartSlice';
import { Link } from 'react-router-dom';
function Example({ str1, fn }) {
    const [show, setShow] = useState(str1);
    const handleClose = () => fn('');
    const dispatch = useDispatch()
    //   const handleShow = () => setShow(true);
    useEffect(() => {
        dispatch(clearCart())
    }, [])
    return (
        <>
            <Modal show={show}>
                <Modal.Header >
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body className=' text-success fs-2 text-center fw-bold'>Order Placed Successfully</Modal.Body>
                <Modal.Footer>
                    <Link to={'/'}>  <Button variant="secondary" onClick={handleClose}>
                        Home
                    </Button></Link>
                    {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;