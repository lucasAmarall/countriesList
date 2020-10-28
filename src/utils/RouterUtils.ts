export class RouterUtils {
  static hasPrevRouteFromParams(route: string){
    return route.split("+").length > 1;
  }

  static getPreviousRoute(route: string){
    const _route = route.toLocaleLowerCase().split("+");
    _route.pop();
    return _route.join("+");
  }
  
  static nameToRoute(name: string){
    return name.toLocaleLowerCase()
      .split(" ")
      .join("-");
  }

  static routeToName(name: string){
    return name.split("+")[name.split("+").length -1].toLocaleLowerCase()
      .split("-")
      .join(" ");
  }
}