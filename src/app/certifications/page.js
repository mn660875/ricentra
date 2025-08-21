"use client";

import { FaCheckCircle, FaHourglassHalf, FaFileAlt } from "react-icons/fa";
import Navbar from "../_components/Navbar";

const certifications = [
  {
    title: "ISO 22000:2018",
    status: "Verified",
    description:
      "This international certification guarantees that our packaging, storage, and distribution process follows the strictest food safety practices.",
  },
  {
    title: "Halal Certification",
    status: "Verified",
    description:
      "Ricely’s rice is certified Halal, ensuring it meets Islamic dietary guidelines for our Muslim customers in the Middle East and beyond.",
  },
  {
    title: "SABER Registration",
    status: "Verified",
    description:
      "Our products are SABER-registered for export into Saudi Arabia, meeting all required safety and compliance standards.",
  },
  {
    title: "SFDA Compliance",
    status: "In Progress",
    description:
      "We are working toward full SFDA compliance to ensure a smooth import process into Saudi Arabia.",
  },
  {
    title: "REAP Membership",
    status: "Verified",
    description:
      "As a member of the Rice Exporters Association of Pakistan (REAP), we stay connected with international quality standards and global buyers.",
  },
  {
    title: "Sahiwal Chamber of Commerce & Industry",
    status: "Verified",
    description:
      "We are officially registered with the Chamber of Commerce, Sahiwal — recognized as a verified business entity in the region.",
  },
  {
    title: "Security Exchange Commission Pakistan(SECP)",
    status: "Verified",
    description:
      "We are officially registered with the Security Exchange Commission Pakistan(SECP) — recognized as a verified business entity in the region.",
  },
  {
    title: "Trade Development Authority of Pakistan (TDAP)",
    status: "Verified",
    description:
      "We are officially registered with the Security Exchange Commission Pakistan(SECP) — recognized as a verified business entity in the region.",
  },
  {
    title: "WEBOC Registration",
    status: "Verified",
    description:
      "We are officially registered with the WEBOC — recognized as a verified business entity in the region.",
  },
];

export default function Page() {
  return (
    <>
    <Navbar/>
    
    <section  className="w-full px-5 md:px-16 py-5" >
    <h1 className="headings text-2xl md:text-4xl font-bold tracking-tight">
          Our Certifications{" "}
        </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="light:bg-white shadow-lg rounded-xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-semibold text-dark">{cert.title}</h3>
              {cert.status === "Verified" ? (
                <FaCheckCircle className="text-green-600" title="Verified" />
              ) : (
                <FaHourglassHalf className="text-yellow-500" title="In Progress" />
              )}
            </div>
            <p className="text-sm text-textBase">{cert.description}</p>
            {cert.status !== "Verified" && (
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
                <FaHourglassHalf className="text-yellow-500" />
                {cert.status}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
