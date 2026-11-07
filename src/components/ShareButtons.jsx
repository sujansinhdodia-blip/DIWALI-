import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaLink, FaCheck } from 'react-icons/fa';
import config from '../config';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);
  
  // Use current window location if available, otherwise config.siteUrl
  const currentUrl = typeof window !== 'undefined' && window.location.origin && !window.location.origin.includes('localhost') 
    ? window.location.href 
    : (config.siteUrl || (typeof window !== 'undefined' ? window.location.href : ''));

  const shareText = encodeURIComponent(config.shareMessage);
  const shareUrl = encodeURIComponent(currentUrl);

  const copyLink = useCallback((e) => {
    e.stopPropagation();
    const urlToCopy = typeof window !== 'undefined' ? window.location.href : config.siteUrl;
    navigator.clipboard.writeText(urlToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const buttons = [
    {
      label: 'WhatsApp',
      icon: <FaWhatsapp size={22} />,
      color: 'from-emerald-500 to-green-600',
      href: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
    },
    {
      label: 'Instagram',
      icon: <FaInstagram size={22} />,
      color: 'from-pink-500 via-purple-500 to-amber-500',
      href: `https://www.instagram.com/`,
    },
  ];

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <motion.div
        className="glass max-w-md w-full p-8 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl text-shimmer mb-3">
          Share the Joy
        </h2>
        <p className="text-amber-100/70 mb-6 text-sm">
          Spread the festive spirit with your loved ones 💛
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center" onClick={(e) => e.stopPropagation()}>
          {buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                bg-gradient-to-r ${btn.color} text-white font-medium
                shadow-lg hover:scale-105 active:scale-95 transition-all duration-300`}
            >
              {btn.icon}
              {btn.label}
            </a>
          ))}

          <button
            onClick={copyLink}
            className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl
              font-medium shadow-lg hover:scale-105 active:scale-95 transition-all duration-300
              ${copied
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white'
              }`}
          >
            {copied ? <FaCheck size={18} /> : <FaLink size={18} />}
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
