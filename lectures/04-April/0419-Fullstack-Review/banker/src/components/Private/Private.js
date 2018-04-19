import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/users';


class Private extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    bankBalance() {
        return '$' + Math.floor((Math.random() + 1) * 1000) + '.00';
    }


    render() {
        let { display_name, auth_id, img } = this.props.user;
        return(
            <div className="App">
                <h3>Community Bank</h3>
                <hr/>
                <h4>Account Info:</h4>

                {
                    display_name ?
                    (
                        <div>
                            <img src={ img } alt="profile"/>
                            <br/>
                            <p>Account Holder: { display_name }</p>
                            <p>Account Number: { auth_id }</p>
                            <p>Account Balance: { this.bankBalance() }</p>
                            <a href='http://localhost:4025/logout'>
                                <button>Logout</button>    
                            </a>
                        </div>
                    ) :
                    <p>Please Log In</p>
                }
            </div>
        )
    }
}

// This state parameter represents everything we have in the Redux Store, the state object
function mapStateToProps(state) {
    return {
        user: state.user
        // you could also just put user because the key and value are the same, as long as you destructure user from state above. 
    }

}

export default connect(mapStateToProps, { getUser })(Private)
// any function you enter here will get wrapped in the dispatch and mounted to props