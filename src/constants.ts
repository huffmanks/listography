export const SITE_CONFIG = {
  title: "Listography",
  description: "May The Best List Win!",
};

export const GAME_RULES = {
  general: "For each round, write 5 items that match the topic. First player to get to 30 points wins.",
  common: {
    rule: "Try to match as <strong><u>MANY</u></strong> players as possible.",
    scoring: "Get <strong><u>ONE point</u></strong> for every answer that appears on another player’s list.",
  },
  rare: {
    rule: "Try to match only <strong><u>ONE</u></strong> other player.",
    scoring: "Get <strong><u>ONE point</u></strong> for every answer that matches one other player.",
  },
  unique: {
    rule: "Try to match <strong><u>NO</u></strong> other players.",
    scoring: "Get <strong><u>ONE point</u></strong> for every valid answer that no other player wrote.",
  },
};
