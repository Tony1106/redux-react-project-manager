import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../redux/action/authAction'
const SignedInLinks = (props) => {
  console.log(props, 'props');
  
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/createproject'>New Project</NavLink></li>
        <li><NavLink to='/' onClick={props.signOut} >Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: ()=> {dispatch(signOut())}
  }
}
// const mapStateToProps = (state) => {
//   return {
//     intials: state.firestore.user
//   }
// }
export default connect(null, mapDispatchToProps)(SignedInLinks);
