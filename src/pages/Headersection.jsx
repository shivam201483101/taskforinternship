import React from 'react'
import TextField from "@mui/material/TextField";

const Headersection = () => {
  return (
    <div><div className="header-section">
    <div className="container">
      <div className="text-and-supporting-text">
        <section className="content6">
          <div className="text-and-supporting-text1">
            <div className="text6">Welcome back, Olivia</div>
            <div className="supporting-text1">
              Track, manage researchers and submissions.
            </div>
          </div>
          <TextField
            className="actions"
            color="primary"
            variant="standard"
          />
        </section>
      </div>
    </div>
  </div></div>
  )
}

export default Headersection