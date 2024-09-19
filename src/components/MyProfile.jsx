import React from 'react'

function MyProfile({ data }) {
  return (
    <div>
      <p>My name is {data.firstName} {data.lastName}</p>
      <img src={data.imgPic}width="150" alt={data.firstName} />
    </div>
  )
}

export default MyProfile
