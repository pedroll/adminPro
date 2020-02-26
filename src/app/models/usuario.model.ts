export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public password: string,
    public image?: string,
    public role?: string,
    public google?: string,
    public _id?: string
  ) {
  }
}
