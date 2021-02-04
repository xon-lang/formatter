export abstract class BaseFormatter {
  constructor(protected code: string) {}

  abstract formattedCode(): string;
}
