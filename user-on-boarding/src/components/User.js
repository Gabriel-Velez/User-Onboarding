import React from "react";

function User({ details }) {
  if (!details) {
    return <h3>Fetching users...</h3>;
  }

  return (
    <div className='user'>
      {!!details.avatar && <img src={details.avatar} alt='' />}
      <h2>
        {details.first_name} {details.last_name}
      </h2>
      <p>Email: {details.email}</p>
    </div>
  );
}

export default User;
