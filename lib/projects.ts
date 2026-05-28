export const projects = {
  'da-lmp-forecast-bot': {
    num: '01',
    title: 'DA-LMP Forecast Bot',
    tags: ['Finance', 'Forecasting', 'Telegram', 'Live in Production'],
    stack: [
      'Python',
      'Claude AI (Anthropic)',
      'Gemini API',
      'Vercel Cron Jobs',
      'Supabase',
      'Telegram Bot API',
      'PJM Market Data',
      'Henry Hub Gas Prices',
    ],
    sections: [
      {
        heading: null,
        body: "The DA-LMP Forecast Bot is a live, production-grade system built for a professional energy and commodities trader. Every day, it pulls real market signals, runs AI inference, and delivers a structured price forecast directly to the client's Telegram.",
      },
      {
        heading: 'The problem',
        body: 'Day-ahead electricity prices in PJM markets are highly sensitive to natural gas prices, weather, and load patterns. Manually monitoring these signals every morning before the market clears is time-consuming and error-prone. The client needed an automated system that surfaced the right signals at the right time, reliably, every day.',
      },
      {
        heading: 'How it works',
        body: "The bot runs on a Vercel cron job that fires every morning. It ingests PJM Western Hub spot data and Henry Hub natural gas prices as primary signals, feeds them into a dual-model AI pipeline (Claude for reasoning, Gemini for cross-validation), and produces a structured forecast with bias corrections derived from historical accuracy tracking. A two-layer idempotency guard ensures the forecast sends exactly once per day, even under Vercel's retry behavior. Full forecast history is stored in Supabase.",
      },
      {
        heading: 'Outcome',
        body: 'Running in production since early 2026 on a $250/month retainer. Delivers daily with no manual intervention. The client uses it as a morning briefing before making trading decisions.',
      },
    ],
  },
  grip: {
    num: '02',
    title: 'Grip',
    tags: ['Finance', 'Automation', 'Telegram'],
    stack: [
      'Python',
      'Claude AI (Anthropic)',
      'Supabase',
      'Telegram Bot API',
      'Railway (24/7 hosting)',
      'Natural Language Processing',
    ],
    sections: [
      {
        heading: null,
        body: 'Grip is a personal finance Telegram bot built to remove friction from tracking money. Instead of opening an app or filling a spreadsheet, you just message it like a person.',
      },
      {
        heading: 'The problem',
        body: 'Most finance trackers require deliberate data entry: categories, amounts, dates. That friction means people stop using them within days. Grip was built around the idea that logging should feel like texting.',
      },
      {
        heading: 'How it works',
        body: 'Grip uses Claude AI to parse natural language transaction logs. Messages like "Jason paid me $250 for the bot this week" get automatically classified, attributed to the right business and client, and stored in Supabase. The bot tracks income across multiple revenue streams and clients simultaneously.',
      },
      {
        heading: 'Features',
        body: 'Natural-language transaction logging · Multi-business income tracking · Client attribution · Full history in Supabase. Runs 24/7 on Railway, always listening, no commands to remember.',
      },
    ],
  },
}

export type ProjectSlug = keyof typeof projects
