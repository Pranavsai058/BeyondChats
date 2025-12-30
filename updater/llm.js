export const rewriteArticle = (original, ref1, ref2) => {
  return `
${original}

References:
- ${ref1.url}
- ${ref2.url}
`;
};
