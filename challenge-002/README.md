## Challenge - 002

The aim of this challenge is dealing with the followings:

- Work with setInterval
- Hydrate an HTML element after being rendered

## Tasks

- Create and position randomly 4 elements and set their border to 1px and solid.
- Add color input and let the user pick a color.
- Apply picked color to created 4 elements using button `colorBoxes`.
- `colorBoxes` should be activated after 3 minutes from the DOM beining loaded.
- Add an indicator for the hydration (activation of `colorBoxes` button), where red color means hasn't been hydrated and green been hydrated.

Note: The location of script tag matters in the DOM structure, placing the `<script></script>` in the head may
make some HTML elements not accessible since the script will be evaluated before these elements added to DOM Tree

# references

- [Critical rendering path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path)
- [Hydration (web development)](<https://en.wikipedia.org/wiki/Hydration_(web_development)>)
