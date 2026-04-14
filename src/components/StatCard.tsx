interface StatCardProps {
  icon: string;
  title: string;
  stat: string;
  unit?: string;
  description: string;
  isLast?: boolean;
}

export const StatCard = ({ icon, title, stat, unit, description, isLast }: StatCardProps) => {
  return (
    <div
      className={`flex-1 flex flex-col items-center pt-6 px-4 pb-8 text-center min-w-[200px]
        ${!isLast ? 'border-b md:border-b-0 md:border-r border-[#4a4b4f] dark:border-[#4a4b4f]' : ''}`}
    >
      <img className="w-12 h-12 min-w-[48px] min-h-[48px] mb-3 brightness-0 invert" src={icon} alt={title} decoding="async" loading="lazy" />

      <div className="h-14 flex items-center justify-center mb-2">
        <h3 className="font-['Avenir-Heavy'] text-[#efefef] text-lg md:text-xl leading-tight whitespace-pre-line">
          {title}
        </h3>
      </div>

      <div className="flex items-baseline justify-center gap-1 mb-4 h-16">
        <span className="text-[#dbdbdb] text-4xl md:text-5xl font-['Avenir-Heavy'] [text-shadow:0px_4px_30px_rgba(219,219,219,0.3)]">
          {stat}
        </span>
        {unit && (
          <span className="text-[#efefef]/70 text-xs mt-4">{unit}</span>
        )}
      </div>

      <p className="font-['Avenir-Heavy'] text-[#efefef]/80 text-xs leading-relaxed max-w-[180px]">
        {description}
      </p>
    </div>
  );
};
