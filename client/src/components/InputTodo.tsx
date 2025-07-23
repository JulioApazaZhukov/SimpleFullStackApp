import _React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e: any) => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            window.location.href = "/";
        } catch (err) {
            console.error((err as Error).message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Todo App</h1>
            <form action="null" className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
