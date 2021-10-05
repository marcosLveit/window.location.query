const query = () => {
  let {search} = window.location;
    search = search.replace("?", "");
    let params = search.split("&");
    params = params.map(param => {
        [key, value] = param.split("=");
        return [key, value];
    });
    return Object.fromEntries(params);
}

if(!window.location.query){
  window.location.query = query();
}
