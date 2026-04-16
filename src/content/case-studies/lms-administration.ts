import { CaseStudy } from "./types";

export const lmsAdministration: CaseStudy = {
  slug: "enterprise-lms-administration",
  title: "Enterprise LMS Administration for 2,000+ Users",
  category: "Learning Operations",
  description:
    "Managing and optimizing an enterprise Learning Management System serving 2,000+ active users in a healthcare education environment.",
  heroMetric: {
    value: "2,000+",
    label: "Active Users Managed",
  },
  challenge:
    "Ameritech College's LMS was the backbone of their educational delivery, serving over 2,000 active students and faculty in healthcare programs. The system needed reliable administration \u2014 user provisioning, course management, reporting, and troubleshooting \u2014 but the existing processes were manual, reactive, and time-consuming. Instructors couldn't get the data they needed, and student onboarding was a friction point.",
  approach:
    "I audited the entire LMS ecosystem: how users were provisioned, how courses were organized, what reports were being generated (and which ones should be), and where the most time was being lost. The goal wasn't to replace the platform but to optimize how it was operated. I focused on three areas: streamlining administration, improving the data pipeline, and reducing friction in the user experience.",
  solution:
    "I redesigned administrative workflows to reduce manual intervention, built standardized reporting dashboards that gave instructors and leadership the data they needed without custom requests, and streamlined the user onboarding process. I also established documentation and procedures that made LMS administration reproducible and less dependent on institutional knowledge.",
  results: {
    metrics: [
      { value: "50%+", label: "Reduction in Manual Admin Time" },
      { value: "5+", label: "Hours Saved Weekly on Reporting" },
      { value: "5\u21922", label: "Days for User Onboarding" },
    ],
    narrative:
      "Transformed LMS operations from reactive, manual administration to a systematized, documentation-driven operation serving 2,000+ active users. Built standardized reporting dashboards that replaced ad-hoc data pulls, enabling leadership to make faster, data-informed decisions about program performance. Created onboarding workflows and operational documentation that ensured continuity beyond any single administrator \u2014 a system designed to outlast the person who built it.",
  },
  reflection:
    "LMS administration is the operational backbone of learning technology that most designers never see. Understanding this layer \u2014 how systems are provisioned, maintained, and optimized \u2014 gave me a perspective that shapes how I approach learning architecture. The best-designed course is worthless if the system delivering it is unreliable.",
  publishedAt: "2024-09-01",
};
