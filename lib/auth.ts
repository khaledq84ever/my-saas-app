export interface User {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: "user" | "admin";
  createdAt: string;
}

const STORAGE_KEY = "saas_users";
const SESSION_KEY = "saas_session";

const defaultUsers: User[] = [
  {
    id: "1",
    email: "admin@saas.io",
    password: "admin123",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    createdAt: new Date().toISOString(),
  },
];

function getUsers(): User[] {
  if (typeof window === "undefined") return defaultUsers;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
    return defaultUsers;
  }
  return JSON.parse(stored);
}

function saveUsers(users: User[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export async function register(
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<{ success: boolean; error?: string }> {
  const users = getUsers();
  
  if (users.find(u => u.email === email)) {
    return { success: false, error: "Email already exists" };
  }

  const newUser: User = {
    id: Date.now().toString(),
    email,
    password,
    firstName,
    lastName,
    role: "user",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  const { password: _, ...userWithoutPassword } = newUser;
  localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));

  return { success: true };
}

export async function login(
  email: string,
  password: string,
  rememberMe: boolean = false
): Promise<{ success: boolean; error?: string; user?: Omit<User, "password">}> {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return { success: false, error: "Invalid email or password" };
  }

  const { password: _, ...userWithoutPassword } = user;
  
  if (rememberMe) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
  } else {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
  }

  return { success: true, user: userWithoutPassword };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(SESSION_KEY);
}

export function getSession(): Omit<User, "password"> | null {
  if (typeof window === "undefined") return null;
  
  let session = localStorage.getItem(SESSION_KEY);
  if (!session) {
    session = sessionStorage.getItem(SESSION_KEY);
  }
  
  if (!session) return null;
  return JSON.parse(session);
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

export function isAdmin(): boolean {
  const user = getSession();
  return user?.role === "admin";
}

export async function getAllUsers(): Promise<User[]> {
  return getUsers();
}

export async function updateUser(
  id: string,
  updates: Partial<Omit<User, "id" | "role" | "createdAt">>
): Promise<{ success: boolean; error?: string }> {
  const users = getUsers();
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return { success: false, error: "User not found" };
  }

  users[index] = { ...users[index], ...updates };
  saveUsers(users);

  const currentSession = getSession();
  if (currentSession?.id === id) {
    const { password: _, ...userWithoutPassword } = users[index];
    localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
  }

  return { success: true };
}

export async function deleteUser(id: string): Promise<{ success: boolean; error?: string }> {
  const users = getUsers();
  const filtered = users.filter(u => u.id !== id);
  
  if (filtered.length === users.length) {
    return { success: false, error: "User not found" };
  }

  saveUsers(filtered);
  
  const currentSession = getSession();
  if (currentSession?.id === id) {
    logout();
  }

  return { success: true };
}