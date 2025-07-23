import express, { Request, Response } from "npm:express@^5.1.0";
import cors from "npm:cors@^2.8.5";
import pool from "./db.ts";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//ROUTES//

// create a todo
app.post("/todos", async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description],
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error((err as Error).message);
  }
});

// get all todos
app.get("/todos", async (res: Response) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error((err as Error).message);
  }
});

// get a todo
app.get("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1",
      [id],
    );
    res.json(todo.rows[0]);
  } catch (err) {
    console.error((err as Error).message);
  }
});

// update a todo
app.put("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const _updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id],
    );
    res.json("Todo was updated!");
  } catch (err) {
    console.error((err as Error).message);
  }
});

// delete a todo
app.get("/todos/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const _deleteTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id],
    );
    res.json("Todo was deleted!");
  } catch (err) {
    console.error((err as Error).message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
