import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

function ItTodo(props) {
        //show edit popup
        const [show, setShow] = useState(false)
        let showClass = (show) ? "active" : ""
        function showEdit(){
            setShow((show) => !show)
        }
        //update todo
        const [updateValue, setUpdateValue] = useState("")
        function updateValues(){
            props.updateTodo(updateValue, props.index)
            showEdit()
        }
        // finish todo
        let indexFinish
        (props.item.status) ? indexFinish="finish" : indexFinish="" ;
    return (
        <div className="itTodo row">
            <div className={`nametodo col-8 ${indexFinish}`}>{props.nameTodo}</div>
            <div className="remove col-2">
                <Button variant="danger">
                    <span className="material-symbols-outlined iconClose" onClick={() => { props.handlerDelete(props.index) }}>close</span>
                </Button>
            </div>
            <div className="edit col-2">
                <Button variant="primary">
                    <span className="material-symbols-outlined iconRead" onClick={showEdit}>border_color</span>
                </Button>
            </div>

            {/* show edit popup */}
            <div
                className={`modal show editTodo ${showClass}`}

            >
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Update Todo</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Control
                            type="text"
                            onChange={(e) => setUpdateValue(e.target.value)}
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={showEdit}>Close</Button>
                        <Button variant="primary" onClick={()=>{updateValues()}}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default ItTodo;