//import './App.css';
const handlePrint = () =>{
   window.print();
}

function App() {
  return (
       <>
          <main>
              <header>
                <div>
                  <h2> Invoicer</h2>
                </div>

                <div>
                  <ul>
                    <li><button onClick={handlePrint}>print</button></li>
                    <li> download </li>
                    <li> send </li>
                  </ul>
                </div>
              </header>

              <section>
                <input type="text" name="text" id="text" placeholder="enter your name" required></input>
                <h2>Karim benchelef</h2>
              </section>
          </main>
       </>
  );
}

export default App;
