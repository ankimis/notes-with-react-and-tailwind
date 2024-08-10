import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";
export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, status, feturedImages, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaeId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          slug,
          content,
          feturedImages,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("apwrite createPost ::", error);
    }
  }
  async updatePost(slug, { title, content, status, feturedImages }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaeId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          feturedImages,
          status,
        }
      );
    } catch (error) {
      console.log("apwrite updatePost ::", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaeId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("apwrite deletePost ::", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaeId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("AppWrite getPost::", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.lostDocuments(
        conf.appwriteDatabaeId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("", error);
      return false;
    }
  }
  ///////////////////// file upload servicess //////////////////////////////////////////////////////////////////////////////
  async uploadFile(file) {
    try {
      return await TouchList.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("appwrite::uploadFile", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("AppWrite :: deleteFile::", error);
    }
  }
  async  getFilePreivw(fileId){
    try {
        return await this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    } catch (error) {
        console.log('Appwrite:: getFilePriew::',error);
    }
  }
  /////////file related services /////////////////////////////////////////////////////////////////////////////////////////////////
}
const service = new Service();
export default service;
