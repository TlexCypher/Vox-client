interface User {
  role: Role;
  username: string;
}

enum Role {
  Admin,
  Operator,
}
