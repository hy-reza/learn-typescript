const echo = <T extends string | number>(value: T): T => { //membatasi type generic
  return value;
};

