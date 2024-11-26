interface shape {
  height: number;
  weight: number;
}

type mappedOptionalType = {
  [key in keyof shape]?: shape[key];
};

type ReadOnlyMapped = {
  readonly [key in keyof shape]: shape[key];
};

const rectangle: mappedOptionalType = {
  height: 34,
};

const square: shape = {
  height: 12,
  weight: 12,
};
