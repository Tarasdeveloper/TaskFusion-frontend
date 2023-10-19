import  Modal  from '../Modal/Modal';
import TaskForm from '../TaskForm/TaskForm';


export const TaskModal = ({ onClose, status, props }) => {  
  return (
    <Modal onClose={onClose}>      
      <TaskForm data={props} onClose={onClose} status={status}/>                      
    </Modal>
  );     
};
