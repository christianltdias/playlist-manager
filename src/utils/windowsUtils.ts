import { WindowSize } from "../constants/Windows";

export function isWindowSizeLowerThan(width: number | undefined, refSize: WindowSize) : boolean {
  if(!width){
    return false;
  } 
  return width < refSize;
}

export function isWindowSizeGreaterThan(width: number | undefined, refSize: WindowSize) : boolean {
  if(!width){
    return false;
  } 
  return width > refSize;
}