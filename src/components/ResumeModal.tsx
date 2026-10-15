import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Award, ExternalLink, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
 
 
  const handlePrint = () => {
    const resume = document.getElementById("printable-cv");

    if (!resume) {
      alert("Resume content not found.");
      return;
    }

    const printWindow = window.open(
      "",
      "_blank",
      "width=900,height=700"
    );

    if (!printWindow) {
      alert("Please allow pop-ups to print your resume.");
      return;
    }

    // Clone the resume without copying computed inline styles.
    const clone = resume.cloneNode(true) as HTMLElement;

    // Copy the website's stylesheets so Tailwind classes still work.
    const stylesheets = Array.from(
      document.querySelectorAll<HTMLLinkElement>(
        'link[rel="stylesheet"]'
      )
    )
      .map(
        (link) =>
          `<link rel="stylesheet" href="${link.href}" />`
      )
      .join("");

    const inlineStyles = Array.from(
      document.querySelectorAll<HTMLStyleElement>("style")
    )
      .map((style) => style.outerHTML)
      .join("");

    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Arun Raj R - Resume</title>

          ${stylesheets}
          ${inlineStyles}

          <style>
            @page {
              size: A4 portrait;
              margin: 10mm;
            }

            html,
            body {
              margin: 0 !important;
              padding: 0 !important;
              width: auto !important;
              height: auto !important;
              min-height: 0 !important;
              overflow: visible !important;
              background: white !important;
              color: #111 !important;
            }

            body {
              display: block !important;
              font-family: Arial, sans-serif;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            #printable-cv {
              position: static !important;
              display: block !important;
              width: 100% !important;
              max-width: none !important;
              height: auto !important;
              min-height: 0 !important;
              max-height: none !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: visible !important;
              transform: none !important;
              border: 0 !important;
              border-radius: 0 !important;
              box-shadow: none !important;
              background: white !important;
              color: #111 !important;
              font-size: 10pt;
            }

            #printable-cv * {
              box-sizing: border-box;
              text-shadow: none !important;
            }

            #printable-cv h1,
            #printable-cv h2,
            #printable-cv h3 {
              break-after: avoid;
              page-break-after: avoid;
            }

            #printable-cv li {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            #printable-cv a {
              color: #111 !important;
              text-decoration: none !important;
            }

            #printable-cv .bg-slate-950 {
              background: white !important;
            }

            #printable-cv .text-white,
            #printable-cv .text-slate-200,
            #printable-cv .text-slate-300,
            #printable-cv .text-slate-400 {
              color: #222 !important;
            }

            @media print {
              #printable-cv {
                break-before: auto !important;
              }
            }
          </style>
        </head>
        <body>
          ${clone.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();

    printWindow.addEventListener(
      "load",
      () => {
        printWindow.focus();
        printWindow.print();
      },
      { once: true }
    );
  };


  const profile = PORTFOLIO_DATA.profile;
  const exp = PORTFOLIO_DATA.experience[0];

  return (
      <div id="resume-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md print:static print:block print:overflow-visible print:bg-white print:p-0">     
        <div id="resume-modal-panel" className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col print:static print:block print:w-full print:max-w-none print:max-h-none print:h-auto print:overflow-visible print:my-0 print:border-0 print:shadow-none print:bg-white">        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10 print:hidden">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <span>Official Resume Snapshot</span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-blue-400 font-mono">Arun Raj R</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div id="printable-cv" className="p-6 sm:p-10 bg-slate-950 text-slate-200 print:p-0 print:bg-white print:text-black">          {/* Header Block */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white font-display print:text-black">
                  {profile.fullName}
                </h1>
                <p className="text-base font-semibold text-blue-400 mt-1 print:text-blue-700">
                  {profile.title}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-xs text-slate-400 print:text-gray-800 sm:text-right">
                <span className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <span>{profile.phone}</span>
                </span>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <span>{profile.email}</span>
                </span>
                <span className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 print:text-black" />
                  <span>{profile.location}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Professional Synopsis */}
          <div className="py-5 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-black font-display mb-3">
              Professional Synopsis
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 print:text-gray-800 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span><strong>2+ years of experience as a Full Stack Developer / PHP Developer</strong> with hands-on experience in developing, maintaining, and enhancing web applications, backend systems, REST APIs, and mobile application backends, with end-to-end involvement from requirement understanding and development to deployment and production support.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Strong hands-on experience with <strong>CodeIgniter</strong>, including MVC architecture, frontend-to-backend integration, database connectivity, CRUD operations, server-side validation, API development, and end-to-end feature implementation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Experienced in implementing backend technical concepts including authentication and authorization, session management, API validation, exception handling, error handling, request/response processing, interceptors/middleware, input validation, security controls, and third-party API integrations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Worked in a product-based development environment on <strong>HRMS and CRM web applications</strong> and <strong>HRMS mobile application backends</strong>, contributing to product development, customization, maintenance, migration, deployment, REST API development, and production support for multiple client organizations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Hands-on experience with HRMS modules and business workflows, including <strong>Employee Onboarding, Employee Administration, Payroll, Time Office/Attendance, Leave Management</strong>, and related HR processes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Worked on HRMS migration and deployment activities, including client-specific configuration, data/process migration, application setup, issue resolution, testing, and production support across multiple implementations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Experienced in implementing and supporting <strong>complex payroll business logic and dynamic payroll processing</strong>, including rule-based calculations, configurable components, employee-specific processing, and workflow-driven payroll operations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Worked on <strong>Time Office/Attendance business logic</strong>, including attendance processing, working hours, shifts, overtime, leave/attendance integration, and related HRMS calculations and workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Implemented and supported application security and onboarding features such as <strong>reCAPTCHA, Two-Factor Authentication (2FA), Aadhaar-based employee onboarding, and DigiLocker integration</strong>, including API communication and validation workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Experienced in integrating and maintaining third-party APIs and authentication services, handling API responses, validation failures, exceptions, timeout/error scenarios, and secure request/response processing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span>Strong experience with <strong>Git/GitHub</strong> for source-code management, version control, branch management, code updates, and collaborative development workflows.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 print:text-black mt-0.5">•</span>
                <span><strong>Handled 10+ client implementations/projects</strong> across various organizations, including <strong>Deanta, UDS, Denave, National Travels, Collman, IMOP, Turbo, Radiance, ABI</strong>, involving requirement understanding, customization, deployment support, troubleshooting, and client coordination.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 print:text-black mt-0.5">•</span>
                <span className="text-amber-300 print:text-black font-semibold">Recognized with the "Discovery of the Year Award – 2024–2025" at CAFS Infotech for contributions and performance during the year.</span>
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className="py-5 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-black font-display mb-2.5">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>• PHP & CodeIgniter Development</div>
              <div>• Full Stack Web Application Development</div>
              <div>• REST API & Backend Development</div>
              <div>• MySQL & Database Management</div>
              <div>• HRMS & CRM Product Development</div>
              <div>• Mobile Application Backend Development</div>
              <div>• Authentication, Security & API Integration</div>
              <div>• Git/GitHub, Deployment & Production Support</div>
            </div>
          </div>

          {/* Projects */}
          <div className="py-5 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-black font-display mb-3">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              {/* Project 1 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                  <span>Smart HRMS – Mobile Application Backend & API Development</span>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.cafsinfotech.smarthrms&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-blue-400 print:text-blue-700 hover:underline inline-flex items-center gap-1 font-normal"
                  >
                    <span>Google Play Link</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <div className="text-[11px] text-slate-400 print:text-gray-600 font-mono mt-0.5">
                  Project Type: HRMS Mobile Application | Technology: PHP, CodeIgniter, MySQL, REST APIs
                </div>
                <p className="text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                  Developed and maintained backend APIs for mobile HRMS features, including employee check-in/check-out, attendance tracking, employee self-service, and attendance-related workflows. Implemented backend business logic, authentication, database integration, request validation, and error handling to support mobile application functionality and seamless communication with the HRMS system.
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-white print:text-black">
                  <span>Collman HRMS – Mobile Application Backend & API Development</span>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.cafsinfotech.collman&hl=en_IN"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-blue-400 print:text-blue-700 hover:underline inline-flex items-center gap-1 font-normal"
                  >
                    <span>Google Play Link</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <div className="text-[11px] text-slate-400 print:text-gray-600 font-mono mt-0.5">
                  Project Type: HRMS Mobile Application | Technology: PHP, CodeIgniter, MySQL, REST APIs
                </div>
                <p className="text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                  Developed and maintained REST APIs supporting mobile HRMS operations, including employee attendance, check-in/check-out, employee information, and attendance management workflows. Implemented backend processing, database operations, API validation, authentication, and error handling to ensure reliable data synchronization between the mobile application and the HRMS platform.
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <div className="font-bold text-white print:text-black">
                  CRM – Web Application Development
                </div>
                <div className="text-[11px] text-slate-400 print:text-gray-600 font-mono mt-0.5">
                  Client: National Travels | Technology: PHP, CodeIgniter, MySQL, JavaScript
                </div>
                <p className="text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                  Developed and maintained CRM web application modules covering customer management, travel booking, booking lifecycle tracking, and operational workflows. Implemented dynamic business logic and database-driven workflows connecting customer bookings, travel operations, and account management to support end-to-end business processes.
                </p>
              </div>

              {/* Project 4 */}
              <div>
                <div className="font-bold text-white print:text-black">
                  Smart HRMS – Web Application Development & Product Customization
                </div>
                <div className="text-[11px] text-slate-400 print:text-gray-600 font-mono mt-0.5">
                  Versions: 7.2, 8.3 & 8.5 | Clients: Radiance, Pothys, Deanta, UDS, National Travels, Turbo, ABI, RTE, and other organizations
                </div>
                <div className="text-[11px] text-slate-400 print:text-gray-600 font-mono mt-0.5">
                  Technology: PHP, CodeIgniter, MySQL, JavaScript, REST APIs
                </div>
                <p className="text-slate-300 print:text-gray-800 mt-1 leading-relaxed">
                  Worked on the development, enhancement, maintenance, and customization of multiple versions of the Smart HRMS product, supporting client-specific requirements across Time Office, Employee Onboarding, Payroll, Employee Administration, Attendance, and Leave Management modules. Implemented dynamic payroll processing, configurable business rules, attendance and time office workflows, dashboard analytics, and graphical reports. Supported HRMS migration, version upgrades, client implementations, deployment, troubleshooting, and production issue resolution.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-5 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-black font-display mb-2">
              Education
            </h2>
            <div className="flex justify-between items-start text-xs">
              <div>
                <span className="font-bold text-white print:text-black">Bachelor of Computer Applications (BCA)</span>
                <p className="text-slate-400 print:text-gray-700">Annai College Of Arts & Science, Kumbakonam</p>
              </div>
              <span className="font-mono text-slate-400 print:text-gray-600">2021 July – 2024 May</span>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="py-5 border-b border-slate-800 print:border-black">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-black font-display mb-2">
              Awards & Recognition
            </h2>
            <div className="text-xs">
              <span className="font-bold text-white print:text-black">Discovery of the Year Award – 2024–2025</span>
              <p className="text-slate-400 print:text-gray-700 mt-0.5">
                CAFS Infotech, in recognition of contributions and performance during the year.
              </p>
            </div>
          </div>

          {/* Declaration */}
          <div className="pt-5 text-xs text-slate-400 print:text-gray-700">
            <p className="italic">
              I hereby declare that the information given above is true to the best of my knowledge.
            </p>
            <div className="mt-4 flex justify-between items-center text-xs font-medium text-slate-300 print:text-black">
              <span>Place: Chennai</span>
              <span className="font-bold font-display text-sm">{profile.fullName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
