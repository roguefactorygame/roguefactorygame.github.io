const interpolationVariables = {
  attack_potion_max_stacks: 25,
  attack_potion_1_effect: "25",
  attack_potion_2_effect: "1.1",
  attack_potion_duration: "1",
  defense_potion_max_stacks: 15,
  defense_potion_effect: "10",
  defense_potion_duration: "1",
  health_potion_effect: "1",
  luck_potion_max_stacks: 10,
  luck_potion_effect: "1.1",
  luck_potion_duration: "1.5",
  speed_potion_max_stacks: 25,
  speed_potion_effect: "5",
  speed_potion_duration: "1",
};

export const sanitizeDescription = (description) => {
  let sanitized = description;
  for (const [key, value] of Object.entries(interpolationVariables)) {
    sanitized = sanitized.replace(`{${key}}`, value);
  }
  sanitized = sanitized.replace(/\[color=[a-zA-Z]+\]/, "");
  sanitized = sanitized.replace(/\[\/color\]/, "");
  return sanitized;
};
