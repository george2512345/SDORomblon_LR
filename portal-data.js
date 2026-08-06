/**
 * LRMS Portal — SDO Romblon
 * Data mirrors the live portal at:
 * https://sites.google.com/deped.gov.ph/lrms-portal-sdo-romblon/lrms-portal
 *
 * Category links point at the corresponding page on the live Google Sites
 * portal (the underlying files/folders live in Drive, not on this static
 * site). Swap in direct resource links once you host the files yourself.
 *
 * "color" cycles through the accent palette defined in styles.css
 * (sunshine / coral / sea / grass / sky) to keep the card grid colorful.
 */

const BASE = "https://sites.google.com/deped.gov.ph/lrms-portal-sdo-romblon/lrms-portal";

const CATEGORIES = [
  { name: "GTA", url: `${BASE}/gta`, note: "General Teaching Aids", icon: "📘", color: "sky" },
  { name: "SP Card Download", url: `${BASE}/sp-card-download`, note: "Supplementary print materials", icon: "🖨️", color: "coral" },
  { name: "2026 ARAL Summer Materials", url: `${BASE}/2026-aral-summer-materials`, note: "Summer remediation resources", icon: "☀️", color: "sunshine" },
  { name: "SHS Remediation Program", url: `${BASE}/shs-remediation-program`, note: "Senior High School", icon: "🎓", color: "sea" },
  { name: "Aral Reading Resources — 2025", url: `${BASE}/aral-reading-resources-2025`, note: "Reading program materials", icon: "📖", color: "grass" },
  { name: "Division Initiated SLMS", url: `${BASE}/division-initiated-slms`, note: "Self-Learning Modules, division-made", icon: "🗂️", color: "sky" },
  { name: "MATATAG K–10", url: `${BASE}/matatag-k-10`, note: "MATATAG curriculum resources", icon: "🧩", color: "coral" },
  { name: "Regional Office — Initiated LR", url: `${BASE}/regional-office-initiated-learning-resources`, note: "Region IV-B materials", icon: "🌏", color: "sunshine" },
  { name: "Central Office — Initiated LR", url: `${BASE}/central-office-initiated-learning-resources`, note: "DepEd Central Office materials", icon: "🏛️", color: "sea" },
  { name: "Romblon East — Library Hub", url: `${BASE}/romblon-east-library-hub`, note: "Supplementary learning resources", icon: "📚", color: "grass" },
  { name: "DepEd LMS", url: `${BASE}/deped-lms`, note: "Learning Management System", icon: "💻", color: "sky" },
  { name: "LR Finder", url: `${BASE}/lr-finder`, note: "Search tool for learning resources", icon: "🔍", color: "coral" },
  { name: "ALS", url: `${BASE}/als`, note: "Alternative Learning System", icon: "🌱", color: "sunshine" },
  { name: "DRRM", url: `${BASE}/drrm`, note: "Disaster Risk Reduction & Management", icon: "⛑️", color: "sea" },
  { name: "Educational Games", url: `${BASE}/educational-games`, note: "Gamified learning tools", icon: "🎮", color: "grass" },
  { name: "BLR Reading Treasury", url: `${BASE}/blr-reading-treasury-gawad-teodora-alonso-story-books`, note: "Gawad Teodora Alonso story books", icon: "📗", color: "sky" },
  { name: "Open Education Resources", url: `${BASE}/open-education-resources`, note: "Open-licensed materials", icon: "🌐", color: "coral" },
  { name: "About Us", url: `${BASE}/about-us`, note: "About the LRMS Team", icon: "ℹ️", color: "sunshine" },
];

const QUICK_LINKS = [
  { name: "Client Satisfaction Measurement (CSM)", url: "https://forms.gle/AvKCysuUWoDpXDuW7", icon: "📝" },
  { name: "Guide to Learning System Updates", url: "https://sites.google.com/deped.gov.ph/lsguide/", icon: "📋" },
  { name: "SSHS Learning Resource", url: "https://depedph-my.sharepoint.com/:f:/g/personal/georgejohn_palomata_deped_gov_ph/IgDmMImzeW-MRrEiH02ufdSlAWd-Ku2zu-owuoPtcvuJY7s", icon: "📁" },
  { name: "RTP & Pilot Implementation — 2026 (Grades 6, 9, 10)", url: "https://drive.google.com/drive/u/0/folders/1jSDo1ZzCPrDyJVg5RqhuSxxeP7SmWT8x", icon: "🚀" },
  { name: "RMA", url: "https://drive.google.com/drive/u/2/folders/1XsnBR1JFbJxWxZiv0I_MUXP02eN9wHVG", icon: "📊" },
  { name: "Phil-IRI", url: "https://drive.google.com/drive/u/2/folders/1RRFnMG96fsOYsz_EX6rG8U8yapJNNFoz", icon: "📈" },
  { name: "CRLA3", url: "https://drive.google.com/drive/u/2/folders/1bZO5SAFce3Te-oKA3ZxfPejtlqa7SCO4", icon: "🗒️" },
];

const EXTERNAL_SYSTEMS = [
  { name: "DepEd TV", note: "Official DepEd learning channel", url: "https://www.youtube.com/@DepEdTV", icon: "📺" },
  { name: "MATATAG Portal", note: "Region IV-B MATATAG LMS", url: "http://20.197.89.107/index", icon: "🧩" },
  { name: "LRMIS", note: "Learning Resource Management Information System", url: "http://20.197.89.107/index", icon: "🗄️" },
  { name: "DepEd LR Portal", note: "National repository, lrmds.deped.gov.ph", url: "https://lrmds.deped.gov.ph", icon: "🔗" },
  { name: "Regional Centralized LR Repository", note: "MIMAROPA Region IV-B", url: "https://lrms.depedmimaroparegion.ph/roLR.php", icon: "🗺️" },
  { name: "Division Repository of LR", note: "Division, Region, and Central Office-initiated SLMs", url: "https://sites.google.com/deped.gov.ph/lrromblonportal/learning-resources", icon: "🏝️" },
];

const STAFF = [
  { name: "Lulu M. Lo", role: "Education Program Supervisor / LR Manager", email: "lulu.lo001@deped.gov.ph" },
  { name: "Leona Lynn F. Famorcan", role: "Librarian II", email: "leonalynn.famorcan002@deped.gov.ph" },
  { name: "George John A. Palomata", role: "PDO II", email: "georgejohn.palomata@deped.gov.ph" },
];

const PASSWORD_RESET_URL = "https://forms.gle/dyTNd9QY9Mp9FWD19";
