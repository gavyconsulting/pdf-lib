import PDFDict from 'src/core/objects/PDFDict';
import PDFAcroField from 'src/core/acroform/PDFAcroField';
// import { createPDFAcroField } from './utils';

class PDFAcroNonTerminal extends PDFAcroField {
  static fromDict = (dict: PDFDict) => new PDFAcroNonTerminal(dict);

  // getKids(): PDFAcroField[] {
  //   const kidDicts = this.Kids();

  //   if (!kidDicts) return [];

  //   const kids: PDFAcroField[] = [];
  //   for (let idx = 0, len = kidDicts.size(); idx < len; idx++) {
  //     const dict = kidDicts.lookup(idx);
  //     // if (dict instanceof PDFDict) kids.push(PDFAcroField.fromDict(dict));
  //     if (dict instanceof PDFDict) kids.push(createPDFAcroField(dict));
  //   }

  //   return kids;
  // }
}

export default PDFAcroNonTerminal;