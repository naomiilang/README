// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![license badge](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-green)
  ## Description:
  ${data.project}
  ## Installation:
  ${data.install}
  ## Usage:
  ${data.usage}
  ## Contributing:
  ${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  email me at ${data.email} with additonal questions 
  https://github.com/${data.user}`
}

module.exports = generateMarkdown;
