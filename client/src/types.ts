export type GetFilesParam = { action?: "getFiles"; inputFolderName: string };
export type GetHtmlParam = {
  action?: "getHtml";
  inputFolderName: string;
  fileName: string;
  outputFolderName?: string;
};

export type Params = GetFilesParam | GetHtmlParam;
