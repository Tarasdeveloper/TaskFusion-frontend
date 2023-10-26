import TaskForm from '../TaskForm/TaskForm';
import Modal from '../Modal/Modal';

const TaskModal = ({ onClose, action, column, taskToEdit, setOnEdit }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm
        onClose={onClose}
        action={action}
        column={column}
        taskToEdit={taskToEdit}
        setOnEdit={setOnEdit}
      />
    </Modal>
  );
};

export default TaskModal;
