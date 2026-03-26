import { createSignal, onCleanup, onMount } from "solid-js";
import { formatDistanceToNow, differenceInYears, differenceInMonths, differenceInDays, differenceInMinutes, subYears, subMonths, subDays } from "date-fns";

export interface CountdownTimerProps {
  targetDate: Date;
  title: string;
}

export default function CountdownTimer(props: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = createSignal({
    years: 0,
    months: 0,
    days: 0,
    minutes: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    let target = props.targetDate;

    if (now > target) return { years: 0, months: 0, days: 0, minutes: 0 };

    const years = differenceInYears(target, now);
    target = subYears(target, years);

    const months = differenceInMonths(target, now);
    target = subMonths(target, months);

    const days = differenceInDays(target, now);
    target = subDays(target, days);

    const minutes = differenceInMinutes(target, now);

    return { years, months, days, minutes };
  };

  onMount(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    onCleanup(() => clearInterval(timer));
  });

  return (
    <div class="w-full bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900 text-white overflow-hidden relative shadow-2xl border-b border-white/10">
      <div class="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div class="container mx-auto py-2 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 relative z-10">
        <div class="flex items-center gap-3">
          <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span class="text-xs font-black uppercase tracking-[0.2em]">{props.title}</span>
        </div>

        <div class="flex items-center gap-8 md:gap-16">
          <div class="flex flex-col items-center">
            <span class="text-2xl font-black">{timeLeft().years}</span>
            <span class="text-[8px] uppercase tracking-widest font-bold opacity-50">Years</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-2xl font-black">{timeLeft().months}</span>
            <span class="text-[8px] uppercase tracking-widest font-bold opacity-50">Months</span>
          </div>
          <div class="flex flex-col items-center text-blue-400">
            <span class="text-2xl font-black">{timeLeft().days}</span>
            <span class="text-[8px] uppercase tracking-widest font-bold opacity-50">Days</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-2xl font-black">{timeLeft().minutes}</span>
            <span class="text-[8px] uppercase tracking-widest font-bold opacity-50">Minutes</span>
          </div>
        </div>

        <div class="hidden lg:flex items-center gap-4">
           <button class="bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-[10px] font-bold border border-white/10 transition-colors uppercase tracking-widest">
              Follow Issue
           </button>
        </div>
      </div>
    </div>
  );
}
