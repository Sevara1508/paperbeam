# API

## API Overview
The PaperBeam API allows developers to access documents, publish content, and manage project data.

## Example Endpoints

| Method | Route | Purpose |
|--------|-------|---------|
| GET | /documents | Retrieve all documents |
| POST | /documents | Create a new document |
| PUT | /documents/:id | Update an existing document |

## JavaScript Example

```js
// gets document data from the API
fetch('/api/documents')
  // changes the response into JSON
  .then(response => response.json())
  // shows the data in the console
  .then(data => console.log(data));
```

## HTML Example

```html
<!-- simple button for launching a workspace -->
<button class="cta-button">Launch Workspace</button>
```

::: tip
You can use the API to automate content publishing and team workflows.
:::