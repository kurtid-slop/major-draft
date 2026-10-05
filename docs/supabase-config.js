// Leaderboard server (Supabase), shared with cs2-player-builder.
//
//   Project Settings -> Data API -> Project URL
//   Project Settings -> API Keys -> publishable (or legacy "anon public") key
//
// The key is meant to be public. It can only call the md_* functions from db/schema.sql;
// Major Draft's tables live in the major_draft schema, which the API can't reach.
// Leave these empty to play offline with no leaderboard.

window.MAJOR_DRAFT_DB = {
  url: "https://cmnksabniwknzmbpyeno.supabase.co",
  key: "sb_publishable_CdAwxZ74rwDK1Dx_ttV9tQ_heDovc6P"
};
