# Fermi Questions Online Practice Test

[![Stars](https://img.shields.io/github/stars/EricAndrechek/FermiQuestions)](https://github.com/EricAndrechek/FermiQuestions/stargazers)
[![Open Issues](https://img.shields.io/github/issues-raw/EricAndrechek/FermiQuestions)](https://github.com/EricAndrechek/FermiQuestions/issues?q=is%3Aopen+is%3Aissue)
[![Closed Issues](https://img.shields.io/github/issues-closed-raw/EricAndrechek/FermiQuestions)](https://github.com/EricAndrechek/FermiQuestions/issues?q=is%3Aissue+is%3Aclosed)
[![All Contributors](https://img.shields.io/github/all-contributors/EricAndrechek/FermiQuestions)](#contributors)
[![wakatime](https://wakatime.com/badge/github/EricAndrechek/FermiQuestions.svg)](https://wakatime.com/badge/github/EricAndrechek/FermiQuestions)
[![PayPal](https://img.shields.io/badge/PayPal-Donate-green)](https://paypal.me/AndrechekEric)
[![GitHub Sponsors](https://img.shields.io/badge/GitHub%20Sponsors-Donate-green)](https://github.com/sponsors/EricAndrechek)

This project was designed to be a friendly and easy-to-use site for students to practice for the fermi questions Science Olympiad event.

## Adding a Question

To add a question, [open a new issue](https://github.com/EricAndrechek/FermiQuestions/issues/new/choose) and paste in your questions and answers, along with their sources. I will add this to the question-bank for you. 

**If you'd like to help make my life easier** and ensure a faster addition to the question-bank, follow the steps below, or refer [to this walkthrough](https://github.com/EricAndrechek/FermiQuestions/issues/8#issuecomment-1199831374) if you are new to, or less familiar with Github.

To start, open the `question-bank.json` file and create a new object inside the `questions` object with a key to identify the source of the question(s) you are adding. Add multiple separate objects with different keys for each different source.

Next, add an object with the same key as the source to the `sources` object. Include the link to your source, the name you would like to be identified by, and the date you have sourced this information on.

An example would look like this:

```json
{
    "questions": {
        "og": {
            ...
        },
        "example": {
            "How many hydrogen atoms are present in 1 mg of aspartame (C<sub>14</sub>H<sub>18</sub>N<sub>2</sub>O<sub>5</sub>), the artificial sweetener?": 19,
            "What is the mass, in grams, of all electrons within a single copper atom?": -26
        }
    },
    "sources": {
        "og": {
            ...
        },
        "example": {
            "link": "https://github.com/EricAndrechek/FermiQuestions#Adding-a-Question",
            "author": "Eric Andrechek",
            "date": "July 29, 2022"
        }
    }
}
```

If you want to be extra helpful, include the changes you are making to the change log and add yourself to the contributors list!

## Changes

-   July 29, 2022 - Added question source information as suggested by @Haadi-Khan
-   July 13, 2022 - Fixed incorrect answer pointed out by @IOnlyShoot3s
-   May 19, 2022 - Migrated from [andrechek.com](https://andrechek.com) to open source codebase and questions all hosted on Github.
-   March 2, 2019 - Open sourced question bank on Google Sheets, with many anonymous contributions from the community. Also added an online leaderboard.
-   February 10, 2019 - First release of website on [andrechek.com/projects/fermi](https://andrechek.com/projects/fermi) with closed source code and question bank.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://andrechek.com"><img src="https://avatars.githubusercontent.com/u/35144594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eric Andrechek</b></sub></a><br /><a href="https://github.com/EricAndrechek/FermiQuestions/commits?author=EricAndrechek" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/IOnlyShoot3s"><img src="https://avatars.githubusercontent.com/u/109195738?v=4?s=100" width="100px;" alt=""/><br /><sub><b>IOnlyShoot3s</b></sub></a><br /><a href="https://github.com/EricAndrechek/FermiQuestions/issues?q=author%3AIOnlyShoot3s" title="Bug reports">🐛</a> <a href="#content-IOnlyShoot3s" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Haadi-Khan"><img src="https://avatars.githubusercontent.com/u/44217975?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Haadi-Khan</b></sub></a><br /><a href="#ideas-Haadi-Khan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/EricAndrechek/FermiQuestions/issues?q=author%3AHaadi-Khan" title="Bug reports">🐛</a> <a href="#content-Haadi-Khan" title="Content">🖋</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
