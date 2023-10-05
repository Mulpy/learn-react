// < !-- < html > Next.js will create these for me-- >

// < !-- < body > Next.js will create these for me-- >
// < !-- < div id = "app" ></div > -->
// < !-- < div id = "people" ></div > -->

// < !------Unnecessary Scripts once react - dom installed with NPM-- >
// < !-- < script src = "https://unpkg.com/react@17/umd/react.development.js" ></script > -->
// < !-- < script src = "https://unpkg.com/react-dom@17/umd/react-dom.development.js" ></script > -->
// < !--Babel Script-- >
// < !-- < script src = "https://unpkg.com/@babel/standalone/babel.min.js" ></script > -->

// < !--Declarative React Code-- >
// < !-- < script type = "text/jsx" > -->
// < !------Unnecessary Scripts once react - dom installed with NPM-- >

// < !-- const app = document.getElementById('app')-- >
// < !-- const people = document.getElementById('people')-- >

import { useState } from "react";
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

// < !--ReactDOM.render(-->
// < !-- < HomePage />, app); -->
// < !--ReactDOM.render(-->
// < !-- < ListNames />, people); -->
// < !-- </script > -->

// < !--Imperative JavaScript Code-- >
// < !-- < script type = "text/javascript" >
//     const app = document.getElementById('app');
// const header = document.createElement('h1');
// const headerContent = document.createTextNode('Develop. Preview. Ship. 🚀');
// header.appendChild(headerContent);
// app.appendChild(header);
//   </script > -->
// < !-- </body > Next.js will create these for me-- >

// < !-- </html > Next.js will create these for me-- >
