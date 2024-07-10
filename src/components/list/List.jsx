import Chatlist from "./chatList/Chatlist";
import "./list.css"
import Userinfo from "./Userinfo/Userinfo";

const List = () => {
  return <div className="list">
    <Userinfo/>
    <Chatlist/>
  </div>;
};

export default List;
