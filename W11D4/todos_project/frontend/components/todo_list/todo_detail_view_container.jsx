import { connect } from 'react-redux';
import { receiveSteps } from '../../actions/steps_actions'
import TodoDetailView from './todo_detail_view'

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveSteps: (steps) => dispatch(receiveSteps(steps))
  })
}

export default connect(null, mapDispatchToProps)(TodoDetailView)