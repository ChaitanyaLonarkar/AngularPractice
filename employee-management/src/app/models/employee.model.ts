export class Employee {
  id: number | undefined;
  name: string | undefined;
  email!: string;
  age: number | undefined;
  department: 'Angular' | 'React' | 'Node' | undefined;
  skills: string[] | undefined;
}
