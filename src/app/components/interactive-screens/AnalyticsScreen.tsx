import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, Cell, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { useState, useEffect } from 'react';

const barData = [
  { name: 'New', value: 1, color: '#3b82f6' },
  { name: 'Contacted', value: 0, color: '#10b981' },
  { name: 'Qualified', value: 1, color: '#10b981' },
  { name: 'Closed', value: 0, color: '#6b7280' },
  { name: 'Lost', value: 0, color: '#ef4444' }
];

const pieData = [
  { name: 'New', value: 50, color: '#a855f7' },
  { name: 'Qualified', value: 50, color: '#e5e7eb' }
];

export function AnalyticsScreen() {
  const [animatedBarData, setAnimatedBarData] = useState(barData.map(d => ({ ...d, value: 0 })));
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Animate bars growing
    const timer = setTimeout(() => {
      setAnimatedBarData(barData);
      setShowStats(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <h1 className="font-semibold">Dashboard</h1>
        <button className="text-sm text-blue-600">Logout</button>
      </div>

      <div className="p-4 space-y-4">
        {/* Closed Leads Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-4 border border-gray-100 flex justify-between items-center"
        >
          <span className="text-sm text-gray-500">Closed Leads</span>
          <span className="font-bold text-2xl">0</span>
        </motion.div>

        {/* Lead Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold mb-3">Lead Status</h3>
          <div className="bg-white rounded-xl p-4 space-y-3">
            {[
              { label: 'New', value: 1, color: 'bg-blue-50 text-blue-600', badge: 'bg-blue-100' },
              { label: 'Contacted', value: 0, color: 'bg-orange-50 text-orange-600', badge: 'bg-orange-100' },
              { label: 'Qualified', value: 1, color: 'bg-green-50 text-green-600', badge: 'bg-green-100' },
              { label: 'Closed', value: 0, color: 'bg-cyan-50 text-cyan-600', badge: 'bg-cyan-100' },
              { label: 'Lost', value: 0, color: 'bg-red-50 text-red-600', badge: 'bg-red-100' }
            ].map((status, index) => (
              <motion.div
                key={status.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center justify-between cursor-pointer"
              >
                <span className="text-sm">{status.label}</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: showStats ? 1 : 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className={`${status.badge} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {status.value}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="font-semibold mb-3">Analytics</h3>

          {/* Bar Chart */}
          <div className="bg-white rounded-xl p-4 mb-3">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={animatedBarData}>
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {animatedBarData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="bg-white rounded-xl p-4"
          >
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                  animationDuration={1000}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500" />
                <span className="text-xs text-gray-600">New (50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300" />
                <span className="text-xs text-gray-600">Qualified (50%)</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
