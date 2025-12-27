import React from "react";

const NoRefundPolicy: React.FC = () => {
  return (
    <section className="bg-black text-gray-300 py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            No Refund, No Exchange Policy
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Please read this policy carefully before making any payment on
            rohitprashar.com or rohitprashar.in.
          </p>
        </div>

        {/* Policy Statement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Policy Overview
          </h2>
          <p className="leading-relaxed">
            We follow a strict <strong>No Refund, No Exchange</strong> policy.
            Once a payment is successfully completed, it cannot be cancelled,
            refunded, or exchanged under normal circumstances.
          </p>
        </div>

        {/* Payment Handling */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Payment Processing
          </h2>
          <p className="leading-relaxed">
            All financial transactions made on this website are processed
            through third-party payment gateway partners. Rohit Prashar does
            not store or process sensitive payment information and disclaims
            all liability for payment failures, technical errors, or gateway-
            related issues.
          </p>
        </div>

        {/* Payment Discrepancies */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Payment Discrepancies
          </h2>
          <p className="leading-relaxed">
            In cases where the payment amount is higher or lower than the
            intended service value, Rohit Prashar reserves the sole right to
            review and evaluate the transaction.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Any excess or shortfall in payment may result in modification,
              adjustment, or rejection of the service request.
            </li>
            <li>
              Users are responsible for ensuring accurate details before
              completing the payment.
            </li>
          </ul>
        </div>

        {/* Transaction Responsibility */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Transaction Responsibility
          </h2>
          <p className="leading-relaxed">
            Users must retain their Transaction ID, payment receipt, and any
            confirmation details provided by the payment gateway. These details
            are required for payment verification or status inquiries.
          </p>
        </div>

        {/* Outstanding Payments */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Outstanding or Delayed Payments
          </h2>
          <p className="leading-relaxed">
            Any pending or outstanding payment must be cleared within the
            specified timeline communicated by Rohit Prashar. Payments made
            after the applicable deadline may result in service denial.
          </p>
          <p className="leading-relaxed">
            In such cases, no refunds will be issued, and Rohit Prashar shall
            not be held responsible for non-consideration of the request.
          </p>
        </div>

        {/* Final Clause */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Final Decision Authority
          </h2>
          <p className="leading-relaxed">
            All decisions related to payments, service eligibility, and
            exceptions (if any) remain solely at the discretion of Rohit
            Prashar. Such decisions shall be final and binding.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Contact Information
          </h2>
          <p className="leading-relaxed">
            For any payment-related queries, please contact us at{" "}
            <span className="text-white font-medium">
              info@rohitprashar.in
            </span>.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-10 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            By proceeding with a payment on this website, you confirm that you
            have read, understood, and agreed to this No Refund, No Exchange
            Policy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default NoRefundPolicy;
