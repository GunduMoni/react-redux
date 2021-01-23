import React, { Component } from 'react';
import User from './user.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getStudentByIdAsync} from '../api/student_api';
import * as actioncreators from '../actioncreators/student_actioncreators';

class Home extends Component {
    
    componentDidMount(){
        this.props.getStudentByIdAsync(1, actioncreators.fetchStudentStart, actioncreators.fetchStudentSuccess, actioncreators.fetchStudentFailure);
    }

    render() {
        const {user, isLoading, error, erroMsg} = this.props;
        return (
            <div>
                Welcome to Malips World
                {
                    isLoading ? <h3>Loading...</h3> :
                    user != null ? <User {...user}/> :
                    error ? <h4>{erroMsg}</h4> : <h4>No Data Found</h4>
                }
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return state.studentReducer;
}

const MapDispatchToProps = (dispatch) => {
    return bindActionCreators({getStudentByIdAsync}, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);