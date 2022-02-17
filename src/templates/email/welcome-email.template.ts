export default function (data: any): string {
  const { first_name, last_name } = data;
  return `Welcome to Kippa, ${first_name} ${last_name}`;
}
