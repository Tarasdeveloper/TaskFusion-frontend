import { Formik, Form } from 'formik';
import {
  AddBtn,
  CancelBtn,
  Container,
  Flex,
  TaskInput,
  TimeInput,
  Lable,
  Plus,
  Close,
  RadioGroup,
  StartWrapper,
  Text,
  RadioName,
  RadioButton,
  Errors,
  None,
} from './TaskForm.styled';
import {
  addTaskOperation,
  editTaskOperation,
} from '../../redux/calendar/calendar.operations';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isAfter, isValid, parse } from 'date-fns';
import { object, string } from 'yup';
import { selectTasks } from '../../redux/calendar/calendar.selectors';
import { useSelector } from 'react-redux';

const taskSchema = object({
  title: string()
    .required('Title is required')
    .max(250, 'Title should not exceed 250 characters'),
  start: string()
    .test('valid-time', 'Invalid time format', value =>
      isValid(parse(value, 'HH:mm', new Date()))
    )
    .required('Start is required'),
  end: string()
    .nullable()
    .test('valid-time', 'Invalid time format', value => {
      if (!value) return true; // return true if value is empty
      return isValid(parse(value, 'HH:mm', new Date()));
    })
    .when('start', (start, schema) =>
      schema.test('end-time-greater', 'Less than start', end =>
        start && end
          ? isAfter(
              parse(end, 'HH:mm', new Date()),
              parse(start, 'HH:mm', new Date())
            )
          : true
      )
    ),
  priority: string()
    .required('Priority is required')
    .oneOf(['low', 'medium', 'high'], 'Invalid priority'),
});

const TaskForm = ({ onClose, ...data }) => {
  const dispatch = useDispatch();

  // console.log(data.status)
  const userTasks = useSelector(selectTasks);
  const tt = userTasks.filter(task => task._id === data.status);

  const editForm = tt.length ? true : false;
  const category = data?.status || 'to-do';

  const initialValues = {
    title: tt[0]?.title || '',
    start: tt[0]?.start || '',
    end: tt[0]?.end || '',
    priority: tt[0]?.priority || 'low',
  };

  const { currentDate: date } = useParams();
  //  console.log(day);
  const handleSubmit = values => {
    if (!editForm) {
      const payload = { ...values, date, category };
      dispatch(addTaskOperation(payload));
      // console.log(payload);
      onClose();
    } else {
      const payload = { ...values, date, category, id: tt[0]._id };
      dispatch(editTaskOperation(payload));
      console.log(payload);

      onClose();
    }
  };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validateOnBlur={true}
        validateOnChange={true}
        validationSchema={taskSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          handleChange,
          setFieldValue,
          errors,
          touched,
          handleBlur,
        }) => (
          <Form>
            <Lable htmlFor="title">Title</Lable>
            <TaskInput
              type="text"
              name="title"
              placeholder="Task text"
              value={values.title}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.title && touched.title ? (
              <Errors>{errors.title}</Errors>
            ) : (
              <None>None</None>
            )}
            <Flex>
              <StartWrapper>
                <Lable htmlFor="start">
                  <Text>Start</Text>
                </Lable>
                <TimeInput
                  type="time"
                  name="start"
                  value={values.start}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.start && touched.start ? (
                  <Errors>{errors.start}</Errors>
                ) : (
                  <None>None</None>
                )}
              </StartWrapper>
              <div>
                <Lable htmlFor="end">
                  <Text>End</Text>
                </Lable>
                <TimeInput
                  type="time"
                  name="end"
                  value={values.end}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.end && touched.end ? (
                  <Errors>{errors.end}</Errors>
                ) : (
                  <None>None</None>
                )}
              </div>
            </Flex>
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              {['low', 'medium', 'high'].map(priority => (
                <RadioName key={priority}>
                  <RadioButton
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
                    }}
                  />
                  {priority}
                </RadioName>
              ))}
            </RadioGroup>
            <Flex>
              {!editForm ? (
                <AddBtn type="submit">
                  <Plus>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 1.167v11.666M1.167 7h11.666"
                      />
                    </svg>
                  </Plus>
                  Add
                </AddBtn>
              ) : (
                <AddBtn type="submit">
                  <Plus>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="18"
                      fill="none"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.3"
                        d="m2.375 16.125 4.162-1.6c.266-.103.4-.154.524-.221.11-.06.216-.128.315-.205.112-.087.213-.188.414-.39l8.46-8.459a2.121 2.121 0 0 0-3-3l-8.46 8.46c-.201.201-.302.302-.389.414-.077.1-.145.205-.205.315-.067.125-.118.258-.22.524l-1.601 4.162Zm0 0 1.544-4.013c.11-.287.165-.431.26-.497a.375.375 0 0 1 .284-.06c.114.021.222.13.44.348l1.694 1.694c.218.218.327.327.348.44a.375.375 0 0 1-.06.284c-.066.095-.21.15-.497.26l-4.013 1.544Z"
                      />
                    </svg>
                  </Plus>
                  Edit
                </AddBtn>
              )}

              <CancelBtn type="button" onClick={onClose}>
                {' '}
                Cancel
              </CancelBtn>
            </Flex>
          </Form>
        )}
      </Formik>
      <Close onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <path
            stroke="#111"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 6 6 18M6 6l12 12"
          />
        </svg>
      </Close>
    </Container>
  );
};
export default TaskForm;
