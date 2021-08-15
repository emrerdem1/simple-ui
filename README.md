# The Simple UI App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo

[The Simple UI](https://the-simple-ui.netlify.app/)

## How to Run Locally

Install dependencies and run the script.

`yarn install && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Main Goal

Build a Single Page Application with the following pages and features.

### Website Wide Features

#### State Management

This feature shows your ability to pass "state" or "updates"/"events" among the components of the web application. Navigating between pages should not reset the site-wide/global state.

Reloading the page can clear the state. Persistence is not required.

You can use a Vue.js event bus or your preferred module/tool for your preferred framework.

What to store:

- Language (See Localization)
- "User Info" (See Login Modal)

#### Localization

- You can use your preferred localization module/tool for the JS framework you use.
- Only 2 languages will be enough. (e.g. tr/en)
- You can set the language to the browser language or use a default one (e.g. "en")
- User should stay on the same page when localization changes.
  - Do not reload the page.
  - All text on the page should update.
    - Some elements may re-render from scratch. Most should only update the text shown.
- Navigating to a new page or going back should not change the language set. (See State Management)

#### Desktop Navigation bar

The navigation bar should be present on all pages.

- Left side
  - Dummy icon
    - You can use your favourte icon pack.
    - You can also use a harcoded base64 image.
  - Current page name
    - Homepage should use the website name instead (e.g. Sample or Dummy)
- Right side
  - Links/Buttons to other pages.
  - Localization/Locale picker dropdown
  - Login button (only shown if no "User Info")
    - Opens "Login" modal
  - "User Name" button with dropdown or popover element (only shown if "User Info" exists)
    - Element will display email
    - Element will have "Logout" button

Logout button deletes "User Info" from site-wide/global state. (No server interaction needed)
"Login" and "User Name" buttons should update based on site-wide/global state.

#### Mobile Navigation Bar

- Current page name should be on the left.
- Menu button should be on the right.
  - Can be a "hamburger" button or any other icon.
  - Should indicate open or close state.
- Menu should include the rest of the things from the Desktop Navigation Bar. The order does not matter.
  - User info can be visible. No need for a dropdown or popover.

#### Dummy footer

- Should exists on all pages. What is included in the footer does not matter.

### Homepage

- Title
- Dummy text (e.g. Lorem Ipsum)
  - Please make sure to use different dummy text for different languages.

### "Login" Modal

You don't need to have a backend or mock server. The only purpose of this component/modal/page is to trigger an update that will update all relevant parts of the website. (e.g. name shown on navigation bar should be updated when )

- Title
- Name field
- Email field
- Password field
- Login button
- Locale selector on one of the corners.
- Close button (Optional)

You can have an exit button or only close the modal when the user presses the "Login" button.

When the user presses "Login" button, you should update the "User Info" stored in the site-wide/global state. (The components displaying "User Info" should also update)

### Contact Us Page

Should prefill and update `name` and `email` fields based on "User Info" from site-wide/global state (See Login Modal).

- Title
- Name field
- Email field
  - Please check if characters entered are valid and inform the user (e.g. red/green border)
    - You can use a tool but html5
- Phone number field
  - Please check if characters entered are valid and inform the user (e.g. red/green border)
  - No need for a separate extension code selector.
  - No need to format the text entered.
- Country Selector with suggestion/search
  - Entering text should suggest possible countries to the user.
    - This should be done without a server.
  - You can implement a basic search yourself or use a module/tool.
  - Country names should be localized. Search results should update if localization changes.
- Text field
  - Can use a `textarea` element.
- Send button

For Country Selector, you can use the full list of countries or the following list.

```javascript
const countryList = [
  { id: 'TR', name: 'Turkey' },
  { id: 'US', name: 'United States of America' },
  { id: 'GB', name: 'United Kingdom' },
  { id: 'DE', name: 'Germany' },
  { id: 'SE', name: 'Sweden' },
  { id: 'KE', name: 'Kenya' },
  { id: 'BR', name: 'Brazil' },
  { id: 'ZW', name: 'Zimbabwe' },
];
```

Pressing "Send" should prepare a JSON. You can send a POST request to "example.com" or just `console.log(...)` it.

You can use the following example for formatting your JSON:

```json
{
  "name": "...",
  "email": "...",
  "phonenumber": "000000000000",
  "country_code": "TR",
  "text": "..."
}
```
