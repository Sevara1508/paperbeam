# API 🔌

## What is the PaperBeam API?
The PaperBeam API gives developers programmatic access to the platform — letting you
retrieve documents, push new content, update existing records, and automate team
workflows without ever touching the dashboard manually.

## Available Endpoints

All API routes are prefixed with `/api/v1/`. Authentication is required for POST and PUT requests.

| Method | Route | Description |
|--------|-------|-------------|
| GET | /documents | Fetch a list of all documents in your workspace |
| GET | /documents/:id | Retrieve a single document by its ID |
| POST | /documents | Create and publish a brand new document |
| PUT | /documents/:id | Modify the content of an existing document |
| DELETE | /documents/:id | Permanently remove a document from the workspace |

## Fetching Documents with JavaScript

The example below shows how to retrieve all documents from the API and log
the response. In a real project you'd use this data to populate a page or dashboard:

```js
// Request all documents from the PaperBeam API
fetch('/api/v1/documents')
  // Parse the JSON response body
  .then(response => response.json())
  // Work with the returned document data
  .then(data => {
    console.log(`Loaded ${data.length} documents`)
    console.log(data)
  })
  .catch(error => console.error('API error:', error))
```

## Embedding an API-Powered Button in HTML

This button can be wired up to trigger an API call when clicked,
for example to launch a new workspace or publish a draft:

```html
<!-- Button that triggers a PaperBeam workspace action -->
<button class="pb-action-button" onclick="launchWorkspace()">
  Launch Workspace 🚀
</button>
```

::: tip Automate Your Workflow
The PaperBeam API is especially powerful for teams. You can schedule content
publishing, sync documents across projects, and trigger actions automatically
without manual input.
:::

::: info Authentication
All write operations (POST, PUT, DELETE) require a valid API token passed
in the request header as `Authorization: Bearer <your_token>`.
:::