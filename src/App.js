import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log('props', props);
  return (
    <header>

      <h1><a href="/" onClick={function (event) {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>

      {/* <h1><a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1> */}

    </header>
  );
}

function Nav(props) {
  
  const lis = [];

  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/' + t.id} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.id);
    }}>{t.title}</a></li>);
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'this is html' },
    { id: 2, title: 'css', body: 'this is css' },
    { id: 3, title: 'javascript', body: 'this is javascript' },
  ]

  return (
    <div className="App">
      <Header title="web" onChangeMode={function () {
        alert('!!!');
      }}></Header>

      {/* <Header title="web" onChangeMode={()=>{
        alert('!!!');
      }}></Header> */}

      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }}></Nav>
      <Article title="Hi" body="Hello, React"></Article>
    </div>
  );
}



export default App;
