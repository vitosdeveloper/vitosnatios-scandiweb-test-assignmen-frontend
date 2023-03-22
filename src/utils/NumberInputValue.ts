const numberValidation = (n: { value: string }) =>
  !n.value.length || !Number(n.value);

export default numberValidation;
