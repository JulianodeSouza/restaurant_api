export default class RequestErrors extends Error {
  requestErrors: any[] = [];

  constructor(message: string, errors: any[]) {
    super(message);
    this.requestErrors = errors || [];
  }
}
