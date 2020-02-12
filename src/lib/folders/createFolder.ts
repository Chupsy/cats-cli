import fs from 'fs';
import path from 'path';
export interface FolderSchema {
  path: string;
  children: FolderSchema[];
}
export const createFolders = (schema: FolderSchema) => {
  schema.children.forEach(folder => {
    const folderPath = path.join(schema.path, folder.path);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    createFolders({ path: folderPath, children: folder.children });
  });
};
