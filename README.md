# State Management Benchmark Suite 🏆

A professional TypeScript benchmark suite comparing the most popular JavaScript state management libraries using the industry-standard **tinybench** framework.

## 🎯 Purpose

This project provides **real, data-driven performance comparisons** between state management solutions to help developers make informed decisions based on actual benchmark results.

## 📊 **Benchmark Results** (November 2025)

### 🏆 **Performance Rankings** (Operations per Second)

| Rank | Library            | Category      | Ops/sec     | Margin  |
|------|--------------------|---------------|-------------|---------|
| 🥇   | **Solid Signals**  | Signal-based  | 45,855,042  | ±0.04%  |
| 🥈   | **Preact Signals** | Signal-based  | 41,831,425  | ±0.04%  |
| 🥉   | **Zustand**        | Atomic        | 26,365,791  | ±0.80%  |
| 📍   | **MobX**           | Reactive      | 7,727,631   | ±0.46%  |
| 📍   | **Valtio**         | Proxy-based   | 6,140,662   | ±0.41%  |
| 📍   | **Jotai**          | Atomic        | 2,082,450   | ±0.58%  |
| 📍   | **Redux Toolkit**  | Flux          | 669,973     | ±0.54%  |

### 📈 **Key Insights**

- **🚀 Signals are fastest** - Solid and Preact signals dominate performance
- **⚡ Atomic libraries excel** - Zustand significantly outperforms traditional approaches
- **🔄 Reactive vs Atomic** - MobX and Valtio provide good middle ground
- **🏛️ Redux Toolkit** - Provides structure at performance cost

## 🚀 Quick Start

```bash
# Clone and install dependencies
git clone https://github.com/sylphxltd/benchmark-state-management.git
cd benchmark-state-management
npm install

# Run complete benchmark suite
npm run benchmark

# View saved results
cat reports/benchmark-*.json
```

## 📊 **What Gets Benchmarked**

### Test Scenario
- **State Update Performance** - Single increment operation
- **Statistical Accuracy** - 1000ms runtime with proper sampling
- **Fair Comparison** - All libraries tested under identical conditions

### Metrics Measured
- **Operations per Second** - Primary performance metric
- **Margin of Error** - Statistical accuracy (±%)
- **Sample Count** - Number of test iterations

## 🔧 **Technical Details**

### **Benchmark Configuration**
```javascript
const bench = new Bench({
  time: 1000,    // 1 second per test
  iterations: 100, // Automatic sampling
});
```

### **Test Environment**
- **Runtime**: Node.js v25.0.0
- **Platform**: macOS (ARM64)
- **Benchmark Framework**: tinybench v2.9.0

### **Libraries Tested**
- **Solid Signals** - High-performance signals from SolidJS
- **Preact Signals** - Lightweight signal implementation
- **Zustand** - Atomic, minimalist state management
- **MobX** - Reactive state management
- **Valtio** - Proxy-based atomic state management
- **Jotai** - Atomic state management
- **Redux Toolkit** - Modern Redux implementation

## 📈 **Results & Reports**

- **Console Output** - Real-time results with rankings
- **JSON Reports** - Detailed data in `reports/` directory
- **Timestamped** - Each run generates unique report file
- **Machine-readable** - Easy integration with CI/CD

## 🧪 **Why This Approach?**

### **Industry Standards**
- Uses **tinybench** - trusted by major projects
- **Statistical accuracy** - proper sampling and margin of error
- **Transparent methodology** - all results verifiable

### **Real-World Relevance**
- Tests actual usage patterns
- Multiple libraries in identical conditions
- Statistical significance through proper sampling

### **Simplicity & Reliability**
- **Single file implementation** - 100 lines of code
- **No complexity overhead** - focuses on core functionality
- **Easy to understand** - clear methodology

## 🤝 **Contributing**

We welcome contributions for:

1. **Additional Libraries** - Add new state management solutions
2. **Test Scenarios** - Suggest real-world use cases
3. **Performance Analysis** - Help interpret results

### Adding a New Library

1. Install the library: `npm install library-name`
2. Add store initialization in `src/benchmark.ts`
3. Add benchmark: `bench.add('Library Name', () => { ... });`
4. Test locally before submitting PR

## 📄 **License**

MIT License - see LICENSE file for details

## 🙏 **Acknowledgments**

- **tinybench** - Professional benchmarking framework
- All **state management library authors** for their excellent work
- **JavaScript community** for advancing state management patterns

---

*This is an independent, open-source benchmark project. Results are provided for educational and decision-making purposes. Actual performance may vary based on use case, environment, and implementation details.*

**⭐ Star on GitHub if you find this helpful!**