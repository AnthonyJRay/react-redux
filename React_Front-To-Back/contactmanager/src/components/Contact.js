import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    const { name, email, phone } =
      this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <FontAwesomeIcon icon={faHome} />
        <ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
}

export default Contact;