export default function Card1({ icon, title, description, hoverShadow }) {
  return (
    <div
      className={`flex-1 bg-brand-background rounded-2xl relative min-w-[260px] max-w-sm flex flex-col items-center border border-brand-line transition-transform duration-200 hover:-translate-y-2 ${hoverShadow}`}
    >
      <div className="absolute border border-[rgba(224,224,224,0.01)] inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-col items-center gap-8 px-6 py-12 w-full">
        {icon}
        <div className="flex flex-col gap-4 items-center text-center w-full">
          <h4 className="text-h4 text-white font-bold">{title}</h4>
          <p className="text-p-ui text-brand-text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
} 