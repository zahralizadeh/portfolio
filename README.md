This repo contains the code that is used to create my resume site [zahraalizadeh.web.app](zahraalizadeh.web.app).
The whole application is based around these files:

- [/src/resumeDetails.js](https://github.com/zahralizadeh/portfolio/blob/master/src/ResumeDetails.js) - which is structured as my resume details and assign resume part of website.
- [/src/skillsDetails.js](https://github.com/zahralizadeh/portfolio/blob/master/src/SkillsDetails.js) - which contains my skills data
- [/src/Menu.js](https://github.com/zahralizadeh/portfolio/blob/master/src/Menu.js) - which configures the menu layout and paths.

Each of mentioned files acts as a data variable which is then passed in as a prop to the corresponding section component such as src/components/Skills.js.
There are several components as [layout components](https://github.com/zahralizadeh/portfolio/tree/master/src/Layout) and the others which are [main components](https://github.com/zahralizadeh/portfolio/tree/master/src/Components).
