import TrustBadge from "../TrustBadge";

export default function TrustBadgeExample() {
  return (
    <div className="flex flex-col gap-4 p-8 bg-gradient-to-br from-purple-900 to-indigo-900">
      <TrustBadge icon="shield" text="Secure Platform" delay={0} />
      <TrustBadge icon="lock" text="SSL Encrypted" delay={0.1} />
      <TrustBadge icon="check" text="Verified" delay={0.2} />
    </div>
  );
}
