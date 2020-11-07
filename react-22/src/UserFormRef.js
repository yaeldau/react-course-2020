import React from 'react';

export default function UserFormRef() {

  function handleSubmit(e) {
    if (e.currentTarget[0].value === "" || e.currentTarget[1].value === ""
        || e.currentTarget[2].value === "") {
      alert("please fill all fields");
      return;
    }

    if (e.currentTarget[1].value === e.currentTarget[2].value) {
      alert("success");
    } else {
      alert("failed, please try again");
    }
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>user name:
            <input type="text"/>
          </label>
          <br/>
          <br/>
          <label>password:
            <input type="text"/>
          </label>
          <br/>
          <br/>
          <label>verify password:
            <input type="text"/>
          </label>
          <br/>
          <br/>
          <button type="submit" style={{width: 100, height: 30}}>Submit</button>
        </form>
      </div>
  )
}