import { useEffect, useState } from "react";
import "./App.css";
import { getDatabase, push, set, ref, onChildAdded } from "firebase/database";

function App() {
  const db = getDatabase();
  const chatListRef = ref(db, "chats");
  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);

  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setmsg] = useState("");
  const sendChat = () => {
    const chatListRef = ref(db, "chats");
    const chatRef = push(chatListRef);
    set(chatRef, {
      name,
      message: msg,
    });

    // const c = [...chats];
    // c.push({ name, message: msg });
    // setChats(c);
    setmsg("");
  };
  //  const chats=[ {name:"ankit",msg:"hello how are You?"}]
  return (
    <>
      {name ? null : (
        <div>
          <h3 style={{textAlign:'center',color:'ButtonText'}}> Start chat Now And Wirte Your Name and click anywhere !</h3>
        <div className="inputuser">
        
          <input
            type="text"
            className="ab"
            placeholder="Enter name to start chat"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
        </div>
      )}
      {name ? (
        <div>
          <div className="profile">
            <div className="con">
            <img className="square" />
            <div class="overlay">
              <div class="text">{name}</div>
            </div>
            </div>
            <h3 className="username">
              Welcome:
              <strong className="user">{name}</strong>
            </h3>
          </div>
          <div className="chat-container">
            {chats.map((c,i) => (
              <div key={i}className={`container ${c.name === name ? "me" : ""}`}>
                <p className="chatbox">
                  <strong> Name: {c.name}</strong>
                  <span> Message: {c.message}</span>
                </p>
              </div>
            ))}
            <div className="btm">
              <input
                type="text"
                placeholder="Enter Your Message"
                value={msg}
                onInput={(e) => {
                  setmsg(e.target.value);
                }}
              />
              <button
                type="button"
                style={{ width: "50px" }}
                className="send"
                onClick={(e) => sendChat(e)}
              ></button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
