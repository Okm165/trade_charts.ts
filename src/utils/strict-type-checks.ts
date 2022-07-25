/**
 * Represents a type `T` where every property is optional.
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends readonly (infer X)[]
    ? readonly DeepPartial<X>[]
    : DeepPartial<T[P]>;
};

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && isFinite(value);
}

export function isInteger(value: unknown): boolean {
  return typeof value === "number" && value % 1 === 0;
}

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function notNull<T>(t: T | null): t is T {
  return t !== null;
}

export function undefinedIfNull<T>(t: T | null): T | undefined {
  return t === null ? undefined : t;
}
