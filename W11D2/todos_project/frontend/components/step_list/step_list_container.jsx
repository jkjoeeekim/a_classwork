import StepList from './step_list';
import { connect } from 'react-redux';
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep } from '../../actions/steps_actions';

const mapStateToProps = (state, id) => {
  // debugger;
  const steps = stepsByTodoId(state, id.todoId);
  // debugger;
  return ({
    steps: steps,
    todo_id: id.todoId
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveStep: (step) => dispatch(receiveStep(step))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(StepList);