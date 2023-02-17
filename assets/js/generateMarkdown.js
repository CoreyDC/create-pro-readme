// FUNCTION TO RENDER THE LICENSE BADGE
function renderLicenseBadge(license) {
  if ( license === 'MIT' ) {
    return '![Github license](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge&logo=appveyor)';
  }
  if ( license === 'Apache' ) {
    return '![Github license](https://img.shields.io/badge/license-Apache-orange?style=for-the-badge&logo=appveyor)';
  }
  if ( license === 'GPL' ) {
    return '![Github license](https://img.shields.io/badge/license-GPL-orange?style=for-the-badge&logo=appveyor)';
  }
  else {
    return 'N/A';
  }
} 

// FUNCTION TO LINK THE LICENSE BADGE TO A URL PROVIDING INFO ON THE LICENSE
function renderLicenseLink(license) {
  if ( license === 'MIT' ) {
    return 'https://opensource.org/license/mit/';
  }
  if ( license === 'Apache' ) {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  if ( license === 'GPL' ) {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
  else {
    return;
  }
}



// FUNCTION TO GENERATE THE MARKDOWN FOR THE README FILE
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## License

  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## Description 
  
  ${data.description}

  ## Table Of Contents

  [Installation](#installation)
  
  [Usage](#usage)
  
  [Credits](#credits)
  
  [Contact](#contact)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Contact

  If you have any questions, comments or concerns contact me here:

  [GitHub](https://github.com/${data.github})
  
  [Email](mailto:${data.email}?subject=hi%20there!)
`;
}

module.exports = generateMarkdown;
