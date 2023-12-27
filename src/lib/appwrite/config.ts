import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '658b9e433d7465829e32',
  databaseId: '658b9f0a05d845d7ce32',
  storageId: '658b9ed3061c3f9dbd8b',
  userCollectionId: '658b9f5e0794dabc883f',
  postCollectionId: '658b9f341c9a531a011e',
  savesCollectionId: '658b9f7df3a7cfa194d4',
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
