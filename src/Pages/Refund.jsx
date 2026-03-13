import React from "react";

const Refund = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#28535B] py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Cancellation and Refund Policy
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Cancellation and Refund Policy
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-15 py-12">
        {/* Description */}
        <p className="text-[#042325] leading-relaxed text-justify font-medium text-[16px] mt-[80px] mb-4">
          At Growmore Immigration, we deeply value your time and are committed
          to delivering exceptional service. Our appointment cancellation policy
          is thoughtfully crafted to balance the needs of our clients while
          ensuring our operations run smoothly.
        </p>

        {/* Service Overview */}
        <div className="text-[#042325] leading-relaxed text-[16px] mb-6">
          <p className="font-semibold mb-2">Service Overview:</p>
          <p className="mb-2">
            Our Service includes a comprehensive profile assessment with the
            following:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Unlimited Consultation with Counsellor</li>
            <li>RMA Consultation X 1</li>
            <li>Consultation with Mr. Krunal Nayak X 1</li>
            <li>Full Document and Visa Eligibility Assessment</li>
          </ul>
        </div>

        {/* Urgent Consultation */}
        <div className="text-[#042325] leading-relaxed text-[16px] mb-6">
          <p className="font-semibold mb-2">Urgent Consultation:</p>
          <p className="mb-2">
            We offer urgent consultations with the following conditions:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li className="font-semibold">Urgent Consultation fee: $500</li>
            <li>
              Refunds will only be provided if the client is deemed ineligible
              for any Australian immigration-related process.
            </li>
            <li>
              If the client is eligible and chooses not to proceed with our
              services, no refund will be issued.
            </li>
            <li className="font-semibold">Consultation Fees:</li>
            <li>Consultation with Mr. Krunal Nayak: $250</li>
            <li>Consultation with RMA: $150</li>
          </ul>
        </div>

        {/* Appointment Policy */}
        <div className="text-[#042325] leading-relaxed text-[16px] mb-6">
          <p className="font-semibold mb-2">
            Appointment Cancellation and Rescheduling Policy:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Clients can reschedule their appointments up to two times without
              incurring additional fees, provided the requests are made more
              than 24 hours before the scheduled appointment.
            </li>
            <li>
              To cancel or reschedule an appointment, clients must notify us
              prior 24 hours via email at{" "}
              <span className="text-blue-600">info@growmore.one</span>
            </li>
            <li>
              Once a cancellation or rescheduling request has been received and
              processed, clients will receive a confirmation email.
            </li>
            <li>
              Rescheduling within 24 hours is not permitted, except under
              exceptional circumstances.
            </li>
            <li>
              Exceptions to the no-refund policy within 24 hours may be made for
              medical emergencies or other extenuating circumstances. These
              exceptions are at the sole discretion of Growmore Immigration, and
              the company’s decision is final.
            </li>
          </ul>
        </div>

        {/* Refund Policy */}
        <div className="text-[#042325] leading-relaxed text-[16px] mb-[80px]">
          <p className="font-semibold mb-2">Refund Policy:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              If the client is deemed ineligible to proceed, a 50% refund will
              be issued. If the client is eligible, they will continue with the
              process.
            </li>
            <li>
              Clients are eligible for a 50% refund if they submit a
              cancellation request at least 24 hours before the appointment.
            </li>
            <li>
              No refunds for cancellations made within 24 hours of the
              scheduled time will be provided.
            </li>
            <li>
              Refunds will be processed to the same account or card used for the
              original payment.
            </li>
            <li>The refund process may take up to 10 working days.</li>
            <li>
              For any further questions or assistance, please contact us at{" "}
              <span className="text-blue-600">info@growmore.one</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Refund;