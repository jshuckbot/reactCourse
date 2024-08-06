import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from "react";


function Todolist() {
    const [tasksList, setTasksList] = useState([]);
    const [task, setTask] = useState('');
    const [deletedTasks, setDeletedTasks] = useState([]);
    const [id, setId] = useState([]);
    
    const upId = () => {
        setId(id + 1);
    };
    
    const addTask = () => {
        if (!task.trim()) {
            return;
        }
        
        setTasksList([...tasksList, {id: id, description: task}]);
        upId();
        setTask('');
    };
    
    const deleteTask = (event) => {
        setDeletedTasks((prevDelTask) => {
           return [...prevDelTask, event]; 
        });
    };
return (
    <div>
      <div>
        <TextField
          label="Введите новую задачу"
          variant="outlined"
          fullWidth
          margin="normal"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></TextField>
        <Button
          variant="contained"
          color="primary"
          onClick={addTask}
          style={{ marginBottom: 20 }}
        >
          Добавить задачу
        </Button>
      </div>
        {tasksList
          .filter((task) => !deletedTasks.includes(task.id))
          .map((task) => (
            <Card
              sx={{ maxWidth: 275, wordWrap: "break-word" }}
              variant="outlined"
              key={task.id}
            >
              <CardContent>
                  {task.description}
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
    </div>
  );
}

export default Todolist;