import React from "react";

function User({ details }) {
  if (!details) {
    return <h3>Fetching users...</h3>;
  }

  return (
    <div className='user'>
      {!!details.avatar && <img className='user-image' src={details.avatar} alt='' />}
      <div className='user-details'>
        <h2>
          {details.first_name} {details.last_name}
        </h2>
        <p>Email: {details.email}</p>
      </div>
    </div>
  );
}

export default User;
