import './App.css';

// Constants
const builder = 'Richard';
const builder_link = 'https://t.me/t_ninja_dev';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">My First GIF Portal in Solana</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        <div className="footer-container">
          <a
            className="footer-text"
            href={builder_link}
            target="_blank"
            rel="noreferrer"
          >{`built on @${builder}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
