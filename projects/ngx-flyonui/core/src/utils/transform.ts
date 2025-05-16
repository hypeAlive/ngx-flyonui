export type InputBoolean = string | boolean;

export function transformInputBool(value: InputBoolean) {
  if (typeof value === "boolean") return value;
  return value === "" || value === "true";
}
