import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
const Navbar = (props) => {
  
  const {isSignIn} = props;
 
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        {isSignIn? <SignedInLinks initials={props.initials} />: <SignedOutLinks />}
      </div>
    </nav>
  )
}
const mapStateToProps = (state)=> {
  console.log(state, 'state');
  const isSignIn = state.firebase.auth.isEmpty;
  return {
    isSignIn: !isSignIn,
    initials: state.firebase.profile.initials
  }
}
export default connect(mapStateToProps)(Navbar)
