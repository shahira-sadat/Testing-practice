exports.stringLength = (string) => {
  const { length } = string;
  if (length > 0 && length < 11) {
    return string.length;
  }
  return 'Invalid string length';
};
