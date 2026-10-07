import { useState } from "react";
import { contact } from "../data/portfolioData";
import SectionShell from "./SectionShell";
import TiltCard from "./TiltCard";
import { Mail, Phone, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SectionShell
      id="contact"
      sheet="05"
      title="Get In Touch"
      subtitle="Open to internships, junior developer roles, hackathons, and web project collaborations."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Call to Action */}
        <div className="lg:col-span-5">
          <TiltCard className="p-8 border border-dark-800 bg-dark-900/60 backdrop-blur-xl h-full flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-violet-500/20 border border-neon-cyan/40 text-neon-cyan w-fit mb-6">
                <Send className="w-6 h-6" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Let's Build Something Together
              </h3>

              <p className="font-body text-sm text-paper-300 leading-relaxed mb-6">
                Whether you have a project idea, job opportunity, or just want to connect — feel free to drop me an email or reach out on LinkedIn!
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-dark-800 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="font-mono text-[10px] text-paper-400 block uppercase">PRIMARY EMAIL</span>
                <span className="font-mono text-xs text-white font-medium truncate block mt-0.5">
                  {contact.email}
                </span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="shrink-0 p-2.5 rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-neon-cyan transition-all hover:bg-neon-cyan hover:text-dark-950 flex items-center gap-1.5 font-mono text-xs cursor-pointer"
                aria-label="Copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Contact Channels Grid */}
        <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
          <ContactCard
            icon={<Mail className="w-5 h-5 text-neon-cyan" />}
            label="Direct Email"
            value={contact.email}
            href={`mailto:${contact.email}`}
          />

          <ContactCard
            icon={<Phone className="w-5 h-5 text-emerald-400" />}
            label="Phone"
            value={contact.phone}
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
          />

          <ContactCard
            icon={<LinkedInIcon className="w-5 h-5 text-blue-400" />}
            label="LinkedIn"
            value="vishwasini-bag"
            href={contact.linkedin}
            external
          />

          <ContactCard
            icon={<InstagramIcon className="w-5 h-5 text-pink-400" />}
            label="Instagram"
            value="@vishwasinibag"
            href={contact.instagram}
            external
          />
        </div>
      </div>
    </SectionShell>
  );
}

function ContactCard({ icon, label, value, href, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group"
    >
      <TiltCard className="p-6 border border-dark-800 bg-dark-900/60 backdrop-blur-xl h-full flex flex-col justify-between transition-all group-hover:border-neon-cyan/50">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-dark-950/80 border border-dark-800">
            {icon}
          </div>
          <ArrowUpRight className="w-4 h-4 text-paper-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neon-cyan" />
        </div>

        <div>
          <span className="font-mono text-[10px] text-paper-400 uppercase tracking-wider block">
            {label}
          </span>
          <span className="font-mono text-xs text-white font-medium block mt-1 truncate">
            {value}
          </span>
        </div>
      </TiltCard>
    </a>
  );
}
