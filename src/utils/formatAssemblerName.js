export const formatAssemblerName = (ingredients) => {
  switch (ingredients) {
    case 1:
      return "Assembler I";
    case 2:
      return "Assembler II";
    case 3:
      return "Assembler III";
    default:
      return "";
  }
};
