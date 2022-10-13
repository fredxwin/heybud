<div id="header" align="center">
   <img src="https://thewealthmosaic.s3.amazonaws.com/media/Logo_Bud_transparant.png" width="300"/> 
</div>
<div id="intro">
   <h1>
      📖Introduction
   </h1>
   <p>
      A friendly money management app powered by Bud's transaction data
   </p>
</div>
<div id="intro">
   <h4>🛠️ Built using</h4>
   <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
   <img src="https://styled-components.com/logo.png" title="styled-components" alt="styled-components" width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
   <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="NodeJS" alt="Webpack" width="40" height="40"/>&nbsp;
</div>
<div><h2>:eyes: <a href="https://singular-vacherin-65ee87.netlify.app/">Demo</a></h2></div>
<div>
   <br />
   <h4>⛈️ Lighthouse report </h4>
   <img src="https://heybud-app.s3.eu-west-2.amazonaws.com/report.PNG" title="Lighthouse" alt="Lighthouse"/>
</div>

<br />
<div id="prerequisites">
   <h1> ✍️ Prerequisites</h1>
   <p>In order to run this app in your local machine you will need to have the following installed. `pnpm is used in this project`</p>
   <table>
      <tr>
         <th><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" href="https://nodejs.org/en/" title="NodeJS" alt="NodeJS" width="40" height="40"/></th>
           <th><img src="https://github.com/devicons/devicon/blob/master/icons/npm/npm-original-wordmark.svg" href="https://nodejs.org/en/" title="npm" alt="npm" width="40" height="40"/></th>
         <th><img href="https://git-scm.com/" src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="Git" alt="Git" width="40" height="40"/></th>
      </tr>
      <tr>
         <td>✔️</td>
          <td>✔️</td>
         <td>〰️</td>
      </tr>
   </table>
</div>
<div id="project">
   <h1> 📂 Project Structure </h1>
</div>

```
heybud/
├── config                         # webpack configs
└── src/
    ├── assets                     # image assets
    ├── components                 # common components
    ├── context                    # transaction context accessed globally
    ├── hooks                      # custom hook
    └── pages/                     # Split by feature all components located in associated page
        └── home/
            ├── account
            ├── category
            └── transactions
```

<div id="Usage">
   <h1>⚡ Usage</h1>
   <p>This will cover how to run the project locally. To begin simply clone or download the repository</p>
   <table>
      <tr>
         <th>App</th>
      </tr>
      <tr>
         <td>Client</td>
         <td>http://localhost:3000</td>
      </tr>
   </table>
   <h2>🔌 Run in your local machine</h2>
</div>

```
git clone https://github.com/fredxwin/heybud.git
```

```
pnpm install
```

<div>
   <p>Once dependancies have been installed.
</div>

```
pnpm start
```

<div>
   <h2> 🧪 Testing</h2>
   <p>Using the library <a href="https://jestjs.io/">Jest</a> to conduct component testing however I have ran into issues with correctly setting up path modules in order to run tests. In the future I would like to rectify this and to understand how to configure testing in my project. </p>
</div>
