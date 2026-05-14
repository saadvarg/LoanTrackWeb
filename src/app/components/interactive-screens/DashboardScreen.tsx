import { motion } from 'motion/react';
import { Crown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function DashboardScreen() {
  const [leads, setLeads] = useState(0);
  const [pipelineValue, setPipelineValue] = useState(0);
  const [avgLoan, setAvgLoan] = useState(0);
  const [conversion, setConversion] = useState(0);

  useEffect(() => {
    // Animate numbers counting up
    const timer1 = setTimeout(() => setLeads(2), 300);
    const timer2 = setInterval(() => {
      setPipelineValue(prev => {
        if (prev >= 380000) return 380000;
        return prev + 15000;
      });
    }, 30);
    const timer3 = setInterval(() => {
      setAvgLoan(prev => {
        if (prev >= 190000) return 190000;
        return prev + 8000;
      });
    }, 30);
    const timer4 = setTimeout(() => setConversion(0.0), 500);

    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="font-semibold">Dashboard</h1>
        <button className="text-sm text-blue-600">Logout</button>
      </div>

      <div className="p-4 space-y-4">
        {/* User Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-5 text-white relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"
          />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Good Afternoon 👋</span>
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <Crown className="w-3 h-3" />
                <span className="text-xs">Super Admin</span>
              </div>
            </div>
            <h2 className="text-2xl mb-1">Super Admin</h2>
            <p className="text-sm opacity-80">superadmin@test.com</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 rounded-2xl p-4 cursor-pointer"
          >
            <p className="text-xs text-gray-500 mb-1">Total Leads</p>
            <motion.p
              className="text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {leads}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 rounded-2xl p-4 cursor-pointer"
          >
            <p className="text-xs text-gray-500 mb-1">Pipeline Value</p>
            <motion.p className="text-2xl font-bold">
              MAD {pipelineValue.toLocaleString()},00
            </motion.p>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-1 text-green-600 mt-1"
            >
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs">+12% this week</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-orange-50 rounded-2xl p-4 cursor-pointer"
          >
            <p className="text-xs text-gray-500 mb-1">Avg Loan</p>
            <motion.p className="text-2xl font-bold">
              MAD {avgLoan.toLocaleString()},00
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-50 rounded-2xl p-4 cursor-pointer"
          >
            <p className="text-xs text-gray-500 mb-1">Conversion</p>
            <motion.p className="text-3xl font-bold">
              {conversion}%
            </motion.p>
          </motion.div>
        </div>

        {/* Top Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="font-semibold mb-3">Top Priorities</h3>

          <motion.div
            whileHover={{ x: 5 }}
            className="bg-white rounded-xl p-4 mb-3 border border-gray-100 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium">Test 1 Lead</h4>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Low Risk
              </span>
            </div>
            <p className="text-xs text-gray-500">Low Risk • MAD 300,000,00 opportunity</p>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            className="bg-white rounded-xl p-4 border border-gray-100 cursor-pointer"
          >
            <h4 className="font-medium mb-2">Test EL</h4>
            <p className="text-xs text-gray-500">Needs scoring to unlock AI prioritization</p>
          </motion.div>
        </motion.div>

        {/* Pipeline Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="font-semibold mb-3">Pipeline Health</h3>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Closed Value</span>
              <span className="font-semibold">MAD 0,00</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
