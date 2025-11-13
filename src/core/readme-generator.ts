/**
 * README Generator Module
 *
 * Core functionality for generating category README files
 */

import { execSync } from 'child_process';
import { join } from 'path';

export async function generateCategoryReadme(categoryPath: string) {
  // For now, delegate to the existing script
  // TODO: Move all logic here in future refactoring
  const scriptPath = join(process.cwd(), 'scripts/generate-simple-readme.ts');

  try {
    execSync(`bun run ${scriptPath} ${categoryPath}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
  } catch (error: any) {
    throw new Error(`Failed to generate README: ${error.message}`);
  }
}
