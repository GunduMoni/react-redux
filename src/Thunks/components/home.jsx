import React, { Component } from 'react';
import User from './user.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actioncreators from '../actioncreators/student_actioncreators';

class Home extends Component {
    
    componentDidMount(){
        this.props.fetchStudent(1);
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
    // return {
    //     fetchStudent: (Id) => dispatch(actioncreators.fetchStudent(Id))
    // }
    return bindActionCreators(actioncreators, dispatch);
}

export default connect(MapStateToProps, MapDispatchToProps)(Home);