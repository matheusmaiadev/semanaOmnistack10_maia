import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
/* Conceitos Basicos React: Componente, Estado, Propriedade */

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>
          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://pbs.twimg.com/profile_images/142467994/martywms-close.JPG" alt="Marty Williams"/>
              <div className="user-info">
                <strong>Marty Williams</strong>
                <span> Lol, Fortnite, outras merdas</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sollicitudin mi ac cursus. Curabitur at vestibulum turpis, in ornare erat. Etiam vel ultrices purus. </p>
            <a href="http://github.com/martwill">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://pbs.twimg.com/profile_images/142467994/martywms-close.JPG" alt="Marty Williams"/>
              <div className="user-info">
                <strong>Marty Williams</strong>
                <span> Lol, Fortnite, outras merdas</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sollicitudin mi ac cursus. Curabitur at vestibulum turpis, in ornare erat. Etiam vel ultrices purus. </p>
            <a href="http://github.com/martwill">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://pbs.twimg.com/profile_images/142467994/martywms-close.JPG" alt="Marty Williams"/>
              <div className="user-info">
                <strong>Marty Williams</strong>
                <span> Lol, Fortnite, outras merdas</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sollicitudin mi ac cursus. Curabitur at vestibulum turpis, in ornare erat. Etiam vel ultrices purus. </p>
            <a href="http://github.com/martwill">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://pbs.twimg.com/profile_images/142467994/martywms-close.JPG" alt="Marty Williams"/>
              <div className="user-info">
                <strong>Marty Williams</strong>
                <span> Lol, Fortnite, outras merdas</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sollicitudin mi ac cursus. Curabitur at vestibulum turpis, in ornare erat. Etiam vel ultrices purus. </p>
            <a href="http://github.com/martwill">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://pbs.twimg.com/profile_images/142467994/martywms-close.JPG" alt="Marty Williams"/>
              <div className="user-info">
                <strong>Marty Williams</strong>
                <span> Lol, Fortnite, outras merdas</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sollicitudin mi ac cursus. Curabitur at vestibulum turpis, in ornare erat. Etiam vel ultrices purus. </p>
            <a href="http://github.com/martwill">Acessar perfil no Github</a>
          </li>
          
        </ul>

      </main>
    </div>
  );
}

export default App;
