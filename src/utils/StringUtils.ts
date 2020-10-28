export class StringUtils {
  
  static chunk(_str: string | number = "", step: number) {
    let str = `${_str}`;
    let ret = []; let i; let len;
    for(i = 0, len = str.length; i < len; i += step) {
      ret.push(str.substr(i, step));
    }
    return ret;
  }
}