import { motion } from 'motion/react';
import { ChevronLeft, Edit2, Save, Trash2 } from 'lucide-react';
import { useState } from 'react';

export function LeadDetailsScreen() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-1"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <button className="text-sm">Score</button>
          <button className="text-sm text-blue-600" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-teal-500 rounded-full"
          >
            <Save className="w-4 h-4 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm"
          >
            Delete
          </motion.button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
        >
          Lead Details
        </motion.h1>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-sm text-gray-500 mb-3">Overview</h3>
          <motion.div
            whileHover={{ scale: isEditing ? 1.02 : 1 }}
            className="bg-white rounded-xl p-4 space-y-3"
          >
            {[
              { label: 'Name', value: 'Test 1 Lead' },
              { label: 'Email', value: 'saad@test.com' },
              { label: 'Phone', value: '+212762178594' },
              { label: 'Status', value: 'Qualified', highlight: true }
            ].map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`${isEditing ? 'border-b border-gray-100 pb-2' : ''}`}
              >
                <p className="text-xs text-gray-500">{field.label}</p>
                <p className={`text-sm ${field.highlight ? 'font-semibold text-green-600' : ''}`}>
                  {field.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Financials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm text-gray-500 mb-3">Financials</h3>
          <motion.div
            whileHover={{ scale: isEditing ? 1.02 : 1 }}
            className="bg-white rounded-xl p-4 space-y-3"
          >
            {[
              { label: 'Loan Amount', value: 'MAD 300,000,00', color: 'text-blue-600' },
              { label: 'Income', value: 'MAD 5,000,00', color: 'text-green-600' },
              { label: 'Debt', value: 'MAD 2,00', color: 'text-orange-600' },
              { label: 'Credit Score', value: '890', color: 'text-purple-600' },
              { label: 'Employment', value: 'Employed', color: 'text-teal-600' }
            ].map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="cursor-pointer"
              >
                <p className="text-xs text-gray-500">{field.label}</p>
                <motion.p
                  className={`text-sm font-semibold ${field.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {field.value}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Button */}
        {isEditing && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium"
          >
            Save Changes
          </motion.button>
        )}
      </div>
    </div>
  );
}
