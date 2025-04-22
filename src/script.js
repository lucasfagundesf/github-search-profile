export async function getAPI(user) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  if (!response.ok) {
    throw new Error(`Erro ${response.status}: Usuário não encontrado`);
  }
  return response.json();
}
