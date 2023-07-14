import amaan from "./assets/amaan-removebg-purp.png";
import guyCoding from "./assets/programmer-coder-web-developer-or-software-vector-27834427.jpg";
import cssIcon from "./assets/css-icon.svg";
import htmlIcon from "./assets/html-icon.svg";
import jsIcon from "./assets/js-icon.svg";
import reactIcon from "./assets/reactjs-icon.svg";
import jestIcon from "./assets/jestjsio-icon.svg";
import firebaseIcon from "./assets/firebase-icon.svg";
import postgreIcon from "./assets/postgresql-icon.svg";
import "./app.css";

function App() {
  return (
    <>
      <header>
        <h1>
          Amaan The <span id="developer">Developer</span>
        </h1>
        <nav>
          <a>About me</a>
          <a>Projects</a>
        </nav>
      </header>
      <main>
        <section id="photo_and_quote">
          <img src={guyCoding} id="main_photo" />
          <p id="quote">
            "Good design is good <br />
            business"
            <br />
            <span id="author">- Thomas Watson JR.</span>
          </p>
        </section>
        <section id="about_me_section">
          <div id="my_info">
            <img src={amaan} id="profile_pic" />
          </div>
          <div id="about_me">
            <h2>About me</h2>

            <p>
              a highly skilled and passionate Junior Full Stack Developer
              specializing in CSS, HTML, JavaScript, React and PostgreSQL. With
              a deep understanding of modern web technologies and a keen eye for
              design, I bring creativity and functionality together to create
              stunning and user-friendly websites. I take great pride in
              crafting clean and efficient code, leveraging my expertise in CSS
              to create visually appealing designs, JavaScript to add dynamic
              and interactive elements, and React to develop efficient and
              scalable projects.
            </p>
          </div>
        </section>
        <section id="my_skills">
          <h2>Technical skills</h2>
          <div id="tech">
            <img src={cssIcon} />
            <img src={htmlIcon} />
            <img src={jsIcon} />
            <img src={reactIcon} />
            <img src={postgreIcon} />
            <img src={jestIcon} />
            <img src={firebaseIcon} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
