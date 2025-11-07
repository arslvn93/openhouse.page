import { type User, type InsertUser, type Giveaway, type InsertGiveaway } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getGiveaway(id: string): Promise<Giveaway | undefined>;
  createGiveaway(giveaway: InsertGiveaway): Promise<Giveaway>;
  getAllGiveaways(): Promise<Giveaway[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private giveaways: Map<string, Giveaway>;

  constructor() {
    this.users = new Map();
    this.giveaways = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getGiveaway(id: string): Promise<Giveaway | undefined> {
    return this.giveaways.get(id);
  }

  async createGiveaway(insertGiveaway: InsertGiveaway): Promise<Giveaway> {
    const id = Math.random().toString(36).substring(2, 8);
    const giveaway: Giveaway = { 
      ...insertGiveaway, 
      id,
      status: insertGiveaway.status || "active",
      realtorPhone: insertGiveaway.realtorPhone || null,
      imageUrl: insertGiveaway.imageUrl || null,
    };
    this.giveaways.set(id, giveaway);
    return giveaway;
  }

  async getAllGiveaways(): Promise<Giveaway[]> {
    return Array.from(this.giveaways.values());
  }
}

export const storage = new MemStorage();
