import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';


function MyVerticallyCenteredModal(props) {
    if (props.message) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='text-center p-3'>
                    <h4>Enter Ip Adresse or Domain</h4>
                </Modal.Body>
            </Modal>
        )
    }
    else {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='text-center p-3'>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <h4>Searching . . .</h4>
                </Modal.Body>
            </Modal>
        );
    }

}
export default MyVerticallyCenteredModal;