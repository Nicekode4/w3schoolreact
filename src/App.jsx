import { useState } from "react";
import Impact from "./Components/Impact";
import MyFirstEmoji from "./Components/MyFirstEmoji/MyFirstEmoji";
import { MyFirstEmojiStyle } from "./Components/MyFirstEmoji/MyFirstEmoji.style";
import SizedEmoji from "./Components/SizedEmoji/SizedEmoji";
import { SizedEmojiStyle } from "./Components/SizedEmoji/SizedEmoji.style";
import UTF8Example from "./Components/UTF-8Example/UTF-8Example";
import { UTF8Style } from "./Components/UTF-8Example/UTF-8Example.style";
import { GlobalStyle } from "./Global.style";


function App() {
  const [state, setState] = useState("none")
  const [sized, setSized] = useState("none")
  const [UTF, setUTF] = useState("none")


  return (
    <div className="App">
      <GlobalStyle />
      <Impact />
      <button onClick={() => setState(state === "none" ? "block" : "none")}>My first emoji</button>
      <MyFirstEmojiStyle state={state}>
              <MyFirstEmoji 
      
      />
      </MyFirstEmojiStyle>

      <button onClick={() => setSized(sized === "none" ? "block" : "none")}>Sized Emoji</button>
      <SizedEmojiStyle state={sized}>
              <SizedEmoji />
      </SizedEmojiStyle>
      <button onClick={() => setUTF(UTF === "none" ? "block" : "none")}>UTF 8 Example</button>
      <UTF8Style state={UTF}>
      <UTF8Example />
      </UTF8Style>

    </div>
  );
}

export default App;
