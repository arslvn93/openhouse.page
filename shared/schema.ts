import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const giveaways = pgTable("giveaways", {
  id: varchar("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  realtorName: text("realtor_name").notNull(),
  realtorCompany: text("realtor_company").notNull(),
  realtorEmail: text("realtor_email").notNull(),
  realtorPhone: text("realtor_phone"),
  prizeValue: text("prize_value").notNull(),
  endDate: timestamp("end_date").notNull(),
  imageUrl: text("image_url"),
  status: text("status").notNull().default("active"),
  entryInstructions: text("entry_instructions").notNull(),
  termsAndConditions: text("terms_and_conditions").notNull(),
});

export const insertGiveawaySchema = createInsertSchema(giveaways).omit({
  id: true,
});

export type InsertGiveaway = z.infer<typeof insertGiveawaySchema>;
export type Giveaway = typeof giveaways.$inferSelect;
