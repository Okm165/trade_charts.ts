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

export function notUndefined<T>(t: T | undefined): t is T {
  return t !== undefined;
}

export function undefinedIfNull<T>(t: T | null): T | undefined {
  return t === null ? undefined : t;
}

/**
 * Checks an assertion. Throws if the assertion is failed.
 *
 * @param condition - Result of the assertion evaluation
 * @param message - Text to include in the exception message
 */
export function assert(condition: boolean, message?: string): void | never {
  if (!condition) {
    throw new Error("Assertion failed" + (message ? ": " + message : ""));
  }
}

/**
 * Ensures that value is defined.
 * Throws if the value is undefined, returns the original value otherwise.
 *
 * @param value - The value, or undefined.
 * @returns The passed value, if it is not undefined
 */
export function ensureDefined(value: undefined): never;
export function ensureDefined<T>(value: T | undefined): T;
export function ensureDefined<T>(value: T | undefined): T {
  if (value === undefined) {
    throw new Error("Value is undefined");
  }

  return value;
}

/**
 * Ensures that value is not null.
 * Throws if the value is null, returns the original value otherwise.
 *
 * @param value - The value, or null.
 * @returns The passed value, if it is not null
 */
export function ensureNotNull(value: null): never;
export function ensureNotNull<T>(value: T | null): T;
export function ensureNotNull<T>(value: T | null): T {
  if (value === null) {
    throw new Error("Value is null");
  }

  return value;
}

/**
 * Ensures that value is defined and not null.
 * Throws if the value is undefined or null, returns the original value otherwise.
 *
 * @param value - The value, or undefined, or null.
 * @returns The passed value, if it is not undefined and not null
 */
export function ensure(value: undefined | null): never;
export function ensure<T>(value: T | undefined | null): T;
export function ensure<T>(value: T | undefined | null): T {
  return ensureNotNull(ensureDefined(value));
}
