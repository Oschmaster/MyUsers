export interface User {
  id: number;
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  birthDate: Date | null | undefined;
  email: string | null | undefined;
  gender: string | null | undefined;
}
