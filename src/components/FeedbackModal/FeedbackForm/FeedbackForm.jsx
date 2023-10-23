import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import { ReactComponent as IconEdit } from '../../../assets/img/pencil-01.svg';
import { ReactComponent as IconTrash } from '../../../assets/img/trash-2.svg';
import { ReactComponent as IconClose } from '../../../assets/img/x-close.svg';
import {
  RatingWrap,
  Input,
  Label,
  FormBtn,
  Wrap,
  FormBtnWrap,
  FormBtnCancel,
  EditBtn,
  DeleteBtn,
  WrapForEdit,
  WrapForReview,
  BtnCloseWrap,
  ErrorMessage,
  WrapForInput,
} from './FeedbackForm.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserReview } from '../../../redux/reviews/selectors';
import {
  addReview,
  deleteReview,
  editReview,
} from '../../../redux/reviews/operations';
import { changeRating } from '../../../redux/reviews/reviewSlice';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const rateIcon = (
  <path d="m12 1.286 3.022 5.728c.16.302.45.513.786.57L22.19 8.69l-4.514 4.645.43.418-.43-.418a1.1 1.1 0 0 0-.3.923l.922 6.411-5.813-2.858a1.1 1.1 0 0 0-.97 0l-5.813 2.858.922-6.411a1.1 1.1 0 0 0-.3-.923L1.81 8.689l6.382-1.104a1.1 1.1 0 0 0 .786-.57l-.531-.28.53.28L12 1.284ZM5.532 20.752Zm6.556-19.634L12 1.071l.088.047Z"></path>
);

const rateStyled = {
  itemShapes: rateIcon,
  activeFillColor: '#FFAC33',
  inactiveFillColor: '#CEC9C1',
};

const FeedbackSchema = Yup.object().shape({
  review: Yup.string()
    .min(10, 'review is too short')
    .max(300, 'review is too long')
    .required('review is required'),
});

const FeedbackForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const userReview = useSelector(selectUserReview);
  const [isEditActive, setIsEditActive] = useState(false);

  const ratingChanged = (newRating) => {
    dispatch(changeRating(newRating));
  };

  const handleSubmit = (values, actions) => {
    values.rating = Number(userReview.rating);
    if (isEditActive) {
      const reviewRequest = { id: userReview._id, review: values };
      dispatch(editReview(reviewRequest));
    } else {
      dispatch(addReview(values));
    }
    actions.resetForm();
    if (userReview.rating) {
      onClose();
    }
  };

  const handleEdit = () => {
    setIsEditActive(!isEditActive);
  };

  const handleDelete = () => {
    dispatch(deleteReview(userReview._id));
    onClose();
  };

  return (
    <Wrap>
      <Formik
        initialValues={{
          rating: userReview.rating || '',
          review: userReview.review || '',
        }}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Label name="rating">Rating</Label>
          <RatingWrap>
            <Rating
              name="rating"
              component="div"
              value={Number(userReview.rating)}
              itemStyles={rateStyled}
              style={{ maxWidth: 128, gap: 2 }}
              onChange={ratingChanged}
              readOnly={Boolean(userReview.rating) && !isEditActive}
            />
          </RatingWrap>
          <WrapForInput>
            <WrapForReview>
              <Label htmlFor="review">Review</Label>
              {Boolean(userReview.review) && (
                <WrapForEdit>
                  <EditBtn
                    onClick={handleEdit}
                    $isActive={isEditActive}
                    type="button"
                  >
                    <IconEdit />
                  </EditBtn>
                  <DeleteBtn type="button" onClick={handleDelete}>
                    <IconTrash />
                  </DeleteBtn>
                </WrapForEdit>
              )}
            </WrapForReview>

            <Input
              type="text"
              placeholder="Enter text"
              id="review"
              name="review"
              component="textarea"
              disabled={!isEditActive && Boolean(userReview.review)}
            />
            <ErrorMessage name="review" component="div" />
          </WrapForInput>

          {(!Boolean(userReview.review) || isEditActive) && (
            <FormBtnWrap>
              <FormBtn type="submit" disabled={!userReview.rating}>
                {isEditActive ? 'Edit' : 'Save'}
              </FormBtn>
              <FormBtnCancel type="button" onClick={onClose}>
                Cancel
              </FormBtnCancel>
            </FormBtnWrap>
          )}

          <BtnCloseWrap
            type="button"
            aria-label="close button"
            onClick={onClose}
          >
            <IconClose style={{ width: 24, height: 24 }} />
          </BtnCloseWrap>
        </Form>
      </Formik>
    </Wrap>
  );
};

export default FeedbackForm;
