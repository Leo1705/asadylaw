'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Upload, X, FileImage } from 'lucide-react';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    transactionType: '',
    propertyAddress: '',
    purchasePrice: '',
    closingDate: '',
    mortgageLender: '',
    idFront: null as File | null,
    idBack: null as File | null,
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const totalSteps = 4;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'idFront' | 'idBack') => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setFormData({ ...formData, [field]: file });
    }
  };

  const removeFile = (field: 'idFront' | 'idBack') => {
    setFormData({ ...formData, [field]: null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      alert('Thank you! Your onboarding form has been submitted. We\'ll be in touch shortly.');
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6f1] pt-16 pb-28 md:pt-24 md:pb-36">
      <div className="max-w-2xl mx-auto px-6">
        <div className="mb-10">
          <a href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#c9a227] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-[#c9a227]/20 shadow-lg"
        >
          <div className="text-center mb-10">
            <div className="inline-block rounded-xl bg-[#1a1a1a]/95 px-6 py-4 mb-6">
              <Image
                src="/assets/logo.png"
                alt="Asady Law"
                width={140}
                height={56}
                className="mx-auto h-10 w-auto object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#0a0a0a] mb-2">Client Onboarding</h1>
            <p className="text-gray-600 text-sm">Step {step} of {totalSteps}</p>
            <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#c9a227] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="As it appears on your ID"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="(647) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Current Address *</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Street, City, Province, Postal Code"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Transaction Type *</label>
                  <select
                    required
                    value={formData.transactionType}
                    onChange={(e) => setFormData({ ...formData, transactionType: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                  >
                    <option value="">Select...</option>
                    <option value="purchase">Property Purchase</option>
                    <option value="sale">Property Sale</option>
                    <option value="refinance">Mortgage Refinance</option>
                    <option value="title-transfer">Title Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Property Address (if applicable)</label>
                  <input
                    type="text"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Property address"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Purchase/Sale Price (if applicable)</label>
                  <input
                    type="text"
                    value={formData.purchasePrice}
                    onChange={(e) => setFormData({ ...formData, purchasePrice: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="e.g. $500,000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Expected Closing Date</label>
                  <input
                    type="date"
                    value={formData.closingDate}
                    onChange={(e) => setFormData({ ...formData, closingDate: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Mortgage Lender (if applicable)</label>
                  <input
                    type="text"
                    value={formData.mortgageLender}
                    onChange={(e) => setFormData({ ...formData, mortgageLender: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Bank or lender name"
                  />
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-4">Upload Your ID</h3>
                <p className="text-gray-600 text-sm mb-6">
                  For virtual verification, please upload clear photos of both sides of your government-issued ID (driver&apos;s licence or passport).
                </p>

                <div>
                  <label className="block text-gray-700 text-sm mb-2">ID Front *</label>
                  {formData.idFront ? (
                    <div className="relative">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <FileImage className="w-10 h-10 text-[#c9a227]" />
                        <span className="text-[#0a0a0a] truncate flex-1">{formData.idFront.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile('idFront')}
                          className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#c9a227]/50 hover:bg-gray-50 transition-colors">
                      <Upload className="w-10 h-10 text-gray-400 mb-2" />
                      <span className="text-gray-600 text-sm">Click to upload ID front</span>
                      <span className="text-gray-400 text-xs mt-1">PNG, JPG up to 10MB</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'idFront')}
                      />
                    </label>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-2">ID Back *</label>
                  {formData.idBack ? (
                    <div className="relative">
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <FileImage className="w-10 h-10 text-[#c9a227]" />
                        <span className="text-[#0a0a0a] truncate flex-1">{formData.idBack.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile('idBack')}
                          className="p-2 hover:bg-gray-200 rounded-lg transition-colors text-gray-600"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#c9a227]/50 hover:bg-gray-50 transition-colors">
                      <Upload className="w-10 h-10 text-gray-400 mb-2" />
                      <span className="text-gray-600 text-sm">Click to upload ID back</span>
                      <span className="text-gray-400 text-xs mt-1">PNG, JPG up to 10MB</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, 'idBack')}
                      />
                    </label>
                  )}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Have you previously owned property in Ontario?</label>
                  <input
                    type="text"
                    value={formData.question1}
                    onChange={(e) => setFormData({ ...formData, question1: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Yes/No - details if applicable"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Are you a first-time homebuyer?</label>
                  <input
                    type="text"
                    value={formData.question2}
                    onChange={(e) => setFormData({ ...formData, question2: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Yes/No"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Will you require a power of attorney for this transaction?</label>
                  <input
                    type="text"
                    value={formData.question3}
                    onChange={(e) => setFormData({ ...formData, question3: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Yes/No - details if applicable"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Is the property being purchased for personal use or investment?</label>
                  <input
                    type="text"
                    value={formData.question4}
                    onChange={(e) => setFormData({ ...formData, question4: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227]"
                    placeholder="Personal/Investment"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm mb-2">Any other details we should know?</label>
                  <textarea
                    value={formData.question5}
                    onChange={(e) => setFormData({ ...formData, question5: e.target.value })}
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-[#0a0a0a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/50 focus:border-[#c9a227] resize-none"
                    placeholder="Additional information..."
                  />
                </div>
              </motion.div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 py-3 rounded-xl border border-gray-300 text-[#0a0a0a] hover:bg-gray-100 transition-colors font-medium"
                >
                  Back
                </button>
              ) : null}
              <button
                type="submit"
                className={`${step > 1 ? 'flex-1' : 'w-full'} py-3 rounded-xl bg-[#c9a227] text-white font-semibold hover:bg-[#a8860e] transition-colors`}
              >
                {step < totalSteps ? 'Continue' : 'Submit'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
