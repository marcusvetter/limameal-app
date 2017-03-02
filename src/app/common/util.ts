export class Util {

  public static isNotEmpty(value: string): boolean {
    return (typeof value === "string" || value instanceof String) && value.length > 0;
  }

}
