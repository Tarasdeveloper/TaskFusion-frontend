import TaskForm from '../TaskForm/TaskForm';
import Modal from '../Modal/Modal';

const TaskModal = ({ onClose, action, column, taskToEdit }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm
        onClose={onClose}
        action={action}
        column={column}
        taskToEdit={taskToEdit}
      />
    </Modal>
  );
};

export default TaskModal;
