/**
 * Generate detailed HTML and markdown reports from benchmark results
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { ComparisonReport } from '@/types';

/**
 * Generate HTML report
 */
export function generateHTMLReport(report: ComparisonReport): string {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>State Management Benchmark Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 40px; }
        .header h1 { color: #333; margin-bottom: 10px; }
        .header p { color: #666; }
        .system-info { background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 30px; }
        .rankings { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .ranking-card { background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #007bff; }
        .ranking-card h3 { margin-top: 0; color: #333; }
        .ranking-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #dee2e6; }
        .ranking-item:last-child { border-bottom: none; }
        .medal { font-size: 20px; margin-right: 8px; }
        .library-results { margin-bottom: 40px; }
        .library-card { border: 1px solid #dee2e6; border-radius: 6px; margin-bottom: 20px; overflow: hidden; }
        .library-header { background: #007bff; color: white; padding: 15px 20px; font-weight: bold; }
        .library-body { padding: 20px; }
        .result-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .result-item { text-align: center; padding: 15px; background: #f8f9fa; border-radius: 4px; }
        .result-value { font-size: 24px; font-weight: bold; color: #007bff; }
        .result-label { font-size: 12px; color: #666; text-transform: uppercase; margin-top: 5px; }
        .recommendations { background: #e7f3ff; padding: 20px; border-radius: 6px; border-left: 4px solid #007bff; }
        .recommendations h3 { margin-top: 0; color: #333; }
        .recommendations ul { margin: 0; padding-left: 20px; }
        .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 State Management Benchmark Report</h1>
            <p>Comprehensive performance comparison of JavaScript state management libraries</p>
            <p><strong>Generated:</strong> ${report.timestamp.toLocaleString()}</p>
        </div>

        <div class="system-info">
            <h3>🔧 System Information</h3>
            <p><strong>Node.js:</strong> ${report.nodeVersion}</p>
            <p><strong>Platform:</strong> ${report.systemInfo.platform} (${report.systemInfo.arch})</p>
            <p><strong>CPU Cores:</strong> ${report.systemInfo.cpuCount}</p>
            <p><strong>Total Memory:</strong> ${(report.systemInfo.totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB</p>
        </div>

        <div class="rankings">
            <div class="ranking-card">
                <h3>🏆 Overall Performance</h3>
                ${report.rankings.overall.map((rank, index) => `
                    <div class="ranking-item">
                        <span>${getMedal(index)} ${rank.library}</span>
                        <span>${rank.score} pts</span>
                    </div>
                `).join('')}
            </div>
            <div class="ranking-card">
                <h3>⚡ Operations per Second</h3>
                ${report.rankings.byOpsPerSec.map((rank, index) => `
                    <div class="ranking-item">
                        <span>${getMedal(index)} ${rank.library}</span>
                        <span>${rank.score} pts</span>
                    </div>
                `).join('')}
            </div>
            <div class="ranking-card">
                <h3>💾 Memory Efficiency</h3>
                ${report.rankings.byMemoryEfficiency.map((rank, index) => `
                    <div class="ranking-item">
                        <span>${getMedal(index)} ${rank.library}</span>
                        <span>${rank.score} pts</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="library-results">
            <h2>📈 Detailed Results</h2>
            ${report.suites.map(suite => `
                <div class="library-card">
                    <div class="library-header">
                        ${suite.config.name} (${suite.config.category})
                    </div>
                    <div class="library-body">
                        <div class="result-grid">
                            <div class="result-item">
                                <div class="result-value">${suite.overallScore.toFixed(0)}</div>
                                <div class="result-label">Overall Score</div>
                            </div>
                            <div class="result-item">
                                <div class="result-value">${(suite.results.reduce((sum, r) => sum + r.opsPerSec, 0) / suite.results.length).toFixed(0)}</div>
                                <div class="result-label">Avg Ops/sec</div>
                            </div>
                            <div class="result-item">
                                <div class="result-value">${(suite.results.reduce((sum, r) => sum + r.avgTime, 0) / suite.results.length).toFixed(3)}ms</div>
                                <div class="result-label">Avg Time</div>
                            </div>
                            <div class="result-item">
                                <div class="result-value">${(suite.results.reduce((sum, r) => sum + Math.abs(r.memoryDelta), 0) / suite.results.length).toFixed(2)}MB</div>
                                <div class="result-label">Avg Memory</div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="recommendations">
            <h3>💡 Recommendations</h3>
            <ul>
                ${report.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>

        <div class="footer">
            <p>Benchmark results may vary based on system specifications and Node.js version.</p>
            <p>Generated with ❤️ using the State Management Benchmark Suite</p>
        </div>
    </div>
</body>
</html>`;

  return html;
}

/**
 * Generate Markdown report
 */
export function generateMarkdownReport(report: ComparisonReport): string {
  let markdown = `# State Management Benchmark Report

*Generated on ${report.timestamp.toLocaleString()}*

## 🔧 System Information

- **Node.js:** ${report.nodeVersion}
- **Platform:** ${report.systemInfo.platform} (${report.systemInfo.arch})
- **CPU Cores:** ${report.systemInfo.cpuCount}
- **Total Memory:** ${(report.systemInfo.totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB

## 🏆 Performance Rankings

### Overall Performance
${report.rankings.overall.map((rank, index) => `${index + 1}. **${rank.library}** - ${rank.score} points`).join('\n')}

### ⚡ Operations per Second (Higher is better)
${report.rankings.byOpsPerSec.map((rank, index) => `${index + 1}. **${rank.library}** - ${rank.score} points`).join('\n')}

### 💾 Memory Efficiency (Lower usage is better)
${report.rankings.byMemoryEfficiency.map((rank, index) => `${index + 1}. **${rank.library}** - ${rank.score} points`).join('\n')}

## 📊 Detailed Results

${report.suites.map(suite => {
  const avgOps = (suite.results.reduce((sum, r) => sum + r.opsPerSec, 0) / suite.results.length).toFixed(0);
  const avgTime = (suite.results.reduce((sum, r) => sum + r.avgTime, 0) / suite.results.length).toFixed(3);
  const avgMemory = (suite.results.reduce((sum, r) => sum + Math.abs(r.memoryDelta), 0) / suite.results.length).toFixed(2);

  return `### ${suite.config.name} (${suite.config.category})

| Metric | Value |
|--------|-------|
| Overall Score | ${suite.overallScore.toFixed(0)} |
| Avg Ops/sec | ${avgOps} |
| Avg Time | ${avgTime}ms |
| Avg Memory | ${avgMemory}MB |

`;
}).join('')}

## 💡 Recommendations

${report.recommendations.map(rec => `- ${rec}`).join('\n')}

---

*This report was generated by the State Management Benchmark Suite. Results may vary based on system specifications.*`;

  return markdown;
}

/**
 * Get medal emoji for ranking
 */
function getMedal(index: number): string {
  switch (index) {
    case 0: return '🥇';
    case 1: return '🥈';
    case 2: return '🥉';
    default: return '📍';
  }
}

/**
 * Save reports to files
 */
export async function saveReports(report: ComparisonReport): Promise<{ html: string; markdown: string }> {
  // Ensure reports directory exists
  if (!existsSync('reports')) {
    mkdirSync('reports', { recursive: true });
  }

  const timestamp = Date.now();

  // Generate HTML report
  const htmlReport = generateHTMLReport(report);
  const htmlPath = `reports/benchmark-${timestamp}.html`;
  writeFileSync(htmlPath, htmlReport);

  // Generate Markdown report
  const markdownReport = generateMarkdownReport(report);
  const markdownPath = `reports/benchmark-${timestamp}.md`;
  writeFileSync(markdownPath, markdownReport);

  // Save JSON data
  const jsonPath = `reports/benchmark-${timestamp}.json`;
  writeFileSync(jsonPath, JSON.stringify(report, null, 2));

  console.log(`\n📄 Reports generated:`);
  console.log(`   HTML: ${htmlPath}`);
  console.log(`   Markdown: ${markdownPath}`);
  console.log(`   JSON: ${jsonPath}`);

  return {
    html: htmlPath,
    markdown: markdownPath
  };
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  // Load latest benchmark result and generate reports
  const fs = await import('fs');
  const path = await import('path');

  const reportsDir = 'reports';
  if (!fs.existsSync(reportsDir)) {
    console.error('❌ No reports directory found. Run benchmarks first.');
    process.exit(1);
  }

  const files = fs.readdirSync(reportsDir)
    .filter(file => file.endsWith('.json'))
    .sort()
    .reverse();

  if (files.length === 0) {
    console.error('❌ No benchmark results found. Run benchmarks first.');
    process.exit(1);
  }

  const latestFile = files[0];
  const report: ComparisonReport = JSON.parse(fs.readFileSync(path.join(reportsDir, latestFile), 'utf-8'));

  await saveReports(report);
}