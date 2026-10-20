/** Physical dimensions use millimetres. No production geometry is implemented yet. */
export interface PackagingProject {
  schemaVersion: 1;
  id: string;
  name: string;
  structure: 'reverse-tuck-end';
  dimensions: { widthMm: number; depthMm: number; heightMm: number };
  material: { name: string; gsm: number; thicknessMm: number | null };
  window: { enabled: boolean; widthPercent: number };
  hanger: 'none' | 'round' | 'euro';
  print: { bleedMm: number; safeAreaMm: number };
}
