import Modal from '../../components/Modal/Modal';
import FeedbackForm from '../../components/FeedbackModal/FeedbackForm/FeedbackForm';

const AddFeedbackModal = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <FeedbackForm onClose={onClose} />
    </Modal>
  );
};

export default AddFeedbackModal;
