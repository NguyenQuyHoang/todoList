import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function FormSearch(props) {
    //show create popup
    const [show, setShow] = useState(false)
    let showClass = (show) ? "active" : ""
    function showCreate(){
        setShow((show) => !show)
    }
    //addTodo
    const [valueTodo, setValueTodo] = useState("")
    function handlerCreate(){
        props.addTodo(valueTodo);
        showCreate();
    }
    return (
        <div className="formSearch row">
            <div className="search col-9">
                <Form.Control
                    type="text"
                    id="search_key"
                    placeholder='input search key'
                />
            </div>
            <div className="createbtn col-3">
                <Button variant="primary" onClick={showCreate}>Create</Button>
            </div>

            {/* show create popup */}
            <div
                className={`modal show create ${showClass}`}

            >
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Create New Tode</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Control
                            type="text"
                            onChange={(e) => setValueTodo(e.target.value)}
                        />
                        <p>Please enter todo name.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={showCreate}>Close</Button>
                        <Button variant="primary" onClick={()=>{handlerCreate()}}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
    )
}

export default FormSearch;