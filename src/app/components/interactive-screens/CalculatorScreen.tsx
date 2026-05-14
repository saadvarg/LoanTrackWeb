import { motion } from 'motion/react';
import { Calculator as CalcIcon } from 'lucide-react';
import { useState } from 'react';

export function CalculatorScreen() {
  const [amount, setAmount] = useState('60000');
  const [rate, setRate] = useState('20');
  const [term, setTerm] = useState('30');
  const [result, setResult] = useState({
    monthly: 1002.61,
    principal: 60000,
    rate: 20,
    years: 30
  });

  const handleCalculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;
    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setResult({
      monthly: monthly,
      principal: p,
      rate: parseFloat(rate),
      years: parseFloat(term)
    });
  };

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="font-semibold">Calculator</h1>
      </div>

      <div className="p-4 space-y-4">
        {/* Loan Details Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-sm text-gray-500 mb-3">Loan Details</h3>
          <div className="bg-white rounded-xl p-4 space-y-4">
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full text-lg font-medium outline-none border-b border-gray-200 pb-2"
                placeholder="Loan Amount"
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full text-lg font-medium outline-none border-b border-gray-200 pb-2"
                placeholder="Interest Rate %"
              />
            </motion.div>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <input
                type="number"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="w-full text-lg font-medium outline-none border-b border-gray-200 pb-2"
                placeholder="Term (years)"
              />
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCalculate}
            className="w-full mt-3 bg-white text-blue-600 py-3 rounded-xl font-medium border border-gray-200"
          >
            Calculate
          </motion.button>
        </motion.div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-sm text-gray-500 mb-3">Result</h3>
          <motion.div
            className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white"
            whileHover={{ scale: 1.02 }}
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm opacity-80 mb-1">Monthly Payment</p>
                <motion.p
                  className="text-3xl font-bold"
                  key={result.monthly}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                >
                  MAD {result.monthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </motion.p>
              </motion.div>

              <div className="h-px bg-white/20" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <p className="text-xs opacity-80 mb-1">Principal</p>
                  <p className="text-sm font-semibold">
                    MAD {result.principal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div>
                  <p className="text-xs opacity-80 mb-1">Rate</p>
                  <p className="text-sm font-semibold">{result.rate.toFixed(2)}%</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs opacity-80 mb-1">Term</p>
                <p className="text-sm font-semibold">{result.years} years</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scenario Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-sm text-gray-500 mb-3">Scenario</h3>
          <div className="bg-white rounded-xl p-4">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <CalcIcon className="w-5 h-5" />
              <p className="text-sm">Create payment scenarios</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
