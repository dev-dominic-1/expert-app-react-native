import ApiRecord from "./ApiRecord";

export default class User extends ApiRecord {
  name!: string;
  username!: string;

  constructor(id: number) {
    super(id);
  }
}
