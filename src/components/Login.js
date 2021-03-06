import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = ({login}) => (
    <div className = "box-layout">
        <div className = "box-layout__box">
            <h1 className = "box-layout__title">Boilerplate</h1>
            <p className="u-margin-bottom-small">Tagline here</p>
            <button className ="btn btn--primary" onClick={login}>Login with Google</button>
        </div> 
    </div>
    
)

const mapDispatchToProps = (dispatch) => ({
    login: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(Login);
