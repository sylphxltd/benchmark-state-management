/**
 * Unified Logging System
 *
 * Provides consistent logging across the framework with:
 * - Colored emoji prefixes
 * - Debug mode support
 * - Structured output
 */

export type LogLevel = 'info' | 'success' | 'warn' | 'error' | 'debug';

export interface Logger {
  info(message: string): void;
  success(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

class ConsoleLogger implements Logger {
  private isDebug: boolean;

  constructor() {
    this.isDebug = process.env.DEBUG === 'true' || process.env.DEBUG === '1';
  }

  info(message: string): void {
    console.log(`ℹ️  ${message}`);
  }

  success(message: string): void {
    console.log(`✅ ${message}`);
  }

  warn(message: string): void {
    console.warn(`⚠️  ${message}`);
  }

  error(message: string): void {
    console.error(`❌ ${message}`);
  }

  debug(message: string): void {
    if (this.isDebug) {
      console.log(`🔍 ${message}`);
    }
  }
}

// Singleton logger instance
export const logger = new ConsoleLogger();

// Helper function for formatting errors with context
export function formatError(operation: string, error: Error, suggestion?: string): string {
  let message = `Failed to ${operation}`;

  if (error.message) {
    message += `\nReason: ${error.message}`;
  }

  if (suggestion) {
    message += `\nSuggestion: ${suggestion}`;
  }

  return message;
}
