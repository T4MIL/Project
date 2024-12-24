import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux'
import QRCode from 'react-qr-code'
function Example({ str1, fn }) {
    const [show, setShow] = useState(str1);
    const totalPrice = useSelector(store => store.cart.totalPrice)
    const price = toString(totalPrice)
    const handleClose = () => fn('');
    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='mx-auto ps-5 fs-3 fw-bold'>Scan Here</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'> <QRCode
                    size={200}
                    bgColor='white'
                    fgColor='black'
                    value={price}
                /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;