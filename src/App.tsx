import amaan from "./assets/amaan-removebg-preview.png";
import weatherAppPic from "./assets/weather-app-pic.png";
import gamesFrontendPic from "./assets/games-review-v3.png";
import gamesBackendPic from "./assets/games-review-backend.png";
import "./app.css";

function App() {
  return (
    <>
      <header>
        <h1>
          Amaan The <span id="developer">Developer</span>
        </h1>
        <nav>
          <a href="#about_me_section">About me</a>
          <a href="#my_skills">Skills</a>
          <a href="#my_projects">Projects</a>
          <a href="#form_section">Contact me</a>
        </nav>
      </header>
      <main>
        <div id="amaan_typewrite">
          <p>
            Amaan The <span>Developer</span>
          </p>
        </div>
        <section id="about_me_section">
          <div id="my_info">
            <img src={amaan} id="profile_pic" />
          </div>
          <div id="about_me">
            <h2 className="sub_headings">About me</h2>
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
          <h2 id="technical_skills_heading" className="sub_headings">
            Technical skills
          </h2>
          <div id="tech_skills_container">
            <div className="tech_skills_box">
              <h2>Front-end</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
              </ul>
            </div>
            <div className="tech_skills_box">
              <h2>Back-end</h2>
              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>PostgreSQL</li>
                <li>node</li>
                <li>Express</li>
              </ul>
            </div>
            <div className="tech_skills_box">
              <h2>Other</h2>
              <ul>
                <li>Github / Git</li>
                <li>Microsoft office</li>
                <li>PRINCE2</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="my_projects">
          <h2 className="sub_headings">Projects</h2>
          <div className="projects_single">
            <div>
              <img src={weatherAppPic} width="240" height="240" />
            </div>
            <div className="project_bio">
              <h2>
                <center>Weather app</center>
              </h2>
              <p>
                <span>Languages and Libraries:</span> HTML, CSS, JavaScript and
                Reactjs
              </p>
              <p>
                <span>Description:</span> A user-friendly and visually appealing
                web application with real-time weather data sourced from
                weatherAPI. User can search for their desired location using the
                search functionality which will display the current temperature
                and other data. The user can switch between displaying the data
                using degrees celcius and degrees fahrenheit. The user is also
                shown a three day forecast of the desired location and upon
                clicking on one of these forecasts, they will be shown an hourly
                forecast for that day.
              </p>
              <div className="buttons_container">
                <a
                  target="_blank"
                  href="https://amaan-weather-app-v1.netlify.app/"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/amaanmughal/amaan-weather-app-v1"
                >
                  <button className="button">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="projects_single">
            <div>
              <img src={gamesFrontendPic} width="240" />
            </div>
            <div className="project_bio">
              <h2>
                <center>Game reviews frontend</center>
              </h2>
              <p>
                <span>Languages and Libraries:</span> HTML, CSS, JavaScript and
                Reactjs
              </p>

              <p>
                <span>Description:</span> A user-friendly games review web
                application. The applications backend is powered by my own
                PostgreSQL API, handling data storage and retrieval for games,
                user information, reviews, and more. The user can click on a
                board game review they wish to view and see the review and
                comments related to that review. There is voting feature which
                allows the users to put a thumbs up or a thumbs down on a review
                or a comment.
              </p>

              <p>
                <span>Test account:</span> Username: tickle122 || Full Name: tom
                tickle
              </p>
              <div className="buttons_container">
                <a
                  target="_blank"
                  href="https://main--games-review-v3.netlify.app/"
                >
                  <button className="button">Live</button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/amaanmughal/games-review-v3"
                >
                  <button className="button">Code</button>
                </a>
              </div>
            </div>
          </div>
          <div className="projects_single">
            <div>
              <img src={gamesBackendPic} width="240" />
            </div>
            <div className="project_bio">
              <h2>
                <center>Game reviews backend</center>
              </h2>
              <p>
                <span>Languages and Libraries:</span> Nodejs, Expressjs, jest
                JavaScript and PostgreSQL
              </p>
              <p>
                <span>Description:</span> The games review backend created using
                PostgreSQL serves as the foundation of the gaming review web
                application. It efficiently manages the storage, retrieval, and
                organization of data related to games, user information,
                reviews, and other essential components of the platform. There
                is also tests created using jest to ensure that my sql queries
                were functioning correctly.
              </p>
              <div className="buttons_container">
                <a
                  target="_blank"
                  href="https://github.com/amaanmughal/NC-games-project-amaan"
                >
                  <button className="button">Code</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="form_section">
        <h2 className="sub_headings" id="contact_heading">
          Contact me
        </h2>
        <div id="form_container">
          <form
            action="https://formsubmit.co/amaanthedeveloper@outlook.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="email" name="subject" placeholder="subject" required />
            <input type="text" name="message" placeholder="message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </footer>
    </>
  );
}

export default App;
