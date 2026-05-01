import type { Metadata } from "next";
import Button from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers - Modern SaaS",
  description: "Join our team and help shape the future of work. Explore open positions.",
};

const positions = [
  {
    department: "Engineering",
    roles: [
      {
        title: "Senior Frontend Engineer",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Backend Engineer",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "DevOps Engineer",
        location: "Remote",
        type: "Full-time",
      },
    ],
  },
  {
    department: "Product",
    roles: [
      {
        title: "Product Manager",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "UX Designer",
        location: "Remote",
        type: "Full-time",
      },
    ],
  },
  {
    department: "Marketing",
    roles: [
      {
        title: "Growth Marketing Manager",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Content Writer",
        location: "Remote",
        type: "Part-time",
      },
    ],
  },
  {
    department: "Sales",
    roles: [
      {
        title: "Account Executive",
        location: "Remote",
        type: "Full-time",
      },
      {
        title: "Customer Success Manager",
        location: "Remote",
        type: "Full-time",
      },
    ],
  },
];

const benefits = [
  {
    title: "Competitive Salary",
    description: "Market-leading pay with equity potential",
  },
  {
    title: "Remote First",
    description: "Work from anywhere in the world",
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical, dental, vision",
  },
  {
    title: "Unlimited PTO",
    description: "Take time when you need it",
  },
  {
    title: "Learning Budget",
    description: "$2000/year for courses and books",
  },
  {
    title: "Home Office",
    description: "$1000 setup budget for your workspace",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Join our team
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Help us shape the future of work. We are looking for passionate people to join our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-8"
              >
                <h2 className="text-xl font-semibold text-slate-900 mb-6">
                  {dept.department}
                </h2>
                <div className="space-y-4">
                  {dept.roles.map((role, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                      <div>
                        <h3 className="font-medium text-slate-900">{role.title}</h3>
                        <p className="text-slate-600 text-sm">{role.location} · {role.type}</p>
                      </div>
                      <Button variant="outline" size="sm">Apply</Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why join us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer competitive benefits and a great culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Do not see the right role?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            We are always looking for talented people. Send us your resume and we will reach out when something comes up.
          </p>
          <Button variant="secondary" size="lg">Apply Now</Button>
        </div>
      </section>
    </>
  );
}