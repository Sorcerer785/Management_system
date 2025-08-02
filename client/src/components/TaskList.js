import React, { useState } from 'react';
import TaskForm from './TaskForm';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleToggleComplete = (task) => {
    onUpdateTask(task.id, { ...task, completed: !task.completed });
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleEditSubmit = (updatedData) => {
    if (editingTask) {
      onUpdateTask(editingTask.id, updatedData);
      setEditingTask(null);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDeleteTask(id);
    }
  };

  const getPriorityClass = (priority) => {
    return `priority-${priority}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (tasks.length === 0) {
    return <div className="no-tasks">No tasks found. Add your first task!</div>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
          <div className="task-header">
            <div className="task-title-section">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task)}
                className="task-checkbox"
              />
              <h3 className="task-title">{task.title}</h3>
            </div>
            <div className="task-actions">
              <button
                onClick={() => handleEdit(task)}
                className="edit-btn"
                disabled={task.completed}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
          
          {task.description && (
            <p className="task-description">{task.description}</p>
          )}
          
          <div className="task-meta">
            <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
              {task.priority.toUpperCase()}
            </span>
            <span className="category-badge">{task.category}</span>
            <span className="task-date">{formatDate(task.created_at)}</span>
          </div>
        </div>
      ))}
      
      {editingTask && (
        <TaskForm
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingTask(null)}
          initialData={editingTask}
        />
      )}
    </div>
  );
};

export default TaskList;
