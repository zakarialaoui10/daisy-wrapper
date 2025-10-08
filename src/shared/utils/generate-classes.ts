export function generate_classes(block: string, ...names: any[]): string {
  return [
    block,
    ...names
      .filter(Boolean) // remove undefined, null, false, ''
      .map((name) => `${block}-${name}`)
  ]
    .filter(Boolean)
    .join(' ');
}
