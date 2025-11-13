/**
 * Version Checker Module
 *
 * Core functionality for checking library version updates
 */

import { execSync } from 'child_process';
import { join } from 'path';

export async function checkVersions(categoryPath: string) {
  // For now, delegate to the existing script
  // TODO: Move all logic here in future refactoring
  const scriptPath = join(process.cwd(), 'scripts/check-versions.ts');

  try {
    execSync(`bun run ${scriptPath} ${categoryPath}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
  } catch (error: any) {
    throw new Error(`Failed to check versions: ${error.message}`);
  }
}
