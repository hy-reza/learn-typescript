type Dragable = {
  drag: () => void;
};
type Scaleable = {
  scale: () => void;
};

type UiWidget = Dragable & Scaleable; //intersaction

let textBox: UiWidget = {
  drag: () => {},
  scale: () => {},
};
