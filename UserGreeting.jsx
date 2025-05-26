import PropTypes from 'prop-types'

function UserGreeting(props){
   
    const welcomeMessage =  <h2 className="welcome-message">
                                Welcome back {props.username}
                            </h2>
    const loginPrompt =     <h3 className="login-prompt">
                                Please log in to continue.
                            </h3>
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting;