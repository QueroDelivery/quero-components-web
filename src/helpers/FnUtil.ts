export const removerAcentos = (inStr: string): string => {
  // accentFold
  return inStr.replace(
    /([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])|(['"])/gi,
    (
      a: string,
      c: string,
      e: string,
      i: string,
      n: string,
      o: string,
      s: string,
      u: string,
      y: string,
      ae: string,
      apost: string
    ): string => {
      if (a) return "a";
      if (c) return "c";
      if (e) return "e";
      if (i) return "i";
      if (n) return "n";
      if (o) return "o";
      if (s) return "s";
      if (u) return "u";
      if (y) return "y";
      if (ae) return "ae";
      if (apost) return "";
      return "";
    }
  );
};

export const removerAcentosComApostofro = (inStr: string): string => {
  // accentFold
  return inStr.replace(
    /([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])|(['"])/gi,
    (
      a: string,
      c: string,
      e: string,
      i: string,
      n: string,
      o: string,
      s: string,
      u: string,
      y: string,
      ae: string,
      apost: string
    ): string => {
      if (a) return "a";
      if (c) return "c";
      if (e) return "e";
      if (i) return "i";
      if (n) return "n";
      if (o) return "o";
      if (s) return "s";
      if (u) return "u";
      if (y) return "y";
      if (ae) return "ae";
      if (apost) return "";
      return "";
    }
  );
};

export const removerAcentosESpecialChars = (str: string): string => {
  try {
    return removerAcentos(str)
      .replace(/[^a-z0-9 ]/gi, "")
      .trim();
  } catch (ex) {
    return "";
  }
};

export const replaceSpecialChars = (str: string): string => {
  str = removerAcentos(str);

  // o resto

  return str.replace(/[^a-z0-9]/gi, "");
};
