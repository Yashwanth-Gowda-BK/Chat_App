import "./addUser.css"

const AddUser=() => {
  return (
    <div className="addUser">
        <form action="">
            <input type="text" placeholder="Username" name="username" id="" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>jane dka</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser