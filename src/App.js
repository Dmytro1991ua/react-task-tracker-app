import styles from "./App.module.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      date: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      date: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      date: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  const [showAddedTask, setShowAddedTask] = useState(false);

  const handleClick = () => setShowAddedTask(!showAddedTask);

  const addTask = (task) => {
    // task === object
    // set a random id
    const id = Math.floor(Math.random() * 10000);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle task reminder on click
  const toggleTaskReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className={styles.wrapper}>
        <section className={styles["task-tracker"]}>
          <div className={styles.container}>
            <div className={styles["task-tracker-body"]}>
              <Header onClick={handleClick} showAddedTask={showAddedTask} />
              <Route
                path="/"
                exact
                render={() => (
                  <>
                    {showAddedTask && <AddTaskForm addTask={addTask} />}
                    {tasks.length > 0 ? (
                      <Tasks
                        tasks={tasks}
                        setTasks={setTasks}
                        deleteTask={deleteTask}
                        onToggle={toggleTaskReminder}
                      />
                    ) : (
                      "No tasks to show"
                    )}
                  </>
                )}
              />

              <Route path="/about" component={About} />
              <Footer />
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
