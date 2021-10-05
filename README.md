# window.location.query
Add the query function (like node) to the window location object in vanilla js. It return an object with the search params from url.

## Usage example

Let's supouse we have this url:

```url
https://example.com/?foo=bar&word=goose
```
##

When we call the query method, it will return an JSON object with the params of the url:

```javascript
console.log(window.location.query)
/***
   return an object with search params in format {key: value}
   {
      foo: "bar",
      word: "goose"
   }
***/
