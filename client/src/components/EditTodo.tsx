import _React, { Fragment, useState } from "react";

type Todo = {
    todo_id: number;
    description: string;
};

const EditTodo = ({ todo }: { todo: Todo }) => {
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e: any) => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            window.location.href = "/";
        } catch (err) {
            console.log((err as Error).message);
        }
    };

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id${todo.todo_id}`}
            >
                Edit
            </button>
            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                            </button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                                onClick={(e) => updateDescription(e)}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditTodo;
